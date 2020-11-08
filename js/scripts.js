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
		let arrayToSort = Array(25)
			.fill()
			.map(() => Math.round(Math.random() * 100));

		// console.log(arrayToSort);

		sortedArray = mergeSort(arrayToSort);

		$('.userResults').append('The unsorted array is: ' + arrayToSort + '</br>');
		$('.userResults').append('The sorted array is: ' + sortedArray);
	});
});
