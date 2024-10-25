import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PresenceService {

  constructor(private http: HttpClient) {}
   All() {
    return this.http.get(`${environment.baseUrl}Poste/list`);
  }

  One(id: String) {
    return this.http.get(`${environment.baseUrl}Poste/listone/${id}`);
  }

  Delete(id: String) {
    return this.http.delete(`${environment.baseUrl}Poste/deleteone/${id}`);
  }

  Create(data: any) {
    return this.http.post(`${environment.baseUrl}Poste/Create`, data);
  }

  modify(id: String, data: any) {
    return this.http.put(`${environment.baseUrl}Poste/update/${id}`, data);
  }

  savewithd(id: String, data: any) {
    return this.http.post(`${environment.baseUrl}Poste/savePwithd/${id}`, data);
  }



  save(idstagiaire: String, data: any) {
    return this.http.post(`${environment.baseUrl}Presence/save/${idstagiaire}`, data);
  }

  stagiairepresents( date: any) {
    return this.http.get(`${environment.baseUrl}Presence/stagiairepresents?string=${date}`);
  }
}
