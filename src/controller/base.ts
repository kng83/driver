/*Funkcje tutaj musza wystapic jak wlasciwosci poniewaz po utworzeniu egzemplarza klasy
* trafiaja do konstruktora. Dzieki temu przekazywanie funkcji jako referencji np someFunck(base.getAll) bedzie
* prawidlowo wiazalo this. Inaczej trzeba uzyc bind*/


export abstract class Base {
    abstract collection: any;

    getAll = (req: any, res: any) => {
        let ansArr: any = [];
        this.collection.find({}).forEach((docs: any) => {
            console.log(docs);
            ansArr.push(docs);
        }, () => res.send(ansArr));
    };

    insert(req: any, res: any) {
        this.collection.insertOne({'a': Math.random() * 100},
            (err: any, doc: any) => {
                res.send(doc);
            });
    };

    insertOne = (req: any, res: any) => {
        this.collection.insertOne(req.query, (err: any, doc: any) => {
            // doc.ops to  potwierdzenie z ID i wartoscia
            console.log(doc.ops);
            console.log(doc.ops[0]._id);
            res.send(doc);
        })
    };

    findOne = (req: any, res: any) => {
        this.collection.findOne({name: 'pawel'}, (err: any, doc: any) => {
            console.log(doc);
            res.send(doc._id);

        })
    };

    findMany = (req: any, res: any) => {
        let arr:any = [];
        this.collection.find({name: req.query.name}).forEach((doc: any) => {
            arr.push(doc);
        },()=>{
            res.send(arr);
        })

    };

    test = (req:any,res:any) =>{
        console.log(req.body);
        res.send(req.body);
    }
}
