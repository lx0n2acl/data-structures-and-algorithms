import LinkedList from '../LinkedList';

test('test linked list - append', () => {
  let linkedList = new LinkedList()
  linkedList.append('Hello');
  linkedList.append(', ');
  linkedList.append('World!');

  expect(linkedList.toString()).toBe('Hello, World!');
}); 