import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  list: any;
  filteredlist: any;
  term: any;
  public value = '';
  c: number = 1;

  constructor(private postservice: PostService) {}

  ngOnInit() {
    this.ListFunction();
  }

  ListFunction() {
    this.postservice.All().subscribe(
      (res: any) => {
        this.list = res;
        console.log('liste', this.list);
        this.filteredlist = this.list.filter((item) => item.status == 'VACANT');
      },
      (error: any) => {
        console.log('error', error);
      }
    );
  }

  deleteone(id: String) {
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
        this.postservice.Delete(id).subscribe(
          (res: any) => {
            console.log('ok');
            this.ListFunction();
          },
          (error: any) => {
            console.log('error is', error);
          }
        );
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  }

  listevacant() {
    this.filteredlist = this.list.filter((item) => item.status == 'VACANT');
    this.c=1
  }
  listeencours() {
    this.filteredlist = this.list.filter((item) => item.status == 'ENCOURS');
    this.c=1
  }
  listannule() {
    this.filteredlist = this.list.filter((item) => item.status == 'ANNULE');
    this.c=1
  }
  listsuspendu() {
    this.filteredlist = this.list.filter((item) => item.status == 'SUSPENDU');
    this.c=1
  }
  listEmbauche() {
    this.filteredlist = this.list.filter((item) => item.status == 'EMBAUCHE');
    this.c=1
  }
  listtermine() {
    this.filteredlist = this.list.filter((item) => item.status == 'TERMINE');
    this.c=1
  }
}
