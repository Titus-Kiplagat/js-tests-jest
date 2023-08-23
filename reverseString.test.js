const reverseString = require('./reverseString');

test('reverses a string', () => {
	const string = 'Hello';

	const reversedString = reverseString(string);

	expect(reversedString).toBe('olleH');
});

test('throw an error for a non-string input', () => {
	const number = 100;

	expect(() => reverseString(number)).toThrow('Input type must be a string');
});

test('throw an error for an empty string', () => {
	const emptyString = '';

	expect(() => reverseString(emptyString)).toThrow('String must have more than one character');
});

test('throw an error for a string with only one character', () => {
	const singleCharacterString = 'h'
	
	expect(() => reverseString(singleCharacterString)).toThrow('String must have more than one character');
});