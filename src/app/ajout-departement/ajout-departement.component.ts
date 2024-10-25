import { Component, OnInit } from '@angular/core';
import { DepartementService } from '../service/departement.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ajout-departement',
  templateUrl: './ajout-departement.component.html',
  styleUrls: ['./ajout-departement.component.css'],
})
export class AjoutDepartementComponent {
  one: any;
  constructor(
    private departementService: DepartementService,
    private activatedroute: ActivatedRoute,
    private formbuilder: FormBuilder,
    private router: Router
  ) {}
  form: FormGroup;

  ngOnInit(): void {
    this.form = this.formbuilder.group({
      name: ['', Validators.required],
    });
  }

  creer() {
    console.log('resss', this.form.value);
    this.departementService.Create(this.form.value).subscribe(
      (res: any) => {
        console.log('created');
        this.router.navigateByUrl('/departement');
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
