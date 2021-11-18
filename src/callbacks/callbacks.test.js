const callAsyncFunc = (cb) => cb();

describe('async: callbacks', () => {
  test('callback has been invoked', (done) => {
    callAsyncFunc(() => {
      expect(true).toEqual(true);
      done();
    });
  });

  test('callback has been invoked', () => {
    const result = jest.fn();
    callAsyncFunc(result);

    expect(result).toHaveBeenCalled();
  });
});
