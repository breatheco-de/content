---
title: "How to consume an API in Python?"
subtitle: "Learn how to consume an API in Python. Discover the essential steps to access and use external data in your applications. Boost your projects now!"
tags: ["python", "apis","http requests","flask","http"]
authors: ["DF27ARTS"]

---

## How to Consume an API in Python using requests?

In the world of modern development, it's very common to use an API (Application Programming Interface) to connect to third-party services. For example, if you're creating an application where you need to track users' locations, instead of writing all the necessary code for that, you can simply use the Google Maps API.

In this article, we will see how to consume an API in Python with the help of the **Requests** library. In the following example, we will look at a simple case of a GET request to the free [jsonplaceholder](https://jsonplaceholder.typicode.com/) API

To use the **Requests** library, you first need to install it on your computer. You can do this with the following command:

```bash
pip install requests
```

Once installed, you can use it in your code to make **HTTP** requests, in this case, a **GET** request for an example user.

```py
import requests

URL = "https://jsonplaceholder.typicode.com/users/1"
response = requests.get(URL)

if response.status_code == 200:
    print('Successful request')
    print('Data:', response.json())
else:
    print('Error in the request, details:', response.text)
```

> Code output:

```bash
successful request
Data: {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}
```

In this example, we use the `get(api_url)` method of the requests library to retrieve information from a fake user provided by the **jsonplaceholder** API. This method returns the information received from the API and stores it in the `response` variable. If the request was successful, the API returns a `status_code` in the range of 2XX (between 200 and 299) and the user information. If there was an error in the process, it returns a `status_code` in the 4XX range (between 400 and 499) and a message explaining the error.

## What is an API in Python?

APIs are mechanisms that allow two software components to communicate with each other through a set of definitions and protocols. In the context of programming, an API is used to access functions and data from an external application. In [Python](https://4geeks.com/technology/python), APIs are a common way to obtain and manipulate data from online services such as web services, databases, and other external resources.

A common example of an API is the [weather API](https://openweathermap.org/api), which provides basic information about the weather in any city or country. If you need to create an application that requires weather information from anywhere in the world, you can use this API via HTTP protocols to retrieve and use that information directly in your application

## How to Consume an API?

Below are some examples of how to consume an API in Python using the **Requests** library and the free [jsonplaceholder](https://jsonplaceholder.typicode.com/) API that provides simulated data. To get started, you need to install the requests library on your computer with the following command:

```bash
pip install requests
```

This library allows you to access information obtained from an API in a very simple way. Here are some of the most common methods and properties for accessing the information returned by requests:

| Property           | Description                                                                                                                                |
|----------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
|`response.status_code`|  Contains the status code of the request, e.g., 201                                                                                   |
|`response.url`        | Contains the URL of the request.                                                                                                              |
|`response.headers`    |Provides the headers of the request.                                                                                                      |
|`response.cookies`    | Provides the cookies of the request.                                                                                                      |
|`response.encoding`   | Contains the encoding of the request, e.g., utf-8.                                                                                     |
|`response.json()`     | Stores the information received from the API. For example, in the weather API, it might be a list of dictionaries with city information.|

> Important note: Requests to the **jsonplaceholder** API only simulate the behavior of a real API. Not all requests are functional. For example, if you make a POST request to the **jsonplaceholder** API, the information will NOT be saved on the API's servers, but the API responds with a message that simulates success.

### Example with GET request

**GET** requests are used to retrieve information from a server.

```py
import requests

URL = "https://jsonplaceholder.typicode.com/posts/1"
response = requests.get(URL)

if response.status_code == 200:
    data = response.json()

    print('Successful request')
    print('Data:', data)
else:
    print('Error in the request, details:', response.text)
```

> code output:

```bash
successful request
Data: {
    'userId': 1, 
    'id': 1, 
    'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', 
    'body': 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
}
```

In this example, we use the `get()` method of the requests library to retrieve information about a simulated post from the **jsonplaceholder** API. This information is stored in the `response` variable. Then, with an `if-else` conditional, we check if the API request was successful. If it was, we print the information to the console; otherwise, we print an error message.

### Example with POST request

**POST** requests are used to send data to the server.

```py
import requests

URL = "https://jsonplaceholder.typicode.com/posts"
DATA = {
    "title": "Example Title",
    "body": "Content of a new post",
    "userId": 1
}

response = requests.post(URL, json=DATA)

if response.status_code == 201:
    data = response.json()

    print('Post created successfully')
    print('Response:', data)
else:
    print('Error in the request, details:', response.text)
```

> Code output:

```bash
Post created successfully
Response: {
    'title': 'Example Title', 
    'body': 'Content of a new post', 
    'userId': 1, 
    'id': 101
}
```

In this example, we use the `post()` method from the requests library to create a new object on the server. `post()` method takes two parameters: the first one is the API URL, and the second one is the information of the object we want to create within a dictionary.

### Example with PUT request

**PUT** requests are used to update data on the server.

```py
import requests

URL = "https://jsonplaceholder.typicode.com/posts/1"
DATA = {
    "title": "Título actualizado",
    "userId": 2
}

response = requests.put(URL, json=DATA)

if response.status_code == 200:
    data = response.json()

    print('Post updated successfully')
    print('Response:', data)
else:
    print('Error in the request, details:', response.text)
```

> code output:

```bash
Post updated successfully
Response: {
    'title': 'Updated Title', 
    'userId': 2, 
    'id': 1
}
```

To make a PUT request, we need to use the `put()` method from the requests library. This method also takes two parameters: the first one is the URL that tells the API which specific object you want to update, and the second parameter is the information with which you want to update the object.

### Example with DELETE request

**DELETE** requests are used to delete data on the server.

```py
import requests

URL = "https://jsonplaceholder.typicode.com/posts/1"
response = requests.delete(URL)

if response.status_code == 200:
    print('Post deleted successfully.')
else:
    print('Error in the request, details:', response.text)
```

> code output:

```bash
Post deleted successfully.
```

To make a DELETE request in Python, we need to use the `delete()` method from the requests library. This method takes the URL as a parameter, indicating which specific object you want to delete. Normally, APIs return a message indicating whether the object was deleted successfully or not, but the jsonplaceholder API does not return a specific message; it only returns a **200** `status_code`.

## Conclusion

APIs play a fundamental role in application integration and data exchange in the world of software development. In Python, the **Requests** library allows us to interact with APIs in a simple and intuitive way. In this article, we learned how to use this library to make **HTTP** requests to obtain, create, update, or delete information in an API. Now, you are ready to consume an API correctly and use its functionalities in your own applications.

## Recommended Material

To dive deeper into consuming APIs with Python, we highly encourage you to take this **interactive course**. It's a great opportunity to learn hands-on and master the `requests` module:

👉 [Take this interactive course on Python HTTP Requests & API!](https://4geeks.com/interactive-exercise/python-http-requests-api-tutorial-exercises)

Don't miss out! It's the first step toward becoming an expert in API integration.
