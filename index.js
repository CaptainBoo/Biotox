const inputOne = document.getElementById('first-num');
const inputTwo = document.getElementById('second-num');
const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const resetButton = document.getElementById('reset');

let result = document.getElementById('result');

add.addEventListener('click', () => {
	const numOne = parseInt(inputOne.value);
	const numTwo = parseInt(inputTwo.value);

	result.innerText = numOne + numTwo;
});

subtract.addEventListener('click', () => {
	const numOne = parseInt(inputOne.value);
	const numTwo = parseInt(inputTwo.value);

	result.innerText = numOne - numTwo;
});

multiply.addEventListener('click', () => {
	const numOne = parseInt(inputOne.value);
	const numTwo = parseInt(inputTwo.value);

	result.innerText = numOne * numTwo;
});

divide.addEventListener('click', () => {
	const numOne = parseInt(inputOne.value);
	const numTwo = parseInt(inputTwo.value);

	result.innerText = numOne / numTwo;
});

function reset() {
	inputOne.value = '';
	inputTwo.value = '';

	result.innerText = '0';
}

resetButton.addEventListener('click', reset);
