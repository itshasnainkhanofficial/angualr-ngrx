import { Action  } from "@ngrx/store";


// we are extending ngrx Action because ngrx only give type with its default action
// as we can we here
// export interface Action {
//     type: string;
// }
// and we write ? because it is optional

export interface MyAction extends Action {

    payload? : any;
}