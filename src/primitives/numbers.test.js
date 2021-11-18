describe('primitives: numbers', () => {
  test('it returns a number', () => {
    const isNumber = (number) => number;

    expect(typeof isNumber(2)).toEqual('number');
  });

  test('it returns a number', () => {
    const isNumber = (number) => number;

    expect(isNumber(2)).toEqual(expect.any(Number));
  });
});
