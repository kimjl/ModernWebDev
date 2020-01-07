//password/Validator
//Accepts 2 arguments, password and username
//Password must be at least 8 characters long, no spaces, cannot contain username
//If all requirements met, return true, otherwise false

// function isValidPassword(password, username) {
// 	if (password.length < 8) {
// 		console.log(false);
// 		return false;
// 	} else if (password.indexOf(' ') !== -1) {
// 		console.log(false);
// 		return false;
// 	} else if (password.includes(username)) {
// 		console.log(false);
// 		return false;
// 	} else {
// 		console.log(true);
// 		return true;
// 	}
// }

function isValidPassword(password, username) {
	if (password.length < 8 || password.indexOf(' ') !== -1 || password.includes(username)) {
		console.log(false);
		return false;
	} else {
		console.log(true);
		return true;
	}
}
isValidPassword('hello123', 'tim'); //true
isValidPassword('james123', 'james'); //false

//Write a function to find the average in an array of numbers

function avg(nums) {
	let result = 0;
	for (let num of nums) {
		result += num;
	}
	console.log(result / nums.length);
}

avg([ 0, 50 ]); //25
avg([ 75, 76, 80, 95, 100 ]); //85.2

//A pangram is a sentence that contains every letter of the alphabet like: The quick brown fox jumps over the lazy dog.
//Write a function called isPangram which checks if a given sentence contains every letter of the alphabet. Ignore string casing

function isPangram(sentence) {
	sentence = sentence.toLowerCase();
	let alphabet = 'abcdefghijklmnopqrstuvwxyz';
	for (let alpha of alphabet) {
		if (sentence.indexOf(alpha) === -1) {
			console.log(false);
			return false;
		}
	}
	console.log(true);
	return true;
}

isPangram('The five boxing wizards jump quickly'); //true
isPangram('The five boxing wizards jump quick'); //false

//Write a getCard() function which returns a random playing card object like: { value: 'K', suite: 'clubs'}
//Pick a random value from 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
//Pick random suite from Clubs, Spades, Hearts, Diamonds
//return both in an object

// function getCard() {
// 	const result = {};
// 	const values = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A' ];
// 	const idx = Math.floor(Math.random() * values.length);

// 	const suite = [ 'Clubs', 'Spades', 'Hearts', 'Diamonds' ];
// 	const suiteIdx = Math.floor(Math.random() * suite.length);
// 	// console.log(values[idx]);
// 	// console.log(suite[suiteIdx]);
// 	result.value = values[idx];
// 	result.suite = suite[suiteIdx];
// 	console.log(result);
// }

function pick(arr) {
	const idx = Math.floor(Math.random() * arr.length);
	return arr[idx];
}
function getCard() {
	const values = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A' ];
	const suite = [ 'Clubs', 'Spades', 'Hearts', 'Diamonds' ];
	console.log({ value: pick(values), suite: pick(suite) });
}

getCard();
