let express = require('express');
let mongodb = require('mongodb');
let app = express();

let MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName= 'native_db';
let db;

// Initialize connection once
MongoClient.connect(url, function (err, client) {
    if (err) throw err;
    db = client.db(dbName);
    // Start the application after the database connection is ready
    app.listen(3000);
    console.log("Listening on port 3000");
});

app.get("/some", function (req, res) {

    db.collection("nat_driver").insertOne({'a':'some tekst'}, function (err, docs) {
            res.send(docs);
        });
    });
// Reuse database object in request handlers
app.get("/", function (req, res) {
    let ansArr=[]
    db.collection('nat_driver').find({}).forEach((docs)=>{
        console.log(docs);
        ansArr.push(docs);
    },()=>{
        res.send(ansArr);
    })

});