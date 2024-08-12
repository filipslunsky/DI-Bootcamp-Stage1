class Pagination:
    def __init__(self, items, pageSize):
        self.items = items
        self.pageSize = int(pageSize)
        self.page_list = []
        num_full_pages = int(len(self.items)/self.pageSize) + 1
        for i in range(0, num_full_pages):
            sub_list = self.items[0 + i * self.pageSize:self.pageSize + self.pageSize * i]
            self.page_list.append(sub_list)
        if len(self.page_list[-1]) == 0:
            self.page_list.remove([])
        self.current_page = 0
    
    def get_visible_items(self):
        return self.page_list[0]
    
    def prevPage(self):
        if self.current_page == 1:
            return "You are already on the first page."
        else:
            self.current_page -= 1
            return self.page_list[self.current_page - 1]
    
    def nextPage(self):
        if self.current_page == len(self.page_list):
            return "You are already on the last page."
        else:
            self.current_page += 1
            return self.page_list[self.current_page - 1]

    def firstPage(self):
        self.current_page = 1
        return self.page_list[0]
    
    def lastPage(self):
        self.current_page = len(self.page_list)
        return self.page_list[-1]

    def go_to_page(self,page_num = 1):
        self.page_num = page_num
        if self.page_num > len(self.page_list):
            return f"Not enough pages, the last page is number {len(self.page_list)}."
        self.current_page = self.page_num
        return self.page_list[self.page_num - 1]    
        

    






alphabetList = list("abcdefghijklmnopqrstuvwxyz")

p = Pagination(alphabetList, 4)

print(p.get_visible_items())

print(p.go_to_page(3))

print(p.prevPage())

print(p.nextPage())

print(p.firstPage())

print(p.lastPage())
