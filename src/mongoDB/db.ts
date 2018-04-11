// import {db, app} from '../app';
//
// export function routeHandler() {
//     app.get("/insert", function (req, res) {
//         db.collection("nat_driver")
//             .insertOne({'a': Math.random() * 100},
//                 (err: any, doc: any) => {
//                     console.log('here',err,doc)
//                     res.send(doc);
//                 });
//     });
// // Reuse database object in request handlers
//     app.get("/takeAll", function (req, res) {
//         let ansArr: any = [];
//         db.collection('nat_driver').find({})
//             .forEach((docs: any) => {
//                 console.log(docs);
//                 ansArr.push(docs);
//             }, () => {
//                 res.send(ansArr);
//             })
//     });
// }

