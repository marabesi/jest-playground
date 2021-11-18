describe('primitives: arrays', () => {
  describe('array contains', () => {
    test('list three fruits', () => {
      const expectedFruits = ['banana', 'mango', 'watermelon'];

      expect(expectedFruits[0]).toEqual('banana');
      expect(expectedFruits[1]).toEqual('mango');
      expect(expectedFruits[2]).toEqual('watermelon');
    });

    test('list three fruits', () => {
      const expectedFruits = ['banana', 'mango', 'watermelon'];

      const actualFruits = ['banana', 'mango', 'watermelon'];

      expect(expectedFruits).toEqual(expect.arrayContaining(actualFruits));
    });
  });

  describe('array length', () => {
    test('list with three numbers', () => {
      const myList = [1, 2, 3];
      expect(myList.length).toEqual(3);
    });

    test('list with three numbers', () => {
      const myList = [1, 2, 3];
      expect(myList).toHaveLength(3);
    });
  });
});
