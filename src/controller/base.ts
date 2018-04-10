import {db} from "../app";

export abstract class Base {
    abstract collection: any;

    getAll = (req: any, res: any) => {
        let ansArr: any = [];
        this.collection.find({}).forEach((docs: any) => {
                console.log(docs);
                ansArr.push(docs);
            }, () => res.send(ansArr));
    };

    insert = (req: any, res: any) => {
        this.collection
            .insertOne({'a': Math.random() * 100},
                (err: any, doc: any) => {
                    console.log('here', err, doc)
                    res.send(doc);
                });
    }
}