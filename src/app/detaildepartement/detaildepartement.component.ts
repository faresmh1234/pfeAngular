import { Component, OnInit } from '@angular/core';
import { DepartementService } from '../service/departement.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detaildepartement',
  templateUrl: './detaildepartement.component.html',
  styleUrls: ['./detaildepartement.component.css']
})
export class DetaildepartementComponent {
  One:any
id=this.activatedroute.snapshot.params['id'];
  constructor(
    //injection de service à utoiliser
    private detail:DepartementService,
    private activatedroute:ActivatedRoute ,
  ){}

  ngOnInit(): void {
    //appel à une autre fonction dés le départ
    this.OneFunction()

  }

  OneFunction(){
    //avel de la fonction de service qui pa retourner le sefrvice cherché exemple get.post.put
this.detail.One(this.id).subscribe(
 (res)=>{this.One=res; console.log("resulat",res),
       (error:any)=>{console.log("error",error)}
    }
)
  }
}
