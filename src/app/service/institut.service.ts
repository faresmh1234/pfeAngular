import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InstitutService {

  constructor(private http:HttpClient) { }

  All()
  {return this.http.get(`${environment.baseUrl}Institut/list`)}

One(id:String)
{ return this.http.get(`${environment.baseUrl}Institut/listone/${id}`) }




 Delete(id:String)
 { return this.http.delete(`${environment.baseUrl}Institut/deleteone/${id}`); }


Create(data:any)
{
  return this.http.post(`${environment.baseUrl}Institut/Create`,data); }

 modify(id:String,data:any)
 { return this.http.put(`${environment.baseUrl}Institut/update/${id}`,data); }


}
