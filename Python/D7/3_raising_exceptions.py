class Door:
    def __init__(self, is_opened = False):
        self.is_opened = is_opened

    def open(self):
        if not self.is_opened:
            self.is_opened = True
            print("The door is now open.")
        else:
            print("The door is already open.")
    def close(self):
        if self.is_opened:
            self.is_opened = False
            print("The door is now closed.")
        else:
            print("The door is already closed.")
class BlockedDoor(Door):
    def open(self):
        raise Exception("A blocked door cannot be opened.")
    
    def close(self):
        raise Exception("A blocked door cannot be closed.")
        

try:
    door = Door()
    door.open()
    door.close()
    door = BlockedDoor()
    door.open()
    door.close()
except Exception as e:
    print(e)
    print("the door is blocked")
