import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';


import * as $ from 'jquery'
import { WebSocketServiceService } from '../service/web-socket-service.service';
import { Subscription, interval } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{


  constructor(private loginservice:LoginService,
    private router:Router,
private websocketservice:WebSocketServiceService
    ){}
listnot:any[]=[]
oneNot:any
notificationCounter:number=0
allnotif:any

id:any
nbseen:number=0
nbNotSeen:number=0
  private pollingSubscription: Subscription;
    signout(){

  localStorage.removeItem("erole");
  localStorage.removeItem("localid");
  localStorage.removeItem("usernamecnnected")
  localStorage.removeItem("roles")
  localStorage.removeItem("state")
this.router.navigateByUrl("/");
  this.loginservice.logout().subscribe((res:any)=>{alert("logout")},
  (err:any)=>{console.log(err)})  }
  ngOnInit(): void {
    this.id=localStorage.getItem("localid")
this.start();
    this.getlistnotif();
    this.sendnotif();

this.pollingSubscription = interval(2000).subscribe(() => {
  this.listnot=[];

      this.getlistnotif();
    });

  }
  //  addActiveClass(element) {
  //     if (this.current === "") {
  //       //for root url
  //       if (element.attr('href').indexOf("index.html") !== -1) {
  //         element.parents('.nav-item').last().addClass('active');
  //         if (element.parents('.sub-menu').length) {
  //           element.closest('.collapse').addClass('show');
  //           element.addClass('active');
  //         }
  //       }
  //     } else {
  //       //for other url
  //       if (element.attr('href').indexOf(this.current) !== -1) {
  //         element.parents('.nav-item').last().addClass('active');
  //         if (element.parents('.sub-menu').length) {
  //           element.closest('.collapse').addClass('show');
  //           element.addClass('active');
  //         }
  //         if (element.parents('.submenu-item').length) {
  //           element.addClass('active');
  //         }
  //       }
  //     }
  //   }

  //   //debut




  //   //Close other submenu in sidebar on opening any

  //   this.sidebar.on('show.bs.collapse', '.collapse', function() {
  //     this.sidebar.find('.collapse.show').collapse('hide');
  //   });


  //   // Change sidebar and content-wrapper height


  //    applyStyles() {
  //     //Applying perfect scrollbar
  //     if (!this.body.hasClass("rtl")) {
  //       if ($('.settings-panel .tab-content .tab-pane.scroll-wrapper').length) {
  //         const settingsPanelScroll = new PerfectScrollbar('.settings-panel .tab-content .tab-pane.scroll-wrapper');
  //       }
  //       if ($('.chats').length) {
  //         const chatsScroll = new PerfectScrollbar('.chats');
  //       }
  //       if (body.hasClass("sidebar-fixed")) {
  //         if($('#sidebar').length) {
  //           var fixedSidebarScroll = new PerfectScrollbar('#sidebar .nav');
  //         }
  //       }
  //     }
  //   }

  //   $('[data-toggle="minimize"]').on("click", function() {
  //     if ((this.body.hasClass('sidebar-toggle-display')) || (this.body.hasClass('sidebar-absolute'))) {
  //       this.body.toggleClass('sidebar-hidden');
  //     } else {
  //       this.body.toggleClass('sidebar-icon-only');
  //     }
  //   });

  //   //checkbox and radios
  //   $(".form-check label,.form-radio label").append('<i class="input-helper"></i>');

  //   //Horizontal menu in mobile
  //   $('[data-toggle="horizontal-menu-toggle"]').on("click", function() {
  //     $(".horizontal-menu .bottom-navbar").toggleClass("header-toggled");
  //   });
  //   // Horizontal menu navigation in mobile menu on click

  //   this.navItemClicked.on("click", function(event) {
  //     if(window.matchMedia('(max-width: 991px)').matches) {
  //       if(!($(this).hasClass('show-submenu'))) {
  //         this.navItemClicked.removeClass('show-submenu');
  //       }
  //       $(this).toggleClass('show-submenu');
  //     }
  //   })

  //   $(window).scroll(function() {
  //     if(window.matchMedia('(min-width: 992px)').matches) {
  //       var header = $('.horizontal-menu');
  //       if ($(window).scrollTop() >= 70) {
  //         $(header).addClass('fixed-on-scroll');
  //       } else {
  //         $(header).removeClass('fixed-on-scroll');
  //       }
  //     }
  //   });
  // });

  // // focus input when clicking on search icon
  // $('#navbar-search-icon').click(function() {
  //   $("#navbar-search-input").focus();
  // });



  //   //fin

getlistnotif(){

 // console.log("list function")
    this.websocketservice.getAllnotif().subscribe(
      (res: any) => {
        this.allnotif = res;
        for(let j=0;j<this.allnotif.length;j++){
if(this.allnotif[j].idEmployeInscrit==this.id){
 this.listnot.push(this.allnotif[j]);


}
        }

//console.log('*****LIST NOTIF******', this.listnot);


      },
      (error: any) => {
        console.log('error', error);
      }
    );
}


actionclick(id:string)
{this.websocketservice.seenonenotif(id).subscribe(
(res)=>{
  //console.log("data",res);
  this.oneNot=res;

  if(this.oneNot.objectifnotif=="evaluation"){this.router.navigateByUrl("/evaluate/"+this.oneNot.idFormation)}
  else {this.router.navigateByUrl("/visitemedicale")}
},
(error)=>{console.log(error)}
)

}


sendnotif(){
let data={"interests":["hello"], "users": ["2269"],"web":{"notification":{"title":"Hello","body":"Merci d'évaluer la formation!"}}};
//console.log("####step1####");
  this.websocketservice.sendNotifpusher(data).subscribe(
    (res)=>{
      //console.log("************pusher********data",res)
      ;},
    (error)=>{console.log(error)}
  )
}




start(){
  this.websocketservice.starserviceworker().subscribe(
    (res)=>{
      //console.log("######START SERVICE WORKER#######")

    },
    (error)=>{console.log(error)}
  )
}



}
