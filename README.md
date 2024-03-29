# Valoriza API

[![linkedin-badge][linkedin-shield]][link-linkedin] ![GitHub top language](https://img.shields.io/github/languages/top/luyzfern4ndo/nlw6-valoriza)
![GitHub repo size](https://img.shields.io/github/repo-size/luyzfern4ndo/nlw6-valoriza) ![GitHub last commit](https://img.shields.io/github/last-commit/luyzfern4ndo/nlw6-valoriza) ![License MIT](https://img.shields.io/badge/license-MIT-green)

[linkedin-shield]: https://img.shields.io/badge/-Luiz%20Fernando%20Tavares-8257E5?logo=linkedin
[link-linkedin]: https://www.linkedin.com/in/luiz-fernando-tavares-141311187/

## :pushpin: Table of Contents

- [Introduction](#book-introduction)
- [Technologies](#rocket-technologies)
- [Requirements](#clipboard-requirements)
- [How to install](#fire-how-to-install)
- [Future Improvements](#man_astronaut-future-improvements)
- [License](#closed_book-license)

## :book: Introduction

A project developed based on Typescript. This Nodejs API was built to register users that can makes praise to others through tags and comments.
Please note that this project was built on the NLW 6th edition educational initiative promoted by Rocketseat and led by Educator [Daniele Leão](https://github.com/danileao).

In this project, I used the concept of creating **class entities** to represent _database tables_, **class repositories** to handle essential manipulation methods like _create, find, change and delete_. In addition we also have **service classes** to access the repositories' methods, perform error return validations and complete the purpose of the called method. **Class controllers** are used to be responsible for requests and responses, trigger the service class and return the response.

About security, i used **bcrypt** to make a password hash when a user is registered.

I also used middlewares to intercept the routes! **ensureAuthenticated**: it checks if the user is authenticated and passes user data to the request. **ensureAdmin**: it checks if the authenticated user is an admin to be able to perform some registrations. 
## :rocket: Technologies

This project was made using the following technologies:

- [NodeJS](https://nodejs.org/en/)
- [Typescript](https://github.com/microsoft/TypeScript)
- [Express](https://expressjs.com/)
- [JsonWebToken](https://jwt.io/)
- [TypeORM](https://typeorm.io/#/)

## :clipboard: Requirements

You will need [Git](https://git-scm.com/), [NodeJS](https://nodejs.org/) and [Yarn](https://yarnpkg.com/) (optional) installed. You will need programs like [Postman](https://www.postman.com/), [Insomnia](https://insomnia.rest/download) (or anything like that) to get access to the application's routes. It is interesting to use a program like [Beekeeper](https://www.beekeeperstudio.io/) to access the Database interface.

## :fire: How to install

You must clone this repository and through terminal type the following commands:

```bash
# Clone the repository
$ git clone https://github.com/luyzfern4ndo/nlw6-valoriza.git

# Go into the repository
$ cd nlw6-valoriza-nodejs

# Install dependencies
$ yarn install # if you use yarn
$ npm install # if you use npm

# Starting the express server on port 3000
$ yarn dev # if you use yarn
$ npm run dev # if you use npm

# To create the tables on Database
$ yarn typeorm migration:run # if you use yarn
$ npm run typeorm migration:run #if you use npm
```

---

## :man_astronaut: Future Improvements

- [x] Isolate responsibility using useCases and creating methods within repositories.

- [ ] Use an email sending service to alert who will receive a compliment

- [ ] Make a Frontend to connect whith this API


## :closed_book: License

This project is under the [MIT](https://github.com/luyzfern4ndo/nlw6-valoriza/blob/master/LICENSE) license.

---

Made with :purple_heart: by Luiz Fernando Tavares.

:wave: [Get in touch!](https://www.linkedin.com/in/luiz-fernando-tavares-141311187/)

I hope this project has helped you!
