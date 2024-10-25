import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StageService {
  constructor(private http: HttpClient) {}
  All() {
    return this.http.get(`${environment.baseUrl}Stage/list`);
  }

  One(id: String) {
    return this.http.get(`${environment.baseUrl}Stage/listone/${id}`);
  }

  Delete(id: String) {
    return this.http.delete(`${environment.baseUrl}Stage/deleteone/${id}`);
  }

  Create(data: any) {
    return this.http.post(`${environment.baseUrl}Stage/Create`, data);
  }

  modify(id: String,sid:String,eid:String,iid:String, data: any) {
    return this.http.put(`${environment.baseUrl}Stage/edit/${id}/${sid}/${eid}/${iid}`, data);
  }

  save(sid:String,eid:String,iid:String,data: any) {
    return this.http.post(`${environment.baseUrl}Stage/save/${sid}/${eid}/${iid}`, data);
  }

  getcurrentstagiaire() {
    return this.http.get(`${environment.baseUrl}Stage/getcurrentstagiaire`);
  }
}
