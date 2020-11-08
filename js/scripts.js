// Next steps:
// We want to show the impact of time complexity using graphs
// Input slider
// Every time there's a change, it recalls graph() and shows the shift left of the average
// time that the mergeSort() is taking to finish.
// This illustrates the that different algorithms have pros and cons that needs to be known when
// writing algorithimic solutions

// So the best algorithms for

// 100k - 500k data points you should choose:
// XYZsort()
// exampleSort()

// 1m - 5m you should choose:
// quickerSort();

// 5m - 1000b:
// flashSort();

// mainGraph - show the time complexity

// Check box click the sorts that you want graphed, and then display their time complexity
// Lines cross over where one algorithm becomes clearly better than another

// time complexities for various sorting algorithms with their best/worst/average case <- this displays why the time
// on the graph changes. In certain cases some sorting algorithms are going to perform way better than in other cases
// https://www.geeksforgeeks.org/time-complexities-of-all-sorting-algorithms/

// Binary Search = O(log n)
// y = O(n\log n)
// O(n^2)
// 							5
// 					|				  |
// 				10
//       |   |	|  | |  | | |

// Back End Logic
function mergeSort(arrayToSort) {
	if (arrayToSort.length === 1) return arrayToSort;
	const middleIndex = Math.floor(arrayToSort.length / 2);
	const firstHalf = mergeSort(arrayToSort.slice(0, middleIndex));
	const secondHalf = mergeSort(arrayToSort.slice(middleIndex));
	const sortedArray = [];
	let i = 0;
	let j = 0;
	while (i < firstHalf.length && j < secondHalf.length) {
		if (firstHalf[i] < secondHalf[j]) {
			sortedArray.push(firstHalf[i++]);
		} else {
			sortedArray.push(secondHalf[j++]);
		}
	}
	while (i < firstHalf.length) sortedArray.push(firstHalf[i++]);
	while (j < secondHalf.length) sortedArray.push(secondHalf[j++]);
	return sortedArray;
}

// Front End Logic
$(document).ready(function () {
	$('#formOne').submit(function () {
		event.preventDefault();
		// From https://stackoverflow.com/questions/5836833/create-an-array-with-random-values
		let arrayToSort = Array(10000000)
			.fill()
			.map(() => Math.round(Math.random() * 2000));

		// From https://stackoverflow.com/questions/313893/how-to-measure-time-taken-by-a-function-to-execute

		// Start the timer
		let startTime = performance.now();
		let lapTimes = [];

		// Run the Sort
		for (let i = 0; i < 11; i++) {
			let lapStart = performance.now();
			sortedArray = mergeSort(arrayToSort);
			console.log('this is loop ' + i);
			let lapEnd = performance.now();
			let eachLoopTime = lapEnd - lapStart;
			console.log(eachLoopTime);
			lapTimes.push(eachLoopTime);
		}

		console.log(lapTimes);
		// https://jrsinclair.com/articles/2019/five-ways-to-average-with-js-reduce/
		function average(nums) {
			return nums.reduce((a, b) => a + b) / nums.length;
		}

		console.log('The average time is ' + average(lapTimes));

		// Stop the timer
		let endTime = performance.now();
		runTimeMergeSort = (endTime - startTime) / 10;

		$('.userResults')
			.empty()
			.append('The unsorted array is: ' + arrayToSort + '</br>');
		$('.userResults').append('The sorted array is: ' + sortedArray + '</br>');
		$('.userResults').append(
			'It took the MergeSort function ' + runTimeMergeSort + ' ms to run'
		);
	});
});
