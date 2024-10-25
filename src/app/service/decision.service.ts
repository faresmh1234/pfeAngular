import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DecisionService {

  constructor(private http: HttpClient) { }
  affichetous() {
    console.log('cat service');
    //ici code de sauvegarde
    return this.http.get(`${environment.baseUrl}Decision/list`);
  }

  affiche(id: String) {
    console.log('id on service categorie', id);
    return this.http.get(
      `${environment.baseUrl}Decision/listone/${id}`
    );
  }

  supprimer(id: String) {
    return this.http.delete(
      `${environment.baseUrl}Decision/deleteone/${id}`
    );
  }

  creer(data: any) {
    return this.http.post(
      `${environment.baseUrl}Decision/Create`,
      data
    );
  }

  modifier(id: String, data: any) {
    return this.http.put(
      `${environment.baseUrl}Decision/update/${id}`,
      data
    );
  }

  savewithde(id: String, data: any) {
    return this.http.post(
      `${environment.baseUrl}Decision/saveDwithde/${id}`,
      data
    );
  }

  updatewithde(id: String,idde:String,data: any) {
    return this.http.put(
      `${environment.baseUrl}Decision/updatewithde/${id}/${idde}`,
      data
    );
  }
}
