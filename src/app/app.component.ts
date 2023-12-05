import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Basic World';
  date = Date()
  // name:string ="yash"
  // displayval!:string
  // disable = true
  // show!:boolean
  // color="red"
  // users = ["anu","yash","appa","shankar","sakshi"]
  // userdetails = [{name:"yash",email:"juhyvb@gmail.com",pno:36746374},
  // {name:"yash",email:"juhyvb@gmail.com",pno:36746374},
  // {name:"yash",email:"juhyvb@gmail.com",pno:36746374},
  // {name:"yash",email:"juhyvb@gmail.com",pno:36746374}]

  // arr = [
  //   {name:"yash",pno:687,socialacc:["insta","facebook","whatsapp"]},
  //   {name:"anu",pno:541,socialacc:["insta","facebook","whatsapp"]},
  //   {name:"sakshi",pno:683517,socialacc:["insta","facebook","whatsapp"]},
  //   {name:"appa",pno:68715,socialacc:["insta","facebook","whatsapp"]}
  // ]

  //pass data from parent to child component
  // dataa!:any
  // display:boolean=false
  // Toggle(){
  //   this.display = !this.display
  // }
  // childdata= 10;
  // updateChild(){
  //   this.childdata = Math.random()
  // }

  //reusable component
  // userDetails = [
  //   {name:"yash bhosale",email:"byash5604@gmail.com"},
  //   {name:"anwesha choudhury",email:"byash5604@gmail.com"},
  //   {name:"sakshi bvhosale",email:"byash5604@gmail.com"},
  //   {name:"rajshree bvhosale",email:"byash5604@gmail.com"},
  //   {name:"shridhar bvhosale",email:"byash5604@gmail.com"},
  // ]

  //send data from child to parent component
  // childdata!:string;
  // updateChild(data:string){
  //   console.log(data)
  //   this.childdata=data
  // }

  //two way binding
  name!:string

  //pipes
  // user = {
  //   name:"yash0",
  //   email:"byash504@gmailc.om"
  // }

  //template driven form
  // loginform!:FormsModule;
  // formdata(val:string)
  // {
  //   console.log(val)
  // }

  //reactive form in module
  // loginform = new FormGroup({
  //   userid: new FormControl("",[Validators.required,Validators.email]),
  //   password: new FormControl("",[Validators.required,Validators.minLength(5),Validators.pattern("[a-zA-Z]+$")])
  // })
  // loginuser(){
  //   console.log(this.loginform.value)
  // }
  // get userid(){
  //   return this.loginform.get("userid")
  // }
  // get password(){
  //   return this.loginform.get("password")
  // }

  // getfData(data:NgForm){
  //   console.log(data)
  //   this.dataa = data
  // }

  // showcondition(){
  //   this.show = !this.show
  // }



  // getName(name:string){
  //   alert("Hello " + name);
  //   this.displayval = name
    
  // }
  // getData(str:string){
  //   console.warn(str)
  // }

  // getNameD(val:string){
  //   this.displayval = val
  // }
  // count:number=0;
  // counter(type:string){
  //   type==='add'? this.count++ : this.count--;
  // }


}
