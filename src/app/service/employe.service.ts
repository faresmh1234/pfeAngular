import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  constructor(private http:HttpClient) { }
  All()
  {return this.http.get(`${environment.baseUrl}Employe/list`)}

  Onecategory(id:String)
{ return this.http.get(`${environment.baseUrl}Employe/listone/${id}`) }




 Delete(id:String)
 { return this.http.delete(`${environment.baseUrl}Employe/deleteone/${id}`); }


Create(data:any)
{
  return this.http.post(`${environment.baseUrl}Employe/Create`,data); }

 modify(id:String,data:any)
 { return this.http.put(`${environment.baseUrl}Employe/update/${id}`,data); }

 Createwhithdep(id:string,data:any)
{
  console.log("id:",id);
    console.log("data:",data);

  return this.http.post(`${environment.baseUrl}Employe/createwithdepartment/${id}`,data); }


  updatewhithdands(id:string,idd:string,ids:string,data:any)
{
  console.log("id:",id);
    console.log("data:",data);

  return this.http.put(`${environment.baseUrl}Employe/updatewithdands/${id}/${idd}/${ids}`,data); }

signupemployer(idd:string,ids:string,data:any)
{

    console.log("data:",data);

  return this.http.post(`${environment.baseUrl}Employe/signup2/${idd}/${ids}`,data);
}


  departmentemployers(ide:string)
{

    console.log("ide=:",ide);

  return this.http.get(`${environment.baseUrl}Employe/departmentemployers/${ide}`);
}




}
