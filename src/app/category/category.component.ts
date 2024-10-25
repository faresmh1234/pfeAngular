import { Component ,OnInit} from '@angular/core';
import { CategoryService } from '../service/category.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{
listCategory:any
term:any

constructor(private catservice:CategoryService){}


  ngOnInit(){
 this.ListFunction()
 

  }


  ListFunction(){
   this.catservice.AllCategories().subscribe(
     (res:any)=>{this.listCategory=res;console.log("listecategory",this.listCategory)},
    (error:any)=>{console.log("error",error)}
   )
  }

  delete(id:String)
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
      this.catservice.DeleteCategory(id).subscribe(
        (res:any)=>{console.log("ok");
this.ListFunction()
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
}
