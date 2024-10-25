import { Component } from '@angular/core';
import { CondidatService } from '../service/condidat.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-condidat',
  templateUrl: './create-condidat.component.html',
  styleUrls: ['./create-condidat.component.css']
})
export class CreateCondidatComponent {
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

  selected: any;

  constructor(
    private condidatservice: CondidatService,
    private activatedroute: ActivatedRoute,
    private formbuilder: FormBuilder,
    private router: Router,
) {}
  form: FormGroup;
  iddep: any;
  myControl = new FormControl('');
  selecteditemid: any;
  selecteditemid2: any;
  ngOnInit(): void {



    this.form = this.formbuilder.group({
      nom: ['', Validators.required],
      email: ['', Validators.required],
      prenom: ['', Validators.required],
      tel: ['', Validators.required],
      niveauEtude: ['', Validators.required],

    });

  }


  creer() {
    let formdata = new FormData();
    formdata.append('prenom', this.form.value.prenom),
      formdata.append('nom', this.form.value.nom),
      formdata.append('tel', this.form.value.tel),
      formdata.append('email', this.form.value.email),
      formdata.append('niveauEtude', this.form.value.email),

      console.log('resultat', this.form.value);

    let datajson = {
      nom: this.form.value.nom,
      prenom: this.form.value.prenom,
      email: this.form.value.email,
      tel: this.form.value.tel,
      niveauEtude: this.form.value.niveauEtude,
      cin: this.form.value.cin,
      creepar: this.idu,
    };

    console.log('datajson', datajson);
    this.condidatservice
      .Create(datajson)
      .subscribe(
        (res: any) => {
          console.log('created');
          this.router.navigateByUrl('/condidat');
        },
        (error: any) => {
          console.log(error);
        }
      );
  }






  onclick() {
    var name = this.idsite2;
    const selecteditem = this.listsite.find((item) => item.name == name);
    if (selecteditem) {
      this.selecteditemid = selecteditem.id;
    } else {
      this.selecteditemid = undefined;
    }
    console.log('la valeur est :', this.selecteditemid);
  }

  onclickdep() {
    var name = this.departement;
    const selecteditem = this.list.find((item) => item.name == name);
    if (selecteditem) {
      this.selecteditemid2 = selecteditem.id;
    } else {
      this.selecteditemid2 = undefined;
    }
    console.log('la valeur est :', this.selecteditemid);
    console.log('la valeur est :', this.selecteditemid2);
  }

  handleInput(event) {
    console.log('okkkkk', event);
  }





}
