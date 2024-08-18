import requests
import json

response = requests.get("https://api.chucknorris.io/")

status_code = response.status_code
header = response.headers

print(header)

