import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

 constructor(private http:HttpClient) { }


  AllCategories()
  {return this.http.get(`${environment.baseUrl}CategorieFormation/list`)}

Onecategory(id:String)
{ return this.http.get(`${environment.baseUrl}CategorieFormation/listone/${id}`) }




 DeleteCategory(id:String)
 { return this.http.delete(`${environment.baseUrl}CategorieFormation/deleteone/${id}`); }


CreateCategory(data:any)
{
  return this.http.post(`${environment.baseUrl}CategorieFormation/Create`,data); }

 modifyCategory(id:String,data:any)
 { return this.http.put(`${environment.baseUrl}CategorieFormation/update/${id}`,data); }


}
