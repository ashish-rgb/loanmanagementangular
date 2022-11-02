import { Role } from "./role";

export class User {
    userId : number=0;
    userName: string ='';
    password:string='';
    fullName:string='';
    roleId:number=0;
    role:Role;
    active:boolean=false;
    mob:string='';
    email:string='';
    amount:number=0;
    period:number=0;
    address:string='';
    dob:Date;
    gender:string='';
    status:string='';
}
