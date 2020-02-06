This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Posts Front-end Task

The goal of this task was to demonstrate the ability of fetching data using `GET` method and using `axios`.

### Overview

When you load the web-page for the first time, it will fetch `posts` from the endpoint using `axios.get()` method and construct it a simple table using the fetched data.

All the `userIds` and `postsIds` are anchor html tags, so when you click any of them a new table will be generated without refreshing the page.

When `userId` is clicked a new table will be created and shows all posts/ selected user.

When `postId` is clicked a new table will be created and shows all commentss/ selected post.

#### Steps

- Load the page using `npm start` in the cmd in the location of the project (you can do that from the search bar OR from directory navigation bar)
- when the page load, you will see a `Posts` table with `Userid` and `Postid` being anchor taged.
- when `userid` is clicked, a new table will show up presenting all posts saved for this user in the database.
- when `postid` is clicked, a new table will show up presenting all comments saved for this post in the database.

#### Frame Works/ libraries/ tools

- ReactJs
- axios
- Bootstrap 4
- Git
- Postman

---

### Introduction

#### Entities

##### Posts Table

the table show all the data fetched when the webpage is loaded at the beiginning

##### Posts/User Table

shows all posts/ selected user.

##### Comments/Post Table

shows all comments/ selected post.

---

#### Clash API

- Base url `https://jsonplaceholder.typicode.com`
- Posts endpoint `/posts`
- Specific user posts `/posts?userId=${userId}`
- Specific post comments `/comments?postId=${postId}`

---
