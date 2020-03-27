
## :rocket: Built with

This project was developed with the following technologies:

-  [Node.js](https://nodejs.org/)
-  [Express](https://expressjs.com/)
-  [sequelize](https://sequelize.org/)
-  [postgres](https://www.postgresql.org/)
-  [JSON web token](https://github.com/auth0/node-jsonwebtoken)
-  [yup](https://github.com/jquense/yup)
-  [bcrypt](https://github.com/kelektiv/node.bcrypt.js/)
-  [docker](https://www.docker.com/)
-  [VS Code](https://code.visualstudio.com/)

## :information_source: How to run
### Requirements
To run the app, you will need [Git](https://git-scm.com), [Node.js](https://nodejs.org/) v13.1.0 or higher, [Yarn](https://yarnpkg.com/), [docker](https://www.docker.com/), [postgres](https://www.postgresql.org/) v11.
<br>

### Backend
Now clone the repository and install the dependencies.
```bash
# to clone the repository
git clone https://github.com/Rob30Garcia/vuttr.git

# go into the backend folder
cd vuttr

#install the backend dependencies
yarn or npm install

```
In order to connect to the database
```bash
# run docker
docker start database

# run migrations
yarn sequelize migrate:latest
  &
npm sequelize migrate:latest


# run api
yarn dev & npm run dev
```

## :mailbox_with_mail: Get in touch!

[LinkedIn](linkedin.com/in/robert-garcia-37a346199)

---

Made by Robert Garcia.
