---
title: "Building RESTful API's using Flask"
subtitle: "Flask is becoming the most popular Python framework (if its not already), learn how to build RESTful API's the REST way"
cover: "https://ucarecdn.com/91bcc549-6758-49c3-a790-4245afbd8ece/"
textColor: "black"
date: "2019-05-02"
status: "draft"
tags: ["Flask","python","REST","API"]
---

By now you should know already what a REST api is, if you don't I recomend you [read about it here](http://content.breatheco.de/lesson/understanding-rest-apis).

But, just as a very brief summary, when you are building an API in a RESTful way you have to build your URL's endpoints separaret by `resources`, a resource is something you want to manage, e.g: Student, User, Car, etc. A resource is somehing similar to a database table but we call them "resources" because of a few exceptions.

Here is an example of RESTful API endpoints:

| Method | URL | Description |
| ------ | --- | ----------- |
| GET    | /student | Should return all the students |
| GET    | /student/1 | Should return a single student with the id=1 |
| GET    | /cohort/1/students | Should return all the students form the cohort wih id=1 |
| POST   | /student | Should create a new student |
| PUT    | /student/1 | Should update the information of the student with the id=1 |
| DELETE | /student/1 | Should delete the studentt with id=1 |
```
After a while the endpoints will speak for themselves, it will make sense and you will be able to guest what the do or even guess some endpints. That is the whole idea.

[[info]]
| :point_up: You can read more about REST APIs on this BreatheCode Lesson.<br> <br>Here is a cool 8 min video explaining REST: https://www.youtube.com/watch?v=7YcW25PHnAA
