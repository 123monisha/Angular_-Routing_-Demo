import { Department } from "./Department";
 export class Employee{
    id:number=0;
    name:string="";
    email:string="";
    mobile:number=0;
    skillSet:string="";
    departmentId:number=0;
    password:string="";
    department:Department=new Department();

   

}