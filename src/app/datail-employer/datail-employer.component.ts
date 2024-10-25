import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { EmployeService } from '../service/employe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-datail-employer',
  templateUrl: './datail-employer.component.html',
  styleUrls: ['./datail-employer.component.css'],
})
export class DatailEmployerComponent {
  employe: any;
  id = this.activatedrouted.snapshot.params['id'];
  constructor(
    private employeservice: EmployeService,
    private activatedrouted: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.unemploye();
  }

  unemploye() {
    this.employeservice.Onecategory(this.id).subscribe(
      (res) => {
        this.employe = res;
        console.log('employe', res);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  supprimer(id: String) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.employeservice.Delete(id).subscribe(
          (res: any) => {
            console.log('ok');
            this.router.navigateByUrl('/home');
          },
          (error: any) => {
            console.log('error is', error);
          }
        );
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  }
}
