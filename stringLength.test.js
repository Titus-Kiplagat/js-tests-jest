const stringLength = require('./stringLength');

test('returns the length of a string', () => {
	const string = 'tests'

	const length = stringLength(string);

	expect(length).toBe(5);
});

test('throw an error for a non-string input', () => {
	const number = 100;

	expect(() => stringLength(number)).toThrow('Input must be a string');
});

test('throw an error for an empty string', () => {
	const emptyString = '';

	expect(() => stringLength(emptyString)).toThrow('String length must be between 1 and 10 characters');
});

test('throw an error for string longer than 10 characters', () => {
	const string = 'unit testing';

	expect(() => stringLength(string)).toThrow('String length must be between 1 and 10 characters');
});