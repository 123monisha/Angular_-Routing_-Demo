import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 //v dv:string="solid 1pt blue";
  title = 'FirstApp';
/*  name:string="Technovice solutions";
  passMarks:number=40;
  maxarks:number=0;
  hasPassed:boolean=false;
  constructor()
  {
    this.maxarks=100;
  }

  getResult(score:number):boolean
  {
    if(score>=this.passMarks)
       this.hasPassed=true;
      return this.hasPassed;
  }
  dispResult():string
  {
    if(this.getResult(50))
      return "Passed";
    else
      return "Failed";
  }*/
 org:string="Tech novice solutions";
 filpath="./assets/img.jpeg";
 sp:number=1;
 subjects:string[]=["Angular","java"];
 clr:string="green";
 name:string="Monisha Ishwar"

 isvalid():boolean
 {
  return true;
 }
validate()
{
  console.log("form validations");
}
printName(data:string)
{
  this.name=data;
  console.log(this.name);
}



}