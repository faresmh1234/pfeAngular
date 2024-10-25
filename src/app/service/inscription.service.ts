import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {


  constructor(private http:HttpClient) { }
    affichetous()
  {return this.http.get(`${environment.baseUrl}Inscription/list`)}

  affiche(id:String)
{ return this.http.get(`${environment.baseUrl}Inscription/listone/${id}`) }




 supprimer(id:String)
 { return this.http.delete(`${environment.baseUrl}Inscription/deleteone/${id}`); }


creer(data:any)
{
  return this.http.post(`${environment.baseUrl}Inscription/Create`,data); }

 modifier(id:String,data:any)
 { return this.http.put(`${environment.baseUrl}Inscription/update/${id}`,data); }

  nbrinsnscriptionof(id:String)
 { return this.http.get(`${environment.baseUrl}Inscription/listeinscriformtion/${id}`); }


 employerssubintraining(id:String)
 { return this.http.get(`${environment.baseUrl}Inscription/listeemployeformation/${id}`); }

 inscrire(idf:String,data:any){
 return  this.http.post(`${environment.baseUrl}Inscription/inscrireformation/${idf}`,data);
 }

 addmember(idi: String, ide: String, data: any) {
    return this.http.post(
      `${environment.baseUrl}MembreInscription/addinscriptionmember/${idi}/${ide}`,
      data
    );
  }
  deletemember(idi: String, ide: String) {
    return this.http.delete(
      `${environment.baseUrl}MembreInscription/deleteone/${idi}/${ide}`
    );
  }

  members(idd: String) {
    return this.http.get(
      `${environment.baseUrl}Inscription/employerinscription/${idd}`
    );
  }
  updateinscription(idi: String,idf: String,data:any) {
    return this.http.put(
      `${environment.baseUrl}Inscription/updateinscription/${idi}/${idf}`,data
    );
  }
}
