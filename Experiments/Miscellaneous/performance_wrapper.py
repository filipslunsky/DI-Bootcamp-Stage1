import time

def performance(func):
    def wrapper(*args, **kwargs):
        time1 = time.time()
        func(*args, **kwargs)
        time2 = time.time()
        print(f"total time {round((time2 - time1), 4)} seconds")
    return wrapper

@performance
def long_and_useless():
    for i in range(100000000):
        i ** 3

long_and_useless()