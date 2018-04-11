import * as express from 'express';
import {SCtrl} from "./app";

export default function setRoutes(app: any) {

    const router = express.Router();
    router.route('/getAll').get(SCtrl.getAll);
    router.route('/insert').get(SCtrl.insert.bind(SCtrl));
    router.route('/insertOne').get(SCtrl.insertOne);
    router.route('/findOne').get(SCtrl.findOne);
    router.route('/findMany').get(SCtrl.findMany);
    router.route('/test').post(SCtrl.test);
    router.route('/kot/:slow').get(function (req, res) {
        console.log(req.params.slow); //1 ,2 ,3
        res.send('ok');
    });
    router.route('/pies').get(function (req, res) {
        res.send('kkk');
    });

    // Apply the routes to our application with the prefix /api
    app.use('/api', router);
}