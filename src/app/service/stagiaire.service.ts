import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StagiaireService {

  constructor(private http: HttpClient) { }

  All() {
    return this.http.get(`${environment.baseUrl}Stagiaire/list`);
  }

  One(id: String) {
    return this.http.get(`${environment.baseUrl}Stagiaire/listone/${id}`);
  }

  Delete(id: String) {
    return this.http.delete(`${environment.baseUrl}Stagiaire/deleteone/${id}`);
  }

  Create(data: any) {
    return this.http.post(`${environment.baseUrl}Stagiaire/Create`, data);
  }

  modify(id: String,iddepartement:String,idsite:String, data: any) {
    return this.http.put(`${environment.baseUrl}Stagiaire/modify/${id}/${iddepartement}/${idsite}`, data);
  }

  save(siteid: String,departementid: String, data: any) {
    return this.http.post(`${environment.baseUrl}Stagiaire/save/${siteid}/${departementid}`, data);
  }
}
