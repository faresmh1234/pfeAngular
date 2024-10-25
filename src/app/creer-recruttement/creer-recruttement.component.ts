import { Component } from '@angular/core';
import { CondidatService } from '../service/condidat.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecruttementService } from '../service/recruttement.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SocieteService } from '../service/societe.service';


@Component({
  selector: 'app-creer-recruttement',
  templateUrl: './creer-recruttement.component.html',
  styleUrls: ['./creer-recruttement.component.css']
})
export class CreerRecruttementComponent {
listcategories: any;
  listc: any;
  listdep: any;
  iddep: any;
  listsociete:any
  ids:any
  constructor(
    private recruttementservice: RecruttementService,
    private condidatservice: CondidatService,
    private activatedroute: ActivatedRoute,
    private formbuilder: FormBuilder,
    private router: Router,
    private societeservice:SocieteService
  ) {}

  form: FormGroup;
  idc: any;
  idu = localStorage.getItem('localid');

  ngOnInit(): void {
    this.getListCondidat();
    this.getListsociete()
    this.form = this.formbuilder.group({
      motif: ['', Validators.required],
      mode_recruttement: ['', Validators.required],

    });
  }
  getListCondidat() {
    this.condidatservice.All().subscribe(
      (res: any) => {
        this.listc = res;
        console.log('liste condidat ', res);
      },

      (error: any) => {
        console.log(error);
      }
    );
  }

  create() {
    console.log('id poste',this.ids)
    console.log('id condidat',this.idc)
    let datajson = {
      motif: this.form.value.motif,
      mode_recruttement: this.form.value.mode_recruttement,

    };

    console.log('resultat', this.form.value);
    this.recruttementservice.recrute(this.idc,this.ids, datajson).subscribe(
      (res: any) => {
        console.log('created');
        this.router.navigateByUrl('/recruttement');
      },
      (error: any) => {
        console.log(error);
      }
    );
  }



  getListsociete() {
    this.societeservice.All().subscribe(
      (res: any) => {
        this.listsociete = res;
        console.log('liste poste ', res);
        console.log("liste sosiete",this.listsociete)
      },

      (error: any) => {
        console.log(error);
      }
    );
  }

  creerCondidat() {}

  creerposte() {}
}
