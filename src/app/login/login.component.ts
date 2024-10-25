import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

   form:FormGroup
   resultalogin:any
constructor(
  private servicelogin:LoginService,
  private formbuilder:FormBuilder,
    private  router: Router
){}

  ngOnInit(): void {
     this.form=this.formbuilder.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })

  }



  signin(){
    console.log("access to login")
    this.servicelogin.login(this.form.value).subscribe(
    (res:any)=>{console.log("res",res);
      this.resultalogin=res;
//if
      localStorage.setItem("token",res.accessToken);
       localStorage.setItem("usernameconnected",res.username);
       localStorage.setItem("localid",res.id);
      localStorage.setItem("roles",res.roles)
      console.log("**roles**",localStorage.getItem("roles"))

      console.log(localStorage.getItem("token"));
      localStorage.setItem("state","0")
   this.router.navigateByUrl("/home")
  },
  (error:any)=>{

    console.log("*****rrooorrr******",error)})
    const messageDiv = document.getElementById('erreur');
    messageDiv.textContent = "mot de passe ou login incorrect";
 }


  hasRole(role: string): boolean {
    return this.resultalogin.roles.includes(role); // Check if user has the required role
  }
}
