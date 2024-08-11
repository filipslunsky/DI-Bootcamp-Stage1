class Phone:
    def __init__(self, phone_number):
        self.phone_number = phone_number
        self.call_history = []
        self.messages = []

    def call(self, other_phone):
        self.call_history.append(other_phone)
        print(f"{self.phone_number} called {other_phone}.")
    
    def show_call_history(self):
        for call in self.call_history:
            print(call)
    
    def send_message(self, other_phone, content):
        message_log = {}
        message_log["to"] = other_phone
        message_log["from"] = self.phone_number
        message_log["content"] = content
        self.messages.append(message_log)
        print(f"A message from {self.phone_number} was sent to {other_phone} with a text: '{content}'.")
    
    def show_outgoing_messages(self):
        for message in self.messages:
            if message["from"] == self.phone_number:
                print(message["to"])
                print(message["content"])

    def show_incoming_messages(self):
        for message in self.messages:
            if message["to"] == self.phone_number:
                print(message["from"])
                print(message["content"])

    def show_messages_from(self, other_phone_number):
        for message in self.messages:
            if message["from"] == other_phone_number:
                print(message["content"])

    

my_phone = Phone(420773883322)
my_phone.call(972534277320)
my_phone.show_call_history()
my_phone.send_message(56723427, "text message 1")
my_phone.send_message(567123, "text message 2")
my_phone.send_message(56734335, "text message 3")
my_phone.show_outgoing_messages()

