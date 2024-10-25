import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor(private http: HttpClient) { }
   All() {
    return this.http.get(`${environment.baseUrl}Cachechauffeur/list`);
  }

  One(id: String) {
    return this.http.get(`${environment.baseUrl}Cachechauffeur/listone/${id}`);
  }

  Delete(id: String) {
    return this.http.delete(`${environment.baseUrl}Cachechauffeur/deleteone/${id}`);
  }

  Create(data: any) {
    return this.http.post(`${environment.baseUrl}Cachechauffeur/Create`, data);
  }

  modify(id: String, data: any) {
    return this.http.put(`${environment.baseUrl}Cachechauffeur/update/${id}`, data);
  }
}
