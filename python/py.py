class Node:
    def __init__(self, val, next):
        self.val = val
        self.next = next

class SingleLinkStack:
    def __init__(self):
        # props
        # list_size
        self.size = 0
        # list_head
        self.head = None
    # list_push
    def push(self, val):
        new_node = Node(val, self.head)
        if hasattr(self, 'size'):
            self.size += 1
        self.head = new_node
    # list_peek
    def peek(self):
        if self.head:
            return self.head.val
        else:
            return None
    # list_pop
    def pop(self):
        if self.head:
            pop = self.head
            self.head = pop.next
            if hasattr(self, 'size'):
                self.size -= 1
            return pop.val
        else:
            return None
    # list_is_empty
    def is_empty(self):
        return not bool(self.head)