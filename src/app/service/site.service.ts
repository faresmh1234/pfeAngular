import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  constructor(private http:HttpClient) { }
  All()
  {return this.http.get(`${environment.baseUrl}Site/list`)}

One(id:String)
{ return this.http.get(`${environment.baseUrl}Site/listone/${id}`) }




 Delete(id:String)
 { return this.http.delete(`${environment.baseUrl}Site/deleteone/${id}`); }


Create(data:any)
{
  return this.http.post(`${environment.baseUrl}Site/Create`,data); }

 modify(id:String,data:any)
 { return this.http.put(`${environment.baseUrl}Site/update/${id}`,data); }


}
