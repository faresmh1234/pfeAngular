import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VisiteMedicalService {

  constructor(private http: HttpClient) { }
  AllCategories() {
    return this.http.get(`${environment.baseUrl}VisiteMedical/list`);
  }

  One(id: String) {
    return this.http.get(`${environment.baseUrl}VisiteMedical/listone/${id}`);
  }

  Delete(id: String) {
    return this.http.delete(`${environment.baseUrl}VisiteMedical/deleteone/${id}`);
  }

  Create(data: any) {
    return this.http.post(`${environment.baseUrl}VisiteMedical/Create`, data);
  }

  modify(id: String, data: any) {
    return this.http.put(`${environment.baseUrl}VisiteMedical/update/${id}`, data);
  }
}
