import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DemandeService {
  constructor(private http: HttpClient) {}
  affichetous() {
    console.log('cat service');
    //ici code de sauvegarde
    return this.http.get(`${environment.baseUrl}DemandeFormation/list`);
  }

  affiche(id: String) {
    console.log('id on service categorie', id);
    return this.http.get(
      `${environment.baseUrl}DemandeFormation/listone/${id}`
    );
  }

  supprimer(id: String) {
    return this.http.delete(
      `${environment.baseUrl}DemandeFormation/deleteone/${id}`
    );
  }

  creer(data: any) {
    return this.http.post(
      `${environment.baseUrl}DemandeFormation/Create`,
      data
    );
  }

  modifier(id: String, data: any) {
    return this.http.put(
      `${environment.baseUrl}DemandeFormation/update/${id}`,
      data
    );
  }

  createdemand(ide: String, idf: String, data: any) {
    return this.http.post(
      `${environment.baseUrl}DemandeFormation/creerdemande/${ide}/${idf}`,
      data
    );
  }

  addmember(idd: String, ide: String, data: any) {
    return this.http.post(
      `${environment.baseUrl}MembreFormation/addtrainingmember/${idd}/${ide}`,
      data
    );
  }

  members(idd: String) {
    return this.http.get(
      `${environment.baseUrl}DemandeFormation/employerdemande/${idd}`
    );
  }

  deletemember(idd: String, ide: String) {
    return this.http.delete(
      `${environment.baseUrl}MembreFormation/deleteone/${idd}/${ide}`
    );
  }

  updatemembre(id: String, idf: String,data:any) {
    return this.http.put(
      `${environment.baseUrl}DemandeFormation/updatewithf/${id}/${idf}`,data
    );
  }

  validerDemande(id: String) {
    return this.http.get(
      `${environment.baseUrl}DemandeFormation/validate/${id}`
    );
  }

  refuserDemande(id: String) {
    return this.http.get(
      `${environment.baseUrl}DemandeFormation/refuse/${id}`
    );
  }

  demandeEnattente() {
    return this.http.get(
      `${environment.baseUrl}DemandeFormation/demandeEnattente`
    );
  }


  demandeAccepte() {
    return this.http.get(
      `${environment.baseUrl}DemandeFormation/DemandeAccepte`
    );
  }

  DemandeRefuse() {
    return this.http.get(
      `${environment.baseUrl}DemandeFormation/DemandeRefuse`
    );
  }
}
