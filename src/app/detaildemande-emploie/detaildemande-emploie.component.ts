import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DemandeEmploieService } from '../service/demande-emploie.service';

@Component({
  selector: 'app-detaildemande-emploie',
  templateUrl: './detaildemande-emploie.component.html',
  styleUrls: ['./detaildemande-emploie.component.css']
})
export class DetaildemandeEmploieComponent implements OnInit {
id=this.activatedroute.snapshot.params['id'];
One:any
  constructor(
    private demandeemploieservice:DemandeEmploieService,
    private activatedroute: ActivatedRoute,
    private router: Router
  ){}
  ngOnInit(): void {
    this.unedemande()
  }

unedemande(){
  this.demandeemploieservice.affiche(this.id).subscribe(
 (res)=>{this.One=res; console.log("--------------------resulat",res)

 },
       (error:any)=>{console.log("error",error)
    }
)
}




Downloadfile(){
const fileUrl="http://localhost:8085/DemandeEmploie/files/"+this.One.namefile;
 this.demandeemploieservice.downloadFile(fileUrl).subscribe((blob: Blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'file.pdf'; // Specify the filename
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    });
  }

}

