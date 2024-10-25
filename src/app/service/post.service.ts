import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { tap, map } from 'rxjs/operators';

import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  // opts :any;
  // getData() {

  //       return this.opts.length ?

  //         of(this.opts) :

  //         this.http.get('https://jsonplaceholder.typicode.com/users').pipe(tap(data => this.opts = data))

  // }

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

  modifypwithd(idp: String,iddep: String, data: any) {
    return this.http.put(`${environment.baseUrl}Poste/updatewithdep/${idp}/${iddep}`, data);
  }

}
