describe('primitives: booleans', () => {
  test('expected is greater than the desired', () => {
    const expected = 10;
    const actual = 3;
    expect(expected > actual).toEqual(true);
  });

  test('expected is greater than the desired', () => {
    const expected = 10;
    const actual = 3;
    expect(expected).toBeGreaterThan(actual);
  });
});
