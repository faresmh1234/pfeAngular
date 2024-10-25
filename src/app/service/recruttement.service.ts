import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecruttementService {

  constructor(private http: HttpClient) { }
  All() {
    return this.http.get(`${environment.baseUrl}Recruttement/list`);
  }

  One(id: String) {
    return this.http.get(`${environment.baseUrl}Recruttement/listone/${id}`);
  }

  Delete(id: String) {
    return this.http.delete(`${environment.baseUrl}Recruttement/deleteone/${id}`);
  }

  Create(data: any) {
    return this.http.post(`${environment.baseUrl}Recruttement/Create`, data);
  }

  modify(id: String, data: any) {
    return this.http.put(`${environment.baseUrl}Recruttement/update/${id}`, data);
  }

  recrute(idc: String,ids:String, data: any) {
    return this.http.post(`${environment.baseUrl}Recruttement/recrute/${idc}/${ids}`, data);
  }

updateRecruttement(id:String,idc: String,ids:String, data: any) {
    return this.http.put(`${environment.baseUrl}Recruttement/updateRecruttement/${id}/${idc}/${ids}`, data);
  }

}
