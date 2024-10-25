import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class EvaluationService {
  constructor(private http: HttpClient) {}

  All() {
    return this.http.get(`${environment.baseUrl}Evaluation/list`);
  }

  One(id: String) {
    return this.http.get(`${environment.baseUrl}Evaluation/listone/${id}`);
  }

  Delete(id: String) {
    return this.http.delete(`${environment.baseUrl}Evaluation/deleteone/${id}`);
  }

  Create(data: any) {
    return this.http.post(`${environment.baseUrl}Evaluation/Create`, data);
  }

  modify(id: String, data: any) {
    return this.http.put(`${environment.baseUrl}Evaluation/update/${id}`, data);
  }

  nbrutile(id: String) {
    return this.http.get(`${environment.baseUrl}Evaluation/nbrutile/${id}`);
  }

  nbrnonutile(id: String) {
    return this.http.get(`${environment.baseUrl}Evaluation/nbrnonutile/${id}`);
  }

  nbrpeututile(id: String) {
    return this.http.get(`${environment.baseUrl}Evaluation/nbrpeututile/${id}`);
  }

  nbrtresutile(id: String) {
    return this.http.get(`${environment.baseUrl}Evaluation/nbrtresutile/${id}`);
  }


    evaluate(ide: String,idf: String, data: any) {
    return this.http.post(`${environment.baseUrl}Evaluation/evaluate/${ide}/${idf}`, data);
  }
  mofifierevaluation(id:String,idf: String,ide: String, data: any) {
    return this.http.post(`${environment.baseUrl}Evaluation/evaluate/${idf}/${ide}`, data);
  }

}
