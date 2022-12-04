const JediNameGetter = require('../src/JediNameGetter.ts');

describe('JediNameGetter', () => {
  test('should return a name given an ID', async () => {
    const result = await JediNameGetter(1);
    expect(result).toBe('Luke Skywalker');
  });
});

// why does this not work?
// describe("JediNameGetter", () => {
// 	test("should return error if incorrect id passed", () => {
// 		expect(async () => await JediNameGetter(101)).toThrow("MUST");
// 	});
// });
