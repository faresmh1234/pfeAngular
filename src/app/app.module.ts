import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CategoryComponent } from './category/category.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { TrainingComponent } from './training/training.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailCategoryComponent } from './detail-category/detail-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateCatComponent } from './update-cat/update-cat.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { RecherchePipe } from './pipes/recherche.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DetailTraningComponent } from './detail-traning/detail-traning.component';
import { CreatetrainingComponent } from './createtraining/createtraining.component';
import { EmployeComponent } from './employe/employe.component';
import { AjoutEmployeComponent } from './ajout-employe/ajout-employe.component';
import { DepatementComponent } from './depatement/depatement.component';
import { DepartementComponent } from './departement/departement.component';
import { AjoutDepartementComponent } from './ajout-departement/ajout-departement.component';
import { DetaildepartementComponent } from './detaildepartement/detaildepartement.component';
import { ModifieremployeComponent } from './modifieremploye/modifieremploye.component';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { CreateEmployerComponent } from './create-employer/create-employer.component';
import { DatailEmployerComponent } from './datail-employer/datail-employer.component';
import { TraningInscriptionComponent } from './traning-inscription/traning-inscription.component';
import { LoginComponent } from './login/login.component';
import { DemandeFormationComponent } from './demande-formation/demande-formation.component';
import { SiteComponent } from './site/site.component';
import { DetailEmployerComponent } from './detail-employer/detail-employer.component';
import { GeneralDashboardComponent } from './general-dashboard/general-dashboard.component';
import { TrainingPlaningComponent } from './training-planing/training-planing.component';
import { TrainningFormationComponent } from './trainning-formation/trainning-formation.component';
import { DashboardFormationComponent } from './dashboard-formation/dashboard-formation.component';
import { UpdateEmployerComponent } from './update-employer/update-employer.component';
import { UpdateTrainingComponent } from './update-training/update-training.component';
import { CreateTrainingDemandComponent } from './create-training-demand/create-training-demand.component';
import { AjoutdemandeComponent } from './ajoutdemande/ajoutdemande.component';
import { AddDemandMemberComponent } from './add-demand-member/add-demand-member.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { EmployersubintrainingComponent } from './employersubintraining/employersubintraining.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { InscrireComponent } from './inscrire/inscrire.component';
import { CreateTrainingInscriptionComponent } from './create-training-inscription/create-training-inscription.component';
import { DetailDemandComponent } from './detail-demand/detail-demand.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdateDemandComponent } from './update-demand/update-demand.component';
import { MatTabsModule } from '@angular/material/tabs';
import { TabViewModule } from 'primeng/tabview';
import { DepartmentsComponent } from './departments/departments.component';
import { DepartmentTrainingComponent } from './department-training/department-training.component';
import { EvaluateComponent } from './evaluate/evaluate.component';
import { CreateCondidatComponent } from './create-condidat/create-condidat.component';
import { CondidateComponent } from './condidate/condidate.component';
import { DetailCondidateComponent } from './detail-condidate/detail-condidate.component';
import { UpdateCondidatComponent } from './update-condidat/update-condidat.component';
import { PostComponent } from './post/post.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { DetailPostComponent } from './detail-post/detail-post.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import { DemandeEmploieComponent } from './demande-emploie/demande-emploie.component';
import { CreateDemandeEmploieComponent } from './create-demande-emploie/create-demande-emploie.component';
import { DecisionComponent } from './decision/decision.component';
import { UpdateDemandeEmploieComponent } from './update-demande-emploie/update-demande-emploie.component';
import { CreateDecisionComponent } from './create-decision/create-decision.component';
import { UpdateDecisionComponent } from './update-decision/update-decision.component';
import { UpdateEvaluationComponent } from './update-evaluation/update-evaluation.component';
import { TestComponent } from './test/test.component';
import { RecruttementComponent } from './recruttement/recruttement.component';
import { CreerRecruttementComponent } from './creer-recruttement/creer-recruttement.component';
import { SocieteComponent } from './societe/societe.component';
import { UpdateRecruttementComponent } from './update-recruttement/update-recruttement.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { AddInscriptionMemberComponent } from './add-inscription-member/add-inscription-member.component';
import { DetailInscriptionComponent } from './detail-inscription/detail-inscription.component';
import { UpdateInscriptionComponent } from './update-inscription/update-inscription.component';
import { DashboardRecruttementComponent } from './dashboard-recruttement/dashboard-recruttement.component';
import { ChartdecisionComponent } from './chartdecision/chartdecision.component';
import { StageComponent } from './stage/stage.component';
import { StagiaireComponent } from './stagiaire/stagiaire.component';
import { CreateStageComponent } from './create-stage/create-stage.component';
import { TestCalendarComponent } from './test-calendar/test-calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CreatePresenceComponent } from './create-presence/create-presence.component';
import { PresenceComponent } from './presence/presence.component';
import { UpdatestageComponent } from './updatestage/updatestage.component';
import { CreateStagiaireComponent } from './create-stagiaire/create-stagiaire.component';
import { UpdateStagiaireComponent } from './update-stagiaire/update-stagiaire.component';
import { CacheChauffeurComponent } from './cache-chauffeur/cache-chauffeur.component';
import { CreateCacheChauffeurComponent } from './create-cache-chauffeur/create-cache-chauffeur.component';
import { UpdateCacheChauffeurComponent } from './update-cache-chauffeur/update-cache-chauffeur.component';
import { DetailCacheChauffeurComponent } from './detail-cache-chauffeur/detail-cache-chauffeur.component';
import { VisiteMedicaleComponent } from './visite-medicale/visite-medicale.component';
import { CreateVisiteMedicaleComponent } from './create-visite-medicale/create-visite-medicale.component';
import { UpdateVisiteMedicaleComponent } from './update-visite-medicale/update-visite-medicale.component';
import { CreatenewtrainingComponent } from './createnewtraining/createnewtraining.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DashboaedRecruttementComponent } from './dashboaed-recruttement/dashboaed-recruttement.component';
import { DashboardStageComponent } from './dashboard-stage/dashboard-stage.component';
import { GeneraldashboardComponent } from './generaldashboard/generaldashboard.component';
import { DashboardGeneraleComponent } from './dashboard-generale/dashboard-generale.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { DashOneformationComponent } from './dash-oneformation/dash-oneformation.component';
import { DashOneStageComponent } from './dash-one-stage/dash-one-stage.component';
import { DashOneRecrutementComponent } from './dash-one-recrutement/dash-one-recrutement.component';
import { DashformationComponent } from './dashformation/dashformation.component';
import { DetaildemandeEmploieComponent } from './detaildemande-emploie/detaildemande-emploie.component';
import { DashboardVisiteComponent } from './dashboard-visite/dashboard-visite.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    CategoryComponent,
    AboutComponent,
    TeamComponent,
    TrainingComponent,
    EvaluationComponent,
    DetailCategoryComponent,
    UpdateCatComponent,
    CreateCategoryComponent,
    RecherchePipe,
    DetailTraningComponent,
    CreatetrainingComponent,
    EmployeComponent,
    AjoutEmployeComponent,
    DepatementComponent,
    DepartementComponent,
    AjoutDepartementComponent,
    DetaildepartementComponent,
    ModifieremployeComponent,
    SlidebarComponent,
    CreateEmployerComponent,
    DatailEmployerComponent,
    TraningInscriptionComponent,
    LoginComponent,
    DemandeFormationComponent,
    SiteComponent,
    DetailEmployerComponent,
    GeneralDashboardComponent,
    TrainingPlaningComponent,
    TrainningFormationComponent,
    DashboardFormationComponent,
    UpdateEmployerComponent,
    UpdateTrainingComponent,
    CreateTrainingDemandComponent,
    AjoutdemandeComponent,
    AddDemandMemberComponent,
    EmployersubintrainingComponent,
    InscrireComponent,
    CreateTrainingInscriptionComponent,
    DetailDemandComponent,
    UpdateDemandComponent,
    DepartmentsComponent,
    DepartmentTrainingComponent,
    EvaluateComponent,
    CreateCondidatComponent,
    CondidateComponent,
    DetailCondidateComponent,
    UpdateCondidatComponent,
    PostComponent,
    CreatePostComponent,
    DetailPostComponent,
    UpdatePostComponent,
    DemandeEmploieComponent,
    CreateDemandeEmploieComponent,
    DecisionComponent,
    UpdateDemandeEmploieComponent,
    CreateDecisionComponent,
    UpdateDecisionComponent,
    UpdateEvaluationComponent,
    TestComponent,
    RecruttementComponent,
    CreerRecruttementComponent,
    SocieteComponent,
    UpdateRecruttementComponent,
    CalendarComponent,
    AddInscriptionMemberComponent,
    DetailInscriptionComponent,
    UpdateInscriptionComponent,
    DashboardRecruttementComponent,
    ChartdecisionComponent,
    StageComponent,
    StagiaireComponent,
    CreateStageComponent,
    TestCalendarComponent,
    CreatePresenceComponent,
    PresenceComponent,
    UpdatestageComponent,
    CreateStagiaireComponent,
    UpdateStagiaireComponent,
    CacheChauffeurComponent,
    CreateCacheChauffeurComponent,
    UpdateCacheChauffeurComponent,
    DetailCacheChauffeurComponent,
    VisiteMedicaleComponent,
    CreateVisiteMedicaleComponent,
    UpdateVisiteMedicaleComponent,
    CreatenewtrainingComponent,
    DashboaedRecruttementComponent,
    DashboardStageComponent,
    GeneraldashboardComponent,
    DashboardGeneraleComponent,
    ChatroomComponent,
    DashOneformationComponent,
    DashOneStageComponent,
    DashOneRecrutementComponent,
    DashformationComponent,
    DetaildemandeEmploieComponent,
    DashboardVisiteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    FormsModule,
    NgxPaginationModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTabsModule,
    TabViewModule,

    BrowserModule,
  FormsModule,
  ReactiveFormsModule,
  NgApexchartsModule,

      CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    FullCalendarModule
  ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
