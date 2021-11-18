describe('modifiers: not', () => {
  test('light is on', () => {
    const isOff = false;

    expect(!isOff).toBe(true);
  });

  test('light is on', () => {
    const isOff = false;
    expect(isOff).not.toBe(true);
  });
});
