import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StagiaireService } from '../service/stagiaire.service';
import { SiteService } from '../service/site.service';
import { DepartementService } from '../service/departement.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-stagiaire',
  templateUrl: './update-stagiaire.component.html',
  styleUrls: ['./update-stagiaire.component.css'],
})
export class UpdateStagiaireComponent {
  public value = '';
  form: FormGroup;
  id = this.activatedrouted.snapshot.params['id'];
  employe: any;
  //pour chercher
  term: any;
  listdep: any;
  listsite: any;
  iddep: any;
  idsite: any;
  stagiaire: any;
  //pour fermer modal
  siteid: any;
  departementid: any;
  constructor(
    private stagiaireservice: StagiaireService,
    private siteService: SiteService,
    private router: Router,
    private formbuilder: FormBuilder,
    private activatedrouted: ActivatedRoute,
    private departementservice: DepartementService
  ) {}
  ngOnInit(): void {
    this.unstagiaire();
    this.ListdepFunction();
    this.ListsiteFunction();
    this.form = this.formbuilder.group({
      tel_stagiaire: ['', Validators.required],
      email_stagiaire: ['', Validators.required],

      nom_stagiaire: ['', Validators.required],
      //password:['',Validators.required],
      prenom_stagiaire: ['', Validators.required],
      cin_stagiaire: ['', Validators.required],
      genre_stagiaire: ['', Validators.required],
    });
  }

  unstagiaire() {
    this.stagiaireservice.One(this.id).subscribe(
      (res) => {
        this.stagiaire = res;
        console.log('stagiaire', res);
        this.form.patchValue({
          nom_stagiaire: this.stagiaire.nom,
          email_stagiaire: this.stagiaire.email,
          prenom_stagiaire: this.stagiaire.prenom,
          tel_stagiaire: this.stagiaire.tel,
          // idsite:this.employe.site,
          // iddep:this.employe.departement,
          cin_stagiaire: this.stagiaire.cin,
          genre_stagiaire: this.stagiaire.genre,
        });
        this.departementid = this.stagiaire.departementstagiaire.id;
        this.siteid = this.stagiaire.sitestagiaire.id;
      },

      (error) => {
        console.log(error);
      }
    );
  }

  update() {
    let datajson = {
      genre: this.form.value.genre_stagiaire,
      nom: this.form.value.nom_stagiaire,
      prenom: this.form.value.prenom_stagiaire,
      email: this.form.value.email_stagiaire,
      tel: this.form.value.tel_stagiaire,
      cin: this.form.value.cin_stagiaire,
    };

    this.stagiaireservice
      .modify(this.id, this.departementid, this.siteid, datajson)
      .subscribe(
        (res: any) => {
          this.employe = res;
          console.log('employe', this.employe);
          this.router.navigateByUrl('/stagiaire');
        },
        (error: any) => {
          console.log('error', error);
        }
      );
  }

  ListdepFunction() {
    this.departementservice.All().subscribe(
      (res: any) => {
        this.listdep = res;
        console.log('liste', this.listdep);
      },
      (error: any) => {
        console.log('error', error);
      }
    );
  }

  ListsiteFunction() {
    this.siteService.All().subscribe(
      (res: any) => {
        this.listsite = res;
        console.log('listesite', this.listsite);
      },
      (error: any) => {
        console.log('error', error);
      }
    );
  }
}
