 -src/
    -index.js //main server file
    -modals/
    -controllers/
    -middlewares/
    -services/
    -utils/
    -config/            mostly database configurations
    -repository/
 -tests/  [will be added later]

 It is role/task based folder pattern not feautre based.



1) sabse pehle npm init, express, nodemon, body-parser ye teen basic depencdencies
2) express mein server start hum function mein karenge 
3) humne dotenv use karna seekha hai  
4) git mein push kar dena ek baar pehle hi
5) setting basic body parser 
6) Now we are setting sequelize(ORM), sequelize-CLI(It will do some cofig by itself), mysql2 to connect sequelize with mysql database
7) npm i sequelize sequelize-cli mysql2
8) npx sequelize init . It will give us extra files like config models seeders migrations.
9) write your own password in config.json for mysql
10) npx sequelize db:create = this will create database (you can found in npm sequelize-cli). write this under src becoz config is in src
11) 