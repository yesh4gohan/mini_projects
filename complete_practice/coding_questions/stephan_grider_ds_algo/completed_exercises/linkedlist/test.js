const L = require('./index');
const List = L.LinkedList;
const Node = L.Node;

test.skip('List is a class', () => {
  expect(typeof List.prototype.constructor).toEqual('function');
});

test.skip('Node is a class', () => {
  expect(typeof Node.prototype.constructor).toEqual('function');
});

describe('A Node', () => {
  test.skip('has properties "data" and "next"', () => {
    const node = new Node('a', 'b');
    expect(node.data).toEqual('a');
    expect(node.next).toEqual('b');
  });
});

describe('Insert First', () => {
  test.skip('appends a node to the start of the list', () => {
    const l = new List();
    l.insertFirst(1);
    expect(l.head.data).toEqual(1);
    l.insertFirst(2);
    expect(l.head.data).toEqual(2);
  });
});

describe('Size', () => {
  test.skip('returns the number of items in the linked list', () => {
    const l = new List();
    expect(l.size()).toEqual(0);
    l.insertFirst(1);
    l.insertFirst(1);
    l.insertFirst(1);
    l.insertFirst(1);
    expect(l.size()).toEqual(4);
  });
});

describe('GetFirst', () => {
  test.skip('returns the first element', () => {
    const l = new List();
    l.insertFirst(1);
    expect(l.getFirst().data).toEqual(1);
    l.insertFirst(2);
    expect(l.getFirst().data).toEqual(2);
  });
});

describe('GetLast', () => {
  test.skip('returns the last element', () => {
    const l = new List();
    l.insertFirst(2);
    expect(l.getLast()).toEqual({ data: 2, next: null });
    l.insertFirst(1);
    expect(l.getLast()).toEqual({ data: 2, next: null });
  });
});

describe('Clear', () => {
  test.skip('empties out the list', () => {
    const l = new List();
    expect(l.size()).toEqual(0);
    l.insertFirst(1);
    l.insertFirst(1);
    l.insertFirst(1);
    l.insertFirst(1);
    expect(l.size()).toEqual(4);
    l.clear();
    expect(l.size()).toEqual(0);
  });
});

describe('RemoveFirst', () => {
  test.skip('removes the first node when the list has a size of one', () => {
    const l = new List();
    l.insertFirst('a');
    l.removeFirst();
    expect(l.size()).toEqual(0);
    expect(l.getFirst()).toEqual(null);
  });

  test.skip('removes the first node when the list has a size of three', () => {
    const l = new List();
    l.insertFirst('c');
    l.insertFirst('b');
    l.insertFirst('a');
    l.removeFirst();
    expect(l.size()).toEqual(2);
    expect(l.getFirst().data).toEqual('b');
    l.removeFirst();
    expect(l.size()).toEqual(1);
    expect(l.getFirst().data).toEqual('c');
  });
});

describe('RemoveLast', () => {
  test.skip('RemoveLast removes the last node when list is empty', () => {
    const l = new List();
    expect(() => {
      l.removeLast();
    }).not.toThrow();
  });

  test.skip('RemoveLast removes the last node when list is length 1', () => {
    const l = new List();
    l.insertFirst('a');
    l.removeLast();
    expect(l.head).toEqual(null);
  });

  test.skip('RemoveLast removes the last node when list is length 2', () => {
    const l = new List();
    l.insertFirst('b');
    l.insertFirst('a');

    l.removeLast();

    expect(l.size()).toEqual(1);
    expect(l.head.data).toEqual('a');
  });

  test.skip('RemoveLast removes the last node when list is length 3', () => {
    const l = new List();
    l.insertFirst('c');
    l.insertFirst('b');
    l.insertFirst('a');
    l.removeLast();

    expect(l.size()).toEqual(2);
    expect(l.getLast().data).toEqual('b');
  });
});

describe('InsertLast', () => {
  test.skip('adds to the end of the list', () => {
    const l = new List();
    l.insertFirst('a');

    l.insertLast('b');

    expect(l.size()).toEqual(2);
    expect(l.getLast().data).toEqual('b');
  });
});

describe('GetAt', () => {
  test.skip('returns the node at given index', () => {
    const l = new List();
    expect(l.getAt(10)).toEqual(null);

    l.insertLast(1);
    l.insertLast(2);
    l.insertLast(3);
    l.insertLast(4);

    expect(l.getAt(0).data).toEqual(1);
    expect(l.getAt(1).data).toEqual(2);
    expect(l.getAt(2).data).toEqual(3);
    expect(l.getAt(3).data).toEqual(4);
  });
});

describe('RemoveAt', () => {
  test.skip('removeAt doesnt crash on an empty list', () => {
    const l = new List();
    expect(() => {
      l.removeAt(0);
      l.removeAt(1);
      l.removeAt(2);
    }).not.toThrow();
  });

  test.skip('removeAt doesnt crash on an index out of bounds', () => {
    const l = new List();
    expect(() => {
      const l = new List();
      l.insertFirst('a');
      l.removeAt(1);
    }).not.toThrow();
  });

  test.skip('removeAt deletes the first node', () => {
    const l = new List();
    l.insertLast(1);
    l.insertLast(2);
    l.insertLast(3);
    l.insertLast(4);
    expect(l.getAt(0).data).toEqual(1);
    l.removeAt(0);
    expect(l.getAt(0).data).toEqual(2);
  });

  test.skip('removeAt deletes the node at the given index', () => {
    const l = new List();
    l.insertLast(1);
    l.insertLast(2);
    l.insertLast(3);
    l.insertLast(4);
    expect(l.getAt(1).data).toEqual(2);
    l.removeAt(1);
    expect(l.getAt(1).data).toEqual(3);
  });

  test.skip('removeAt works on the last node', () => {
    const l = new List();
    l.insertLast(1);
    l.insertLast(2);
    l.insertLast(3);
    l.insertLast(4);
    expect(l.getAt(3).data).toEqual(4);
    l.removeAt(3);
    expect(l.getAt(3)).toEqual(null);
  });
});

describe('InsertAt', () => {
  test.skip('inserts a new node with data at the 0 index when the list is empty', () => {
    const l = new List();
    l.insertAt('hi', 0);
    expect(l.getFirst().data).toEqual('hi');
  });

  test.skip('inserts a new node with data at the 0 index when the list has elements', () => {
    const l = new List();
    l.insertLast('a');
    l.insertLast('b');
    l.insertLast('c');
    l.insertAt('hi', 0);
    expect(l.getAt(0).data).toEqual('hi');
    expect(l.getAt(1).data).toEqual('a');
    expect(l.getAt(2).data).toEqual('b');
    expect(l.getAt(3).data).toEqual('c');
  });

  test.skip('inserts a new node with data at a middle index', () => {
    const l = new List();
    l.insertLast('a');
    l.insertLast('b');
    l.insertLast('c');
    l.insertLast('d');
    l.insertAt('hi', 2);
    expect(l.getAt(0).data).toEqual('a');
    expect(l.getAt(1).data).toEqual('b');
    expect(l.getAt(2).data).toEqual('hi');
    expect(l.getAt(3).data).toEqual('c');
    expect(l.getAt(4).data).toEqual('d');
  });

  test.skip('inserts a new node with data at a last index', () => {
    const l = new List();
    l.insertLast('a');
    l.insertLast('b');
    l.insertAt('hi', 2);
    expect(l.getAt(0).data).toEqual('a');
    expect(l.getAt(1).data).toEqual('b');
    expect(l.getAt(2).data).toEqual('hi');
  });

  test.skip('insert a new node when index is out of bounds', () => {
    const l = new List();
    l.insertLast('a');
    l.insertLast('b');
    l.insertAt('hi', 30);

    expect(l.getAt(0).data).toEqual('a');
    expect(l.getAt(1).data).toEqual('b');
    expect(l.getAt(2).data).toEqual('hi');
  });
});

describe('ForEach', () => {
  test.skip('applies a transform to each node', () => {
    const l = new List();

    l.insertLast(1);
    l.insertLast(2);
    l.insertLast(3);
    l.insertLast(4);

    l.forEach(node => {
      node.data += 10;
    });

    expect(l.getAt(0).data).toEqual(11);
    expect(l.getAt(1).data).toEqual(12);
    expect(l.getAt(2).data).toEqual(13);
    expect(l.getAt(3).data).toEqual(14);
  });
});

describe('for...of loops', () => {
  test.skip('works with the linked list', () => {
    const l = new List();

    l.insertLast(1);
    l.insertLast(2);
    l.insertLast(3);
    l.insertLast(4);

    for (let node of l) {
      node.data += 10;
    }

    expect(l.getAt(0).data).toEqual(11);
    expect(l.getAt(1).data).toEqual(12);
    expect(l.getAt(2).data).toEqual(13);
    expect(l.getAt(3).data).toEqual(14);
  });

  test.skip('for...of works on an empty list', () => {
    const l = new List();
    expect(() => {
      for (let node of l) {
      }
    }).not.toThrow();
  });
});
