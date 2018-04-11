import {Base} from "./base";
import {db} from '../app'


export class SiemensCtrl extends Base{
   collection = db.collection('nat_driver');
}