# Valoriza API

[![linkedin-badge][linkedin-shield]][link-linkedin] ![GitHub top language](https://img.shields.io/github/languages/top/luyzfern4ndo/nlw6-valoriza)
![GitHub repo size](https://img.shields.io/github/repo-size/luyzfern4ndo/nlw6-valoriza) ![GitHub last commit](https://img.shields.io/github/last-commit/luyzfern4ndo/nlw6-valoriza) ![License MIT](https://img.shields.io/badge/license-MIT-green)

[linkedin-shield]: https://img.shields.io/badge/-Luiz%20Fernando%20Tavares-blueviolet?logo=linkedin
[link-linkedin]: https://www.linkedin.com/in/luiz-fernando-tavares-141311187/

## :pushpin: Table of Contents

- [Introduction](#-introduction)
- [Technologies](#-technologies)
- [How to install](#-how-to-install)
- [Features](#-features)
- [How to use](#-how-to-use)
- [Routes](#-routes)

## :book: Introduction

This is an Nodejs API built to register users that can makes praise to others through tags and comments.
Please note that this project was built on the NLW 6th edition educational initiative promoted by Rocketseat and led by Educator Daniele Leão.

## :rocket: Technologies

This project was made using the following technologies:

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Typescript](https://github.com/microsoft/TypeScript)
- [JsonWebToken](https://jwt.io/)
- [TypeORM](https://typeorm.io/#/)

## :clipboard: Requirements

You will need [Git](https://git-scm.com/), [NodeJS](https://nodejs.org/) and [Yarn](https://yarnpkg.com/) (optional) installed. You will need programs like [Postman](https://www.postman.com/), [Insomnia](https://insomnia.rest/download) (or anything like that) to get access to the application's routes. It is interesting to use a program like [Beekeeper](https://www.beekeeperstudio.io/) to access the Database interface.

## :fire: How to install

You must clone this repository and through terminal type the following:

```bash
# Clone the repository
$ git clone https://github.com/luyzfern4ndo/nlw6-valoriza-nodejs.git

# Go into the repository
$ cd nlw6-valoriza-nodejs

# Install dependencies
$ yarn install # if you use yarn
$ npm install # if you use npm

# Starting the express server
$ yarn dev # if you use yarn
$ npm run dev # if you use npm
```

---

## :man_astronaut: Future Improvements

- [ ] Isolate responsibility using useCases and creating methods within repositories.

- [ ] Use an email sending service to alert who will receive a compliment

- [ ] Make a Frontend to connect whith this API

## Features

- Users register

  - [x] It is not allowed to register more than one user with the same email
  - [x] It is not allowed to register user without e-mail

- Tags register
  - [x] It is not allowed to register more than one tag with the same name
  - [x] It is not allowed to register tag without a name
  - [x] Registration by users who are not administrators is not allowed and not logged

---

## How to use

Now you'll have the Express Server listening the port 3000 and you will be able to use the application routes.

At first you'll need some program like **Insomnia**, **Postman** or anything like that.

## Routes

Methods and expected parameters if any

- ### Users

```bash
# Create a user
POST: http://localhost:3000/users
# name: string, email: string, password: string, admin: boolean

# List all users
GET: http:localhost:3000/users
```

- ### Sessions
  Log into the application

```bash

POST: http://localhost:3000/users
# email: string, password: string
```

---

## :bug: Issues

Feel free to file a new issue with a respective title and description on the the nlw-valoriza repository. If you already found a solution to your problem, i would love to review your pull request!

## :closed_book: Liscence

This project is under the [MIT](https://github.com/luyzfern4ndo/nlw6-valoriza/blob/master/LICENSE) license.

---

Made with :purple_heart: by Luiz Fernando Tavares.

:wave: [Get in touch!](https://www.linkedin.com/in/luiz-fernando-tavares-141311187/)

I hope this project has helped you!
