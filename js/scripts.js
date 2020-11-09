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
//
//
//
//

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

// Average Function - From - https://jrsinclair.com/articles/2019/five-ways-to-average-with-js-reduce/
function average(nums) {
	return nums.reduce((a, b) => a + b) / nums.length;
}

function createDynamArray(num) {
	arrayToSort = Array(num)
		.fill()
		.map(() => Math.round(Math.random() * 10));
	// console.log(arrayToSort);
	return arrayToSort;
}

function measureTime(arrayToSort) {
	let startTime = performance.now();
	mergeSort(arrayToSort);
	let endTime = performance.now();
	let runTime = endTime - startTime;

	return runTime;
}

console.log(measureTime(createDynamArray(7)));
console.log(measureTime(createDynamArray(43)));

// // Front End Logic
// $(document).ready(function () {
// 	$('#formOne').submit(function () {
// 		event.preventDefault();
// 		let arrayToSort = [];

// 		// Timer - From - https://stackoverflow.com/questions/313893/how-to-measure-time-taken-by-a-function-to-execute
// 		// Start the timer

// 		// Append the Results
// 		$('.userResults')
// 			.empty()
// 			.append('The unsorted array is: ' + arrayToSort + '</br>');
// 		$('.userResults').append('The sorted array is: ' + sortedArray + '</br>');
// 		$('.userResults').append(
// 			'It took the MergeSort function ' + runTimeMergeSort + ' ms to run'
// 		);

// 		let dataArray = [];
// 		for (let i = 0; i < 10; i += 5) {
// 			let dataPointValue = { x: i, y: createDynamArray(i) };
// 			dataArray.push(dataPointValue);
// 		}

// 		// let dataPointValue1 = { x: 1000, y: lapTimes[1] };
// 		// let dataPointValue2 = { x: 10, y: lapTimes[2] };
// 		// let dataPointValue3 = { x: 10, y: lapTimes[3] };
// 		// let dataPointValue4 = { x: 10, y: lapTimes[4] };

// 		console.log(dataPointValue0);

// 		/*
// 		var chart = new CanvasJS.Chart('chartContainer', {
// 			data: [
// 				{
// 					type: 'line',
// 					indexLabelFontSize: 16,
// 					dataPoints: [
// 						dataPointValue0,
// 						dataPointValue1,
// 						dataPointValue2,
// 						dataPointValue3,
// 						dataPointValue4,
// 					],
// 				},
// 			],
// 		});
// 		chart.render();
// 			*/
// 	});
// });
