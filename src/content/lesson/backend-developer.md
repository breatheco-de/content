---
title: "Knowing What is Behind a Back-End Developer"
subtitle: "Learn here everything about Back-End Web development and what it takes to become Back-End developer"
cover: "https://ucarecdn.com/98208ebb-dcb3-4e40-9ae4-4ec886213f97/"
textColor: "white"
date: "2018-05-11"
tags: ["client-server","back-end"]
status: "published"

---

## The Back-End Side of the Web

Not so long ago, browsers were very dumb.  All they did was render HTML documents in a very early version of HTML.  There was no CSS, nor JS.  That means that front-end web developers did not exist!

All the work was done by the server: since there was no JavaScript, the DOM could not be updated during the website runtime.  That means that the initial HTML source code that the browser received while loading the website was also going to be the LAST version of it.  **No DOM modifications**.

### The Client-Server Architecture
***

[Remember how the internet works?](https://www.youtube.com/watch?v=UiBT3Kj8KBM)  Every domain points to a single IP address/server, and that server is ready to give back a **text answer** to any HTTP request that comes from any client.

**Think about the server like a "document generator."**  It can be an image, a video, a text document, JSON, HTML, CSS, etc.  The server’s responsibility is to respond with content each time a client requests it.

![backend developer](https://ucarecdn.com/2c0000ef-2907-43cb-80ed-2ba4f194b83e/)

Along with the generated document content, the server can also specify what type of content is responding, allowing the browser to read and interpret the response in an accurate way.  The response formats available can be hundreds, but this are the most common:

### Server Response Content-Types

|**Content-type**   |**Description**   |
|:------------------|:-----------------|
|text/plain          |This is the default value for text files.  Even if it really means an unknown text file, browsers assume they can display it     |
|text/css      |Any CSS files that have to be interpreted as such in a web page must be text/css files.  Often, servers do not recognize files with the .css suffix as CSS files and instead send them as text/plain.      |
|text/html        |All HTML content should be served with this type.     |
|image/gif<br>image/jpeg<br>image/png<br>image/svg+xml     |Only a handful of image types are widely recognized and are considered web safe (ready for use in a web page).    |
|audio/wav<br>audio/mpeg     |For audio files .wav .mp3    |
|multipart/form-data     |The multipart/form-data type can be used when sending the content of a completed HTML form from the browser to the server.    |
|application/json     |A JSON formatted response.     |

In addition to the document content and the content-type, the server also appends a response code to the header.  There are dozens of response codes, but these are the most popular ones:

#### Server Response Codes

|**Content-type**   |**Description**   |
|:------------------|:-----------------|
|2xx Success      |200 OK, 201 Created, 204 No Content, 203 Non-Authoritative Information    |
|3xx Redirection    |301 Moved Permanently, 307 Temporary Redirect, 304 Not Modified    |
|4xx Client Error    |404 Not Found, 400 Bad Request, 403 Forbidden, 401 Unauthorized    |
|5xx Server Error     |500 Internal Server Error, 503 Service Unavailable    |


[[info]]
|:link: Here you can find more detailed information about [server response codes.](https://www.restapitutorial.com/httpstatuscodes.html)

### The Role of the Back-End Language
***

The cool thing about a back-end language is that it runs on a real machine (not in a browser like the front-end language).  With a back-end language you can do things like:

+ Generate PDF’s, Word or Excel documents.
+ Connect to one or several databases at the same time and retrieve/process data.
+ Stream video and audio files.
+ Open/Create/Delete local files from the machine and update them with new content.
+ Compress images, videos or any kind of file.
+ Access any program installed in the local machine and use it for your website (e.g. you can open the zip program and extract a zip file).
+ You can interact with any hardware connected to the main server (like a vending machine, fingerprint reader, Virtual Reality googles, credit-card reader, etc.).
+ You can combine any of the operations already mentioned in your own back-end application flow.
  
###  So.. what does a Back-End Web Developer do?
***

As a back-end developer, you will need to write all the code to generate and/or to respond to those static and dynamic documents as clients request them.

The back-end web developer code needs to fulfill 4 main requirements:

+ **Receive and process client requests:**  Understand what the client is asking, validate the inputted data (parameters), reject potential security breaches.
+ **Work with the data:**  Get what you need from the database, update what you need from the database.
+ **Develop and execute the logic side of the business needs:**  Connect with 3rd party apps, external hardware, and any other business need(s).
+ **Respond to the client:**  Prepare the response in the proper format and send it back to the client.




