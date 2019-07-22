# Bluenove Technical Test

## Introduction

If you are a front-end developer, please see the section Front-End, if you are a Back-End developer, please see the section Back-End and if you are a fullstack developer, start with the back-end test and then use it for your front-end test.

**This is deliberately written in English because it's important to have a fairly good level, however, if there is ANYTHING that you do not understand, do not hesitate to ask, we are not trying to catch you out. Finally, Good Luck!**

# Front-End

## Requirements

- ReactJS (any version you like above 16.3 and ideally the latest stable version)
- Redux (any version you like above 5 and ideally the latest stable version)

## Process

1. Create a branch for your work.
2. Make as many commits as you'd like during the process
3. Create a merge request once you have finished
4. Tell us when you've finished and what we need to do to run your code

### The problem

You'll need to access a RESTful API, which is hosted here (unless you've built the service as part of the back-end test)
```
https://jsonplaceholder.typicode.com/posts
```

- You should create a component / container which will display the title and the body of each message.
- The messages should be listed according to their id
- It should be possible to post a new message to add to this existing list
- Once a message is successfully or unsuccessfully posted, a message should be displayed informing the user
- Make it as pretty as you'd like!
- The list of messages should update with new posts

**Bonus points**

- Use of a React router
- Providing a back-end to serve the compiled javascript and act as a proxy to the API
- Application of global theme that can be changed
- Server side rendering
- Hooks
- Dockerize it

# Back-End

## Requirements

- NodeJS / Python 3
- Postgres / MongoDB

## Process

1. Create a branch for your work.
2. Make as many commits as you'd like during the process
3. Create a merge request once you have finished
4. Tell us when you've finished and what we need to do to run your code

### The problem

- You should create a micro-service using any web framework you want (we will ask you why you picked it ;-))
- It should expose a RESTful API
- It should provide the following routes:

GET	     /posts

GET	     /posts/:id

GET	     /posts?userId=:id

POST	   /posts

PUT	     /posts/1

DELETE	 /posts/1

- It should be backed with a database for persistence, Postgres or MongoDB
- The schema for a post is:

userId: number
id: number
title: string
body: string

**Bonus points**

- Dockerize it
- Deploy it to Kubesail or another Kubernetes platform
