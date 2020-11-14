import { Data } from '@angular/router';
import { User } from '../models/user';

export const USERLISTREQUEST = "user list request";
export const USERLISTSUCCESS = "user list success";
// export const USERLISTFAILED = "user list failed";


export class USERLISTREQUESTAction {
    readonly type = USERLISTREQUEST;


    // ager ham is perticular action p koi value pass krna chahty hen to payload
    // use krty hen but yahan hamen koi value pass ni krni to hamen iski zaroorat ni

    // constructor(payload ? : any){
    // }
}


export class USERLISTSUCCESSAction {
    readonly type = USERLISTSUCCESS;

    // yahan payload ki zaroorat parygi q k jab wo list aaygi
    // to wo list hamen milni bhi chahia

    constructor(payload ? : {data : User[]}){
    }
}