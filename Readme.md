# Welcome to flight services

## Project setup

-clone the project on your local
-Execute `npm install` on the same path as of your root directory of the downloaded project
-Create a `.env file` in the root directory and add the following environment variable - `PORT =3000`
-Inside the src/config/ folder create a new file config.json and then add the following piece of json

```
{
  "development": {
    "username": <Your DB LOGIN NAME>,
    "password": <YOUR DB PASSWORD>,
    "database": "Flights_And_Search_DB_dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
}


```

- Once you have added your db config , go to the src folder from your terminal and execute `npx sequelize db:create`

```

