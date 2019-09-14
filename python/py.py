class Node:
    def __init__(self, val, next):
        self.val = val
        self.next = next

class SingleLinkStack:
    def __init__(self):
        # props
        self.size = 0
        self.head = None
    def push(self, val):
        new_node = Node(val, self.head)
        if self.size:
            self.size += 1
        self.head = new_node
    def peek(self):
        if self.head:
            return self.head.val
        else:
            return None
    def pull(self):
        if self.head:
            pulled = self.head
            self.head = pulled.next
            return pulled.val
        else:
            return None
    def is_empty(self):
        return bool(self.head)