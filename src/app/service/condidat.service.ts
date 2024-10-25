import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CondidatService {
  constructor(private http: HttpClient) {}
  All() {
    return this.http.get(`${environment.baseUrl}Condidat/list`);
  }

  One(id: String) {
    return this.http.get(`${environment.baseUrl}Condidat/listone/${id}`);
  }

  Delete(id: String) {
    return this.http.delete(`${environment.baseUrl}Condidat/deleteone/${id}`);
  }

  Create(data: any) {
    return this.http.post(`${environment.baseUrl}Condidat/Create`, data);
  }

  modify(id: String, data: any) {
    return this.http.put(`${environment.baseUrl}Condidat/update/${id}`, data);
  }
}
