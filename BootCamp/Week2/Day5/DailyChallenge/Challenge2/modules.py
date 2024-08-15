import requests
import time

def get_request_time(address):
    page = ""
    start_time = time.time()
    page = requests.get(address)
    if page != "":
        stop_time = time.time()
        elapsed_time = stop_time - start_time
        elapsed_time = round(elapsed_time, 4)
        return f"it took a total of {elapsed_time} seconds to access and get response from {address}"
    else:
        return f"failed to access {address}"


print(get_request_time("https://www.imdb.com/"))
print(get_request_time("https://www.google.com/"))
print(get_request_time("https://www.ynet.co.il/home/0,7340,L-,00.html"))
print(get_request_time("https://www.facebook.com/"))
