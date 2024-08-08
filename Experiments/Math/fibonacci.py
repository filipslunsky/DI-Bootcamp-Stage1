def get_fibonacci(number = 100):
    top = number - 2
    fibonacci =[1, 1]

    for i in range(0, top):
        next_number = fibonacci[-1] + fibonacci[-2]
        fibonacci.append(next_number)

    return fibonacci

fibonacci = get_fibonacci(100)
divine_proportion = fibonacci[-1] / fibonacci[-2]

print(divine_proportion)