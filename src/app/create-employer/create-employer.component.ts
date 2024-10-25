import { Component } from '@angular/core';
import { EmployeService } from '../service/employe.service';
import { DepartementService } from '../service/departement.service';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { SiteService } from '../service/site.service';
import {
  Observable,
  debounceTime,
  distinctUntilChanged,
  map,
  startWith,
  switchMap,
} from 'rxjs';
import { PostService } from '../service/post.service';
import { of } from 'rxjs';
import { from } from 'rxjs';

@Component({
  selector: 'app-create-employer',
  templateUrl: './create-employer.component.html',
  styleUrls: ['./create-employer.component.css'],
})
export class CreateEmployerComponent {
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
  filteredOptions: Observable<any>;
  selected: any;
  obsite: Observable<any[]>;
  obdep: Observable<any>;
  constructor(
    private sitesrevice: SiteService,
    private employeservice: EmployeService,
    private departementservice: DepartementService,
    private activatedroute: ActivatedRoute,
    private formbuilder: FormBuilder,
    private router: Router,
    private service: PostService
  ) {
    // this.filteredOptions = this.myControl.valueChanges.pipe(
    //   startWith(''),
    //   debounceTime(400),
    //   distinctUntilChanged(),
    //   switchMap((val) => {
    //     return this.filter(val || '');
    //   })
    // );
  }
  form: FormGroup;
  iddep: any;
  myControl = new FormControl('');
  selecteditemid: any;
  selecteditemid2: any;
  ngOnInit(): void {
    this.getList();
    this.ListsiteFunction();

    this.form = this.formbuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      cin: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required],
      name: ['', Validators.required],
      myControl: ['', Validators.required],
      Matricule: ['', Validators.required],
    });
    this.obdep = from(this.list);
  }
  getList() {
    this.departementservice.All().subscribe(
      (res: any) => {
        this.list = res;
        console.log('crealist cat on trainingted', res);
      },

      (error: any) => {
        console.log(error);
      }
    );
  }

  creer() {
    let formdata = new FormData();
    formdata.append('lastname', this.form.value.lastname),
      formdata.append('firstname', this.form.value.firstname),
      formdata.append('username', this.form.value.username),
      formdata.append('phone', this.form.value.phone),
      formdata.append('email', this.form.value.email),
      formdata.append('address', this.form.value.address),
      formdata.append('password', this.form.value.password),
      formdata.append('Role', this.form.value.role),
      formdata.append('password', this.form.value.Matricule),
      // formdata.append("role","ROLE_Chef"),

      console.log('resultat', this.form.value);

    let datajson = {
      username: this.form.value.username,
      password: this.form.value.password,
      email: this.form.value.email,
      phone: this.form.value.phone,
      addresse: this.form.value.address,
      cin: this.form.value.cin,
      firstname: this.form.value.firstname,
      lastname: this.form.value.lastname,
      erole: this.form.value.role,
      creepar: this.idu,
      matricule:this.form.value.Matricule
    };

    console.log('datajson', datajson);
    this.employeservice
      .signupemployer(this.selecteditemid2, this.selecteditemid, datajson)
      .subscribe(
        (res: any) => {
          console.log('created');
          this.router.navigateByUrl('/employe');
        },
        (error: any) => {
          console.log(error);
        }
      );
  }
  ListsiteFunction() {
    this.sitesrevice.All().subscribe(
      (res: any) => {
        this.listsite = res;
        console.log('listesite', this.listsite);
      },
      (error: any) => {
        console.log('error', error);
      }
    );
  }

  creerDepartement() {
    console.log('resss', this.form.value);
    this.departementservice.Create(this.form.value).subscribe(
      (res: any) => {
        console.log('created');
        window.location.reload();
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  //   async inputChanged($event: { target: HTMLInputElement }): Promise<void
  // > {
  //     // récupération de la valeur saisie
  //     const value = $event.target.value as string;
  //     // vider la list si le champ de saisie est vide
  //     if (value.length <= 0) {
  //       this.items = [];
  //       return; // stoper l'exection du script
  //     }
  //     // récupération de la liste de posibilités
  //     // const list = await this._apiService.getList();
  //     const list = this.idsite
  //     // filtrer la list pour extraire uniquement les element pertinants
  //     const items = list.filter(
  //       item => item.nomLiveur.toLocaleLowerCase().includes(value.
  // toLocaleLowerCase())
  //     );
  //     // assigner la liste d'items à `this.items`
  //     // cela va aussi afficher la liste de propositions dans le HTML
  //     this.items = items;
  //   }

  //   selected(item:{nomLiveur: string}, input: HTMLInputElement): void {
  //     // vider la valeur du champ de saisie
  //     this.codeLivreur = item.nomLiveur;
  //     this.livreurSelct = item;
  //     console.log("liv-- ", this.livreurSelct.mobileLivreur )
  //     //input.value = '';
  //     // mettre à jour le formuaire
  //     this.form.patchValue({selected: item});
  //     // cacher la liste d'items en vidant la liste
  //     this.items = [];
  //     // console.log('----->',this.codeLivreur)
  //     this.getStockByLivreur(this.codeLivreur);

  //   }

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

  // filter(val: string): Observable<any> {
  //   return this.service.getData().pipe(
  //     map((response) =>
  //       response.filter((option) => {
  //         return option.name.toLowerCase().indexOf(val.toLowerCase()) === 0;
  //       })
  //     )
  //   );
  // }

  creersite() {
    console.log('resss', this.form.value);
    this.sitesrevice.Create(this.form.value).subscribe(
      (res: any) => {
        console.log('created');
        window.location.reload();
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
