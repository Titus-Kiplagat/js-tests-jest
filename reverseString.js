const reverseString = (string) => {
  if (typeof string !== 'string') throw new Error('Input type must be a string');

  if (string.length <= 1) throw new Error('String must have more than one character');

  return string.split('').reverse().join('');
};

module.exports = reverseString;