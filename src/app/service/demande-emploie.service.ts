import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DemandeEmploieService {

  constructor(private http: HttpClient) { }
  affichetous() {
    console.log('cat service');
    //ici code de sauvegarde
    return this.http.get(`${environment.baseUrl}DemandeEmploie/list`);
  }

  affiche(id: String) {
    console.log('id on service categorie', id);
    return this.http.get(
      `${environment.baseUrl}DemandeEmploie/listone/${id}`
    );
  }

  supprimer(id: String) {
    return this.http.delete(
      `${environment.baseUrl}DemandeEmploie/deleteone/${id}`
    );
  }

  creer(data: any) {
    return this.http.post(
      `${environment.baseUrl}DemandeEmploie/Create`,
      data
    );
  }

  modifier(id: String, data: any) {
    return this.http.put(
      `${environment.baseUrl}DemandeEmploie/update/${id}`,
      data
    );
  }

  savewithc(id: String, data: any) {
    return this.http.post(
      `${environment.baseUrl}DemandeEmploie/savewithc/${id}`,
      data
    );
  }

  savewithcandp(idc: String,idp:String,data: any) {
    return this.http.post(
      `${environment.baseUrl}DemandeEmploie/savewithcandp/${idc}/${idp}`,
      data
    );
  }

  updatewithcandp(id:String,idc: String,idp:String,data: any) {
    return this.http.put(
      `${environment.baseUrl}DemandeEmploie/updatewithcandp/${id}/${idc}/${idp}`,
      data
    );
  }


   downloadFile(fileUrl: string): Observable<Blob> {
    return this.http.get(fileUrl, { responseType: 'blob' });
  }
}
