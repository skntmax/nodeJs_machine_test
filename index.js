const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql');
const fs = require('fs');
// ************  DATABSE CONNECTION ************

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
});

con.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("connection stablished ");

    let candidate = `create table  candidate(
        id int primary key auto_increment,
        email varchar(255)not null) ; `

    let test_score = `create table  test_score(
            id int primary key auto_increment,
            first_round varchar(255),
            second_round varchar(255),
            third_round varchar(255))`;

    con.query(candidate, function(err, results) {
        if (err)
            console.log(err.message);
        console.log(results);

    });

    con.query(test_score, function(err, results) {
        if (err)
            console.log(err.message);
        console.log(results);

    });



});


// ************  DATABSE CONNECTION ************



app.use(express.static(__dirname + "public"));


// ************ Routing ************ 
var user_data;
app.get('/', (req, res) => {

    console.log('database Connected!');

    user_data = fs.readFile(__dirname + '/score.json', 'utf-8', (err, data) => {
        // console.log(data);
        // res.send(data + "<br>");
        user_data = JSON.parse(data);
        res.send(user_data);
        // res.writeHead(200, { 'Content-type': 'application/json' });

    });

});

app.get('/insert', (req, res) => {

    user_data.map((currele) => {

        var candidate = `INSERT INTO candidate(id,email) VALUES ( '${currele.id}', '${currele.candidate_email}' )`;
        var candidate_score = `INSERT INTO test_score(id,first_round,second_round, third_round) VALUES ( '${currele.id}', '${currele.first_round}',
        '${currele.second_round}',  '${currele.third_round}'   )`;

        con.query(candidate, function(err, result) {
            if (err) throw err;
        });

        con.query(candidate_score, function(err, result) {
            if (err) throw err;
            console.log(`${currele.id}row record inserted`);
        });

    });

    res.send('data inserted ');

});

// ************ Routing ************ 


app.listen(3000, (err) => {
    if (err)
        console.log('error during connection ');

    console.log('service started at 3000 port ');
});