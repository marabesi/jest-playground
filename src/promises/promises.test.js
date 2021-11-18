describe('async', () => {
  function callAsyncFunction() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
  }

  function rejectsAsyncFunction() {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject(false);
      }, 1000);
    });
  }

  describe('promises', () => {
    test('assert after some time', (done) => {
      callAsyncFunction().then((value) => {
        expect(value).toBe(true);
        done();
      });
    });
  });

  describe('timers', () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    test('should handle next scene', async () => {
      const value = callAsyncFunction();

      jest.advanceTimersByTime(2000);

      expect(await value).toBe(true);
    });
  });

  describe('resolves and rejects', () => {
    test('my async test', async () => {
      await expect(callAsyncFunction()).resolves.toEqual(true);
    });

    test('my async test rejects', async () => {
      await expect(rejectsAsyncFunction()).rejects.toEqual(false);
    });
  });
});
