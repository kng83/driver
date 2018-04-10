import * as express from 'express';
import {SCtrl} from "./app";

export default function setRoutes(app:any) {

    const router = express.Router();
    router.route('/some').get(SCtrl.getAll);

    // Apply the routes to our application with the prefix /api
    app.use('/api', router);
}