import * as express from 'express'
import *as bodyParser from 'body-parser';
import {MongoClient} from "mongodb";
import {SiemensCtrl} from "./controller/siemensCtrl";
import setRoutes from "./routes";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const url = 'mongodb://localhost:27017';
const dbName = 'native_db';

let db: any;
let SCtrl: any;
let connectionFinished: Promise<any> = new Promise((resolve) => {
    MongoClient.connect(url, function (err: any, client: any) {
        if (err) throw err;
        db = client.db(dbName);

        // Start the application after the database connection is ready
        console.log("Listening on port 3000");
        resolve();
    });
});

connectionFinished.then(() => {
    SCtrl = new SiemensCtrl();
    setRoutes(app);
});


app.listen(3000);

export {db, app, SCtrl};

