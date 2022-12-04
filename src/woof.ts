function woof(str) {
  console.log(`woof is running ${str}`);
  if (typeof str !== 'string') {
    throw Error('MUST be a string');
    // return null;
  }
  return `${str.length} woof!`;
}

module.exports = woof;
