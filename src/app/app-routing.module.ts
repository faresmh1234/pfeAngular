import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CategoryComponent } from './category/category.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { DetailCategoryComponent } from './detail-category/detail-category.component';
import { UpdateCatComponent } from './update-cat/update-cat.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { TrainingComponent } from './training/training.component';
import { DetailTraningComponent } from './detail-traning/detail-traning.component';
import { CreatetrainingComponent } from './createtraining/createtraining.component';
import { EmployeComponent } from './employe/employe.component';
import { DepartementComponent } from './departement/departement.component';
import { AjoutDepartementComponent } from './ajout-departement/ajout-departement.component';
import { DetaildepartementComponent } from './detaildepartement/detaildepartement.component';
import { AjoutEmployeComponent } from './ajout-employe/ajout-employe.component';
import { DemandeFormationComponent } from './demande-formation/demande-formation.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { TraningInscriptionComponent } from './traning-inscription/traning-inscription.component';
import { DetailEmployerComponent } from './detail-employer/detail-employer.component';
import { GeneralDashboardComponent } from './general-dashboard/general-dashboard.component';
import { TrainingPlaningComponent } from './training-planing/training-planing.component';
import { UpdateEmployerComponent } from './update-employer/update-employer.component';
import { UpdateTrainingComponent } from './update-training/update-training.component';
import { CreateEmployerComponent } from './create-employer/create-employer.component';
import { DashboardFormationComponent } from './dashboard-formation/dashboard-formation.component';
import { CreateTrainingDemandComponent } from './create-training-demand/create-training-demand.component';
import { AddDemandMemberComponent } from './add-demand-member/add-demand-member.component';
import { EmployersubintrainingComponent } from './employersubintraining/employersubintraining.component';
import { InscrireComponent } from './inscrire/inscrire.component';
import { DetailDemandComponent } from './detail-demand/detail-demand.component';
import { UpdateDemandComponent } from './update-demand/update-demand.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DepartmentTrainingComponent } from './department-training/department-training.component';
import { EvaluateComponent } from './evaluate/evaluate.component';
import { CreateCondidatComponent } from './create-condidat/create-condidat.component';
import { CondidateComponent } from './condidate/condidate.component';
import { DetailCondidateComponent } from './detail-condidate/detail-condidate.component';
import { UpdateCondidatComponent } from './update-condidat/update-condidat.component';
import { PostComponent } from './post/post.component';
import { DemandeEmploieComponent } from './demande-emploie/demande-emploie.component';
import { CreateDemandeEmploieComponent } from './create-demande-emploie/create-demande-emploie.component';
import { DecisionComponent } from './decision/decision.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import { UpdateDemandeEmploieComponent } from './update-demande-emploie/update-demande-emploie.component';
import { CreateDecisionComponent } from './create-decision/create-decision.component';
import { UpdateDecisionComponent } from './update-decision/update-decision.component';
import { UpdateEvaluationComponent } from './update-evaluation/update-evaluation.component';
import { RecruttementComponent } from './recruttement/recruttement.component';
import { CreerRecruttementComponent } from './creer-recruttement/creer-recruttement.component';
import { UpdateRecruttementComponent } from './update-recruttement/update-recruttement.component';
import { AddInscriptionMemberComponent } from './add-inscription-member/add-inscription-member.component';
import { DetailInscriptionComponent } from './detail-inscription/detail-inscription.component';
import { UpdateInscriptionComponent } from './update-inscription/update-inscription.component';
import { DashboardRecruttementComponent } from './dashboard-recruttement/dashboard-recruttement.component';
import { ChartdecisionComponent } from './chartdecision/chartdecision.component';
import { StageComponent } from './stage/stage.component';
import { StagiaireComponent } from './stagiaire/stagiaire.component';
import { TestCalendarComponent } from './test-calendar/test-calendar.component';
import { CreateStageComponent } from './create-stage/create-stage.component';
import { CreatePresenceComponent } from './create-presence/create-presence.component';
import { PresenceComponent } from './presence/presence.component';
import { CreateStagiaireComponent } from './create-stagiaire/create-stagiaire.component';
import { UpdateStagiaireComponent } from './update-stagiaire/update-stagiaire.component';
import { UpdatestageComponent } from './updatestage/updatestage.component';
import { CacheChauffeurComponent } from './cache-chauffeur/cache-chauffeur.component';
import { CreateCacheChauffeurComponent } from './create-cache-chauffeur/create-cache-chauffeur.component';
import { UpdateCacheChauffeurComponent } from './update-cache-chauffeur/update-cache-chauffeur.component';
import { DetailCacheChauffeurComponent } from './detail-cache-chauffeur/detail-cache-chauffeur.component';
import { VisiteMedicaleComponent } from './visite-medicale/visite-medicale.component';
import { CreateVisiteMedicaleComponent } from './create-visite-medicale/create-visite-medicale.component';
import { UpdateVisiteMedicaleComponent } from './update-visite-medicale/update-visite-medicale.component';
import { CreatenewtrainingComponent } from './createnewtraining/createnewtraining.component';
import { TestComponent } from './test/test.component';
import { DashboardStageComponent } from './dashboard-stage/dashboard-stage.component';
import { DashboardGeneraleComponent } from './dashboard-generale/dashboard-generale.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { DashformationComponent } from './dashformation/dashformation.component';
import { DetaildemandeEmploieComponent } from './detaildemande-emploie/detaildemande-emploie.component';
import { DashboardVisiteComponent } from './dashboard-visite/dashboard-visite.component';
import { DashOneStageComponent } from './dash-one-stage/dash-one-stage.component';
import { DashOneRecrutementComponent } from './dash-one-recrutement/dash-one-recrutement.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', canActivate: [AuthGuard], component: HomeComponent },
  { path: 'footer', canActivate: [AuthGuard], component: FooterComponent },
  { path: 'header', canActivate: [AuthGuard], component: HeaderComponent },
  { path: 'category', canActivate: [AuthGuard], component: CategoryComponent },
  { path: 'about', canActivate: [AuthGuard], component: AboutComponent },
  { path: 'team', canActivate: [AuthGuard], component: TeamComponent },
  {
    path: 'evaluation',
    canActivate: [AuthGuard],
    component: EvaluationComponent,
  },
  {
    path: 'datailCat/:id',
    canActivate: [AuthGuard],
    component: DetailCategoryComponent,
  },
  {
    path: 'updateCat/:id',
    canActivate: [AuthGuard],
    component: UpdateCatComponent,
  },
  {
    path: 'create',
    canActivate: [AuthGuard],
    component: CreateCategoryComponent,
  },
  { path: 'training', canActivate: [AuthGuard], component: TrainingComponent },
  {
    path: 'datailtraining/:id',
    canActivate: [AuthGuard],
    component: DetailTraningComponent,
  },
  {
    path: 'createtraining',
    canActivate: [AuthGuard],
    component: CreatetrainingComponent,
  },
  { path: 'employe', canActivate: [AuthGuard], component: EmployeComponent },
  {
    path: 'departement',
    canActivate: [AuthGuard],
    component: DepartementComponent,
  },
  {
    path: 'createdepartement',
    canActivate: [AuthGuard],
    component: AjoutDepartementComponent,
  },
  {
    path: 'detaildepartement/:id',
    canActivate: [AuthGuard],
    component: DetaildepartementComponent,
  },
  {
    path: 'createemploye',
    canActivate: [AuthGuard],
    component: CreateEmployerComponent,
  },
  {
    path: 'demandeformation',
    canActivate: [AuthGuard],
    component: DemandeFormationComponent,
  },
  {
    path: 'inscription',
    canActivate: [AuthGuard],
    component: TraningInscriptionComponent,
  },
  {
    path: 'detailemployer/:id',
    canActivate: [AuthGuard],
    component: DetailEmployerComponent,
  },
  {
    path: 'generaldashboard',
    canActivate: [AuthGuard],
    component: GeneralDashboardComponent,
  },
  {
    path: 'planningformation/:id',
    canActivate: [AuthGuard],
    component: TrainingPlaningComponent,
  },
  {
    path: 'updateemploye/:id',
    canActivate: [AuthGuard],
    component: UpdateEmployerComponent,
  },
  {
    path: 'updatetraining/:id',
    canActivate: [AuthGuard],
    component: UpdateTrainingComponent,
  },
  {
    path: 'dashbordformation',
    canActivate: [AuthGuard],
    component: DashboardFormationComponent,
  },
  {
    path: 'dashbordgenerale',
    canActivate: [AuthGuard],
    component: GeneralDashboardComponent,
  },
  {
    path: 'createtrainingdemand',
    canActivate: [AuthGuard],
    component: CreateTrainingDemandComponent,
  },
  {
    path: 'addmembers',
    canActivate: [AuthGuard],
    component: AddDemandMemberComponent,
  },
  {
    path: 'addinscriptionmembers',
    canActivate: [AuthGuard],
    component: AddInscriptionMemberComponent,
  },
  {
    path: 'employersubintraining/:id',
    canActivate: [AuthGuard],
    component: EmployersubintrainingComponent,
  },
  {
    path: 'inscrire',
    canActivate: [AuthGuard],
    component: InscrireComponent,
  },
  {
    path: 'detaildemand/:id',
    canActivate: [AuthGuard],
    component: DetailDemandComponent,
  },
  {
    path: 'updatedemande/:id',
    canActivate: [AuthGuard],
    component: UpdateDemandComponent,
  },
  {
    path: 'departmenttraining',
    canActivate: [AuthGuard],
    component: DepartmentTrainingComponent,
  },

    {
    path: 'evaluate/:id',
    canActivate: [AuthGuard],
    component: EvaluateComponent,
  },
   {
    path: 'creercondidat',
    canActivate: [AuthGuard],
    component: CreateCondidatComponent,
  },
   {
    path: 'condidat',
    canActivate: [AuthGuard],
    component: CondidateComponent,
  },
    {
    path: 'detailCondidat/:id',
    canActivate: [AuthGuard],
    component: DetailCondidateComponent,
  },
   {
    path: 'modifiercondidat/:id',
    canActivate: [AuthGuard],
    component: UpdateCondidatComponent,
  },
  {
    path: 'post',
    canActivate: [AuthGuard],
    component: PostComponent,
  },
  {
    path: 'demandeemploie',
    canActivate: [AuthGuard],
    component: DemandeEmploieComponent,
  },
  {
    path: 'createdemande',
    canActivate: [AuthGuard],
    component: CreateDemandeEmploieComponent,
  },
  {
    path: 'decision',
    canActivate: [AuthGuard],
    component: DecisionComponent,
  },
  {
    path: 'createpost',
    canActivate: [AuthGuard],
    component: CreatePostComponent,
  },
  {
    path: 'modifierpost/:id',
    canActivate: [AuthGuard],
    component: UpdatePostComponent,
  },
  {
    path: 'modifierdemandeemploie/:id',
    canActivate: [AuthGuard],
    component: UpdateDemandeEmploieComponent,
  },
  {
    path: 'creerdecision',
    canActivate: [AuthGuard],
    component: CreateDecisionComponent,
  },
  {
    path: 'modifierdecision/:id',
    canActivate: [AuthGuard],
    component: UpdateDecisionComponent,
  },
  {
    path: 'modifierevaluation/:id',
    canActivate: [AuthGuard],
    component: UpdateEvaluationComponent,
  },
   {
    path: 'recruttement',
    canActivate: [AuthGuard],
    component: RecruttementComponent,
  },
  {
    path: 'creerrecruttement',
    canActivate: [AuthGuard],
    component: CreerRecruttementComponent,
  },
  {
    path: 'modifierrecruttement/:id',
    canActivate: [AuthGuard],
    component: UpdateRecruttementComponent,
  },
  {
    path: 'detailinscription/:id',
    canActivate: [AuthGuard],
    component: DetailInscriptionComponent,
  },
  {
    path: 'modifierinscription/:id',
    canActivate: [AuthGuard],
    component: UpdateInscriptionComponent,
  },
  {
    path: 'chartrecruttement',
    canActivate: [AuthGuard],
    component: DashboardRecruttementComponent,
  },
   {
    path: 'chartdecision',
    canActivate: [AuthGuard],
    component: ChartdecisionComponent,
  },
  {
    path: 'stage',
    canActivate: [AuthGuard],
    component: StageComponent,
  },
  {
    path: 'stagiaire',
    canActivate: [AuthGuard],
    component: StagiaireComponent,
  },
  {
    path: 'testcalendar',
    canActivate: [AuthGuard],
    component: TestCalendarComponent,
  },
  {
    path: 'createstage',
    canActivate: [AuthGuard],
    component: CreateStageComponent,
  },
  {
    path: 'createpresence',
    canActivate: [AuthGuard],
    component: CreatePresenceComponent,
  },
  {
    path: 'presence',
    canActivate: [AuthGuard],
    component: PresenceComponent,
  },
    {
    path: 'createstagiaire',
    canActivate: [AuthGuard],
    component: CreateStagiaireComponent,
  },
   {
    path: 'updatestagiaire/:id',
    canActivate: [AuthGuard],
    component: UpdateStagiaireComponent,
  },
  {
    path: 'updatestage/:id',
    canActivate: [AuthGuard],
    component: UpdatestageComponent,
  },
  {
    path: 'cachechauffeur',
    canActivate: [AuthGuard],
    component: CacheChauffeurComponent,
  },
  {
    path: 'createcachechauffeur',
    canActivate: [AuthGuard],
    component: CreateCacheChauffeurComponent,
  },
  {
    path: 'updatecachechauffeur/:id',
    canActivate: [AuthGuard],
    component: UpdateCacheChauffeurComponent,
  },
  {
    path: 'detailcachechauffeur/:id',
    canActivate: [AuthGuard],
    component: DetailCacheChauffeurComponent,
  },
  {
    path: 'visitemedicale',
    canActivate: [AuthGuard],
    component: VisiteMedicaleComponent,
  },
  {
    path: 'createvisitemedicale',
    canActivate: [AuthGuard],
    component: CreateVisiteMedicaleComponent,
  },
  {
    path: 'createnewtraining',
    canActivate: [AuthGuard],
    component: CreatenewtrainingComponent,
  },
  {
    path: 'updatevisitemedicale/:id',
    canActivate: [AuthGuard],
    component: UpdateVisiteMedicaleComponent,
  },
  {
    path: 'wtest',
    canActivate: [AuthGuard],
    component: TestComponent,
  },
  {
    path: 'dashboardstage',
    canActivate: [AuthGuard],
    component: DashboardStageComponent,
      data: { role: 'ROLE_RESPOSABLLERHFORMATIONETSTAGE' }
  },
  {
    path: 'dashboardglobale',
    canActivate: [AuthGuard],
    component: DashboardGeneraleComponent,
    data: { role: 'ROLE_RESPOSABLLERHFORMATIONETSTAGE' }
  },
  {
    path: 'chatroom',
    canActivate: [AuthGuard],
    component: ChatroomComponent,
  },
  {
    path: 'dashf',
    canActivate: [AuthGuard],
    component: DashformationComponent,
  },
    {
    path: 'detaildemandeemploie/:id',
    canActivate: [AuthGuard],
    component: DetaildemandeEmploieComponent,
  },
   {
    path: 'dashboardvisite',
    canActivate: [AuthGuard],
    component: DashboardVisiteComponent,
  },
  {
    path: 'dashonestage',

    component: DashOneStageComponent,
  },
   {
    path: 'dashonerecrut',

    component: DashOneRecrutementComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
