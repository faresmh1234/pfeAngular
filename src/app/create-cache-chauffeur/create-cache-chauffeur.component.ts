import { Component } from '@angular/core';
import { CachechauffeurService } from '../service/cachechauffeur.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { SiteService } from '../service/site.service';
import { SocieteService } from '../service/societe.service';

@Component({
  selector: 'app-create-cache-chauffeur',
  templateUrl: './create-cache-chauffeur.component.html',
  styleUrls: ['./create-cache-chauffeur.component.css']
})
export class CreateCacheChauffeurComponent {
   one: any;
  listdepartement: any;
  list: any;
  idsite: any;
  listsite: any;
  idu = localStorage.getItem('localid');
  items: any;
  idsite2: any;
  departement: any;
  selecteditemd: any;
  listsociete:any


  selected: any;

  constructor(
    private cachechauffeurservice: CachechauffeurService,
    private activatedroute: ActivatedRoute,
    private formbuilder: FormBuilder,
    private router: Router,
    private siteservice:SiteService,
    private societeservice:SocieteService
) {}
  form: FormGroup;
  iddep: any;
  myControl = new FormControl('');
  selecteditemid: any;
  selecteditemid2: any;
  ngOnInit(): void {

    this.ListsiteFunction();
    this.ListsocieteFunction();

    this.form = this.formbuilder.group({
      nomchauffeur: ['', Validators.required],
      prenom_chauffeur: ['', Validators.required],
      remarque: ['', Validators.required],
      matricule: ['', Validators.required],
      identifiantcache: ['', Validators.required],
      nom_site: ['', Validators.required],
      nom_societe: ['', Validators.required],
    });

  }


  creer() {
    // let formdata = new FormData();
    // formdata.append('prenom', this.form.value.prenom),
    //   formdata.append('nom', this.form.value.nom),
    //   formdata.append('tel', this.form.value.tel),
    //   formdata.append('email', this.form.value.email),
    //   formdata.append('niveauEtude', this.form.value.email),

      console.log('resultat', this.form.value);

    let datajson = {
      nomchauffeur: this.form.value.nomchauffeur,
      prenom_chauffeur: this.form.value.prenom_chauffeur,
      remarque: this.form.value.remarque,
      matricule: this.form.value.matricule,
      identifiantcache: this.form.value.identifiantcache,
      nom_site: this.form.value.nom_site,
      nom_societe:this.form.value.nom_societe,
      creer_par: this.idu,
    };

    console.log('datajson', datajson);
    this.cachechauffeurservice
      .Create(datajson)
      .subscribe(
        (res: any) => {
          console.log('created');
          this.router.navigateByUrl('/cachechauffeur');
        },
        (error: any) => {
          console.log(error);
        }
      );
  }






  // onclick() {
  //   var name = this.idsite2;
  //   const selecteditem = this.listsite.find((item) => item.name == name);
  //   if (selecteditem) {
  //     this.selecteditemid = selecteditem.id;
  //   } else {
  //     this.selecteditemid = undefined;
  //   }
  //   console.log('la valeur est :', this.selecteditemid);
  // }

  // onclickdep() {
  //   var name = this.departement;
  //   const selecteditem = this.list.find((item) => item.name == name);
  //   if (selecteditem) {
  //     this.selecteditemid2 = selecteditem.id;
  //   } else {
  //     this.selecteditemid2 = undefined;
  //   }
  //   console.log('la valeur est :', this.selecteditemid);
  //   console.log('la valeur est :', this.selecteditemid2);
  // }

  // handleInput(event) {
  //   console.log('okkkkk', event);
  // }



deleteone(id:String)
{
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.cachechauffeurservice.Delete(id).subscribe(
        (res:any)=>{console.log("ok");
// this.ListFunction()
      },
      (error:any)=>{console.log("error is",error)}
      )
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })
}



ListsiteFunction() {
    this.siteservice.All().subscribe(
      (res: any) => {
        this.listsite = res;
        console.log('listesite', this.listsite);
      },
      (error: any) => {
        console.log('error', error);
      }
    );
  }

  ListsocieteFunction() {
    this.societeservice.All().subscribe(
      (res: any) => {
        this.listsociete = res;
        console.log('listsociete', this.listsociete);
      },
      (error: any) => {
        console.log('error', error);
      }
    );
  }
}
