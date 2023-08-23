const capitalize = require('./capitalize');

describe('capitalize function', () => {
	test('throw an error for non-string input', () => {
		expect(() => capitalize(100)).toThrow('Input must be a string');
	});

	test('capitalizes the first character of a string', () => {
		expect(capitalize('hello')).toBe('Hello');
	});
});