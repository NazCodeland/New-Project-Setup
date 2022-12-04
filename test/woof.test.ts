const woof = require('../src/woof.ts');

// use "test.only" to run only one test and jest will skip the result
// "test.only" is per file. Tests in another file will be run
// test.only("should return number of woofs",()=>{})

test('should return number of woofs', () => {
  const result = woof('oh herro');
  expect(result).toBe('8 woof!');
});

// test("should return null when not given string", () => {
// 	const result = woof();
// 	expect(result).toBeNull();
// });

test('should throw error when not given string', () => {
  // expect() should have a function inside of it so that it contains
  // the error being thrown in the function that's being tested
  // so it can be passed to ".toThrow()"
  expect(() => woof()).toThrow('MUST');
});

//
// if you don't have the time but want to write a test, you can leave a reminder
// by using test.todo. The test.todo reminder will be displayed in the jest log output
test.todo('should not allow numbers to be passed');

//
// if you don't have the time to fix a test, you can skip it until later by using "test.skip"
// the skipped test will be displayed in the jest log output
test.skip('should return image when "WOOF!" is passed', () => {
  woof();
});

// in the jest output, when using --watch, you get additional options under "Watch usage"
// you can run tests within a test file based on the pattern
// you can run tests within a folder based on a test file name
