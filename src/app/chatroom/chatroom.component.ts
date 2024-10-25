import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WebSocketServiceService } from '../service/web-socket-service.service';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {
list:any
  form:FormGroup
 isVisible: boolean = false;//valeur innitial non visible
user:String=""
message: string = '';
     messages: string[] = [];
  constructor(private formbuilder:FormBuilder,private websocketservice:WebSocketServiceService){}

  ngOnInit(): void {
    this.user=localStorage.getItem("usernameconnected")
    this.form=this.formbuilder.group(
     {
      content:['',Validators.required]
     }
    )

    this.websocketservice;
this.ListFunction()
      let msg="hello";
       this.messages.push(msg);

  }

   toggleVisibility() {
    this.isVisible = !this.isVisible; // Toggle the visibility state
  }

  send(){
    // let formdata=new FormData()

    // formdata.append("content",this.form.value.content)
    let data={"name":this.form.value.content}
    console.log("user",this.user);
   console.log("content",this.form.value.content);
 this.messages.push(this.form.value.content);
 console.log("before");

this.websocketservice.sendMessage2(data).subscribe(
      (res: any) => {



      },
      (error: any) => {
        console.log('error', error);
      }
    );
 console.log("after");


this.form.value.centent="";
  }

  remove(){
    this.messages.pop();
  }




ListFunction(){
   this.websocketservice.listmsg().subscribe(
     (res:any)=>{this.list=res;
      console.log("***CONVERSATION****",this.list);
      for(let i =0;i<this.list.length;i++){
        this.messages.push(this.list[i].content)
      }



    },
    (error:any)=>{console.log("error",error)}
   )
  }

}
