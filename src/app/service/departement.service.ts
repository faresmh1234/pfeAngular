import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  constructor(private http:HttpClient) { }
   All()
  {return this.http.get(`${environment.baseUrl}Departement/list`)}

  One(id:String)
{ return this.http.get(`${environment.baseUrl}Departement/listone/${id}`) }




 Delete(id:String)
 { return this.http.delete(`${environment.baseUrl}Departement/deleteone/${id}`); }


Create(data:any)
{
  return this.http.post(`${environment.baseUrl}Departement/Create`,data); }

 modify(id:String,data:any)
 { return this.http.put(`${environment.baseUrl}Departement/update/${id}`,data); }
}
