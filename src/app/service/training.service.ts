import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TrainingService {
  constructor(private http: HttpClient) {}
  AllCategories() {
    return this.http.get(`${environment.baseUrl}Formation/list`);
  }

  One(id: String) {
    return this.http.get(`${environment.baseUrl}Formation/listone/${id}`);
  }

  Delete(id: String) {
    return this.http.delete(`${environment.baseUrl}Formation/deleteone/${id}`);
  }

  Create(data: any) {
    return this.http.post(`${environment.baseUrl}Formation/Create`, data);
  }

  modify(id: String, data: any) {
    return this.http.put(`${environment.baseUrl}Formation/update/${id}`, data);
  }

  Createwhithcat(id: string, data: any) {
    console.log('id:', id);
    console.log('data:', data);

    return this.http.post(
      `${environment.baseUrl}Formation/savewithcat/${id}`,
      data
    );
  }

  updatewhithcat(id: string, idcat: string, data: any) {
    console.log('id:', id);
    console.log('data:', data);

    return this.http.put(
      `${environment.baseUrl}Formation/updatewithcat/${id}/${idcat}`,
      data
    );
  }

  selectFByDep(idd: string) {
    return this.http.get(
      `${environment.baseUrl}Formation/selectByDepartement/${idd}`
    );
  }


  nbrFByDepartement(idd: string) {
    return this.http.get(
      `${environment.baseUrl}Formation/nbrFByDepartement/${idd}`
    );
  }

  selectEsubinF(idf: string) {
    return this.http.get(
      `${environment.baseUrl}Formation/selectEsubinF/${idf}`
    );
  }


}
