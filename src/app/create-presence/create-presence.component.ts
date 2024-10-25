import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StagiaireService } from '../service/stagiaire.service';
import { ActivatedRoute } from '@angular/router';
import { PresenceService } from '../service/presence.service';
import { StageService } from '../service/stage.service';

@Component({
  selector: 'app-create-presence',
  templateUrl: './create-presence.component.html',
  styleUrls: ['./create-presence.component.css']
})
export class CreatePresenceComponent {

  liststagiaire: any;
  // ide = localStorage.getItem('localid');
  iddemande: any;
  e: any;
  variable: any;
  isChecked = false;
  form: FormGroup;
  desDI = [];
  role = localStorage.getItem('roles');
  term:any

  constructor(
    private Stagiaireservice: StagiaireService,
    private route: ActivatedRoute,
    private presenceService: PresenceService,
    private formbuilder: FormBuilder,
    private stageservice:StageService
  ) {
    this.route.params.subscribe((params) => {
      const parametre = params['param'];
      this.iddemande = parametre;

    });
  }
  ngOnInit(): void {
    this.ListFunction();
    this.form = this.formbuilder.group({
      objective: ['', Validators.required],
      checkboxes: new FormArray([]),
    });
  }

  //  ListFunction(){
  //  this.employeservice.departmentemployers(this.ide).subscribe(
  //    (res:any)=>{this.listdesemploye=res;console.log("hhhhhhhhh",this.listdesemploye)},
  //   (error:any)=>{console.log("error",error)}
  //  )
  // }
  ListFunction() {


      this.stageservice.getcurrentstagiaire().subscribe(
        (res: any) => {
          this.liststagiaire = res;
          console.log('hhhhhhhhh', this.liststagiaire);
        },
        (error: any) => {
          console.log('error', error);
        }
      );

  }

  onCheckboxChange(id: any) {
    // This method will be called when the checkbox state changes
    console.log('Checkbox state changed:', this.isChecked);
    // Perform actions based on the checkbox state
    if (this.isChecked) {
      this.add(id); // Call a method when checked
    } else {
      // this.delete(id); // Call a method when unchecked
    }
  }

  add(id: any) {
    let myData: any = {};
    console.log('la valeur de mydata est ', myData);
    console.log("id stagiaire:",id)
    this.presenceService.save(id, myData).subscribe(
      (res: any) => {
        this.e = res;
        console.log('membre ajouté dans la base', this.e);
      },
      (error: any) => {
        console.log('error', error);
      }
    );
  }

  // delete(id: any) {
  //   this.demandeservice.deletemember(this.iddemande, id).subscribe(
  //     (res: any) => {
  //       console.log('ok');
  //       this.ListFunction();
  //     },
  //     (error: any) => {
  //       console.log('error is', error);
  //     }
  //   );
  // }

  onevent(event) {
    if (event.target.checked) {
      this.desDI.push(event.target.value);
      console.log('le tableau est ', this.desDI);
      console.log('le dernier valeur egale a', event.target.value);
      this.add(event.target.value);
    }

    if (!event.target.checked) {
      let i = this.desDI.indexOf(event.target.value);
      this.desDI.splice(i, 1);
      console.log('le tableau est ', this.desDI);
      console.log('le dernier valeur egale a', event.target.value);
      // this.delete(event.target.value);
    }

    console.log('di---   ' + this.desDI);
  }

}
