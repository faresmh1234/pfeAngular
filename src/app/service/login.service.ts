import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

 constructor(private http:HttpClient) { }
httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
     'Authorization':`Bearer` +` `+ `${localStorage.getItem("token")}`
    })
  }

  login(data:any)
  {console.log("cat service")
  //ici code de sauvegarde
    return this.http.post(`${environment.baseUrl}api/auth/signin`,data)}


     logout()
  {console.log("options*****",this.httpOptions);
  //ici code de sauvegarde
    return this.http.get(`${environment.baseUrl}api/auth/signout`,this.httpOptions);}

     resetpassword(data:any)
  {console.log("cat service")
  //ici code de sauvegarde
    return this.http.get(`${environment.baseUrl}auth/api/resetpwd`,data)}
}
