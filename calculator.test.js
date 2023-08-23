const Calculator = require('./calculator');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add method', () => {
    test('adds two numbers', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });
  });

  describe('subtract method', () => {
    test('subtracts two numbers', () => {
      expect(calculator.subtract(5, 3)).toBe(2);
    });
  });

  describe('divide method', () => {
    test('divides two numbers', () => {
      expect(calculator.divide(6, 2)).toBe(3);
    });

    test('throws an error when dividing by zero', () => {
      expect(() => calculator.divide(2, 0)).toThrow('Cannot be divisible by zero');
    });
  });

  describe('multiply method', () => {
    test('multiplies two numbers', () => {
      expect(calculator.multiply(2, 2)).toBe(4);
    });
  });
});