import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainingService } from '../service/training.service';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-ajoutdemande',
  templateUrl: './ajoutdemande.component.html',
  styleUrls: ['./ajoutdemande.component.css'],
})
export class AjoutdemandeComponent {
  onetraining: any;
  listcategories: any;
  list: any;
  constructor(
    private trainingservice: TrainingService,
    private categoruservice: CategoryService,
    private activatedroute: ActivatedRoute,
    private formbuilder: FormBuilder,
    private router: Router
  ) {}
  form: FormGroup;
  idcat: any;

  ngOnInit(): void {
    this.getList();

    this.form = this.formbuilder.group({
      nom: ['', Validators.required],
      prix: ['', Validators.required],
      etat: ['', Validators.required],
      type: ['', Validators.required],
      nbrhour: ['', Validators.required],
      datedebut: ['', Validators.required],
      datefin: ['', Validators.required],
      nomformateur: ['', Validators.required],
      description: ['', Validators.required],
    });
  }
  getList() {
    this.categoruservice.AllCategories().subscribe(
      (res: any) => {
        this.list = res;
        console.log('crealist cat on trainingted', res);
      },

      (error: any) => {
        console.log(error);
      }
    );
  }

  create() {
    console.log('resultat', this.form.value);
    this.trainingservice.Createwhithcat(this.idcat, this.form.value).subscribe(
      (res: any) => {
        console.log('created');
        this.router.navigateByUrl('/demandeformation');
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
