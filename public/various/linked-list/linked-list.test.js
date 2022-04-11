import { LinkedList } from './linked-list.js';

test('should insert value to beginning of list', () => {
  const list = new LinkedList();
  expect(list.length).toBe(0);

  list.unshift(1);

  expect(list.head).toEqual({
    value: 1,
    next: null,
  });
  expect(list.length).toBe(1);
});
