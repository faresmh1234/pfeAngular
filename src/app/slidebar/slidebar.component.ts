import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrls: ['./slidebar.component.css']
})
export class SlidebarComponent implements OnInit{
  role=localStorage.getItem("roles")

  admin="ROLE_ADMIN"
 employe="ROLE_EMPLOYE"
 superadmin="ROLE_SUPERADMIN"
responsableStage="ROLE_RESPOSABLLERHFORMATIONETSTAGE"
responsableViste="ROLE_RESPONSABLERHVISUTEMEDICALE"
responsableRecrut="ROLE_RESPONSABLERHRECRUTTEMENT"
chef="ROLE_CHEF"

  ngOnInit(): void {
//this.role=localStorage.getItem("roles");
console.log("123456----role is ",this.role)
  }

}
