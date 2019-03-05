import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanActivate, RouterModule, Router, Routes } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from "./login/login.component";
import { NewPatientComponent } from "./new-patient/new-patient.component";
import { PatientDataComponent } from "./patient-data/patient-data.component";
import { SearchPatientComponent } from "./search-patient/search-patient.component";
import { InactiveComponent } from './inactive/inactive.component';
import { LeftSidebarComponent } from './patient-data/left-sidebar/left-sidebar.component';
import { ForgotPassComponent } from "./login/forgot-pass/forgot-pass.component";
import { EditPatientComponent } from "./edit-patient/edit-patient.component";
import { ConclusionComponent } from "./patient-data/conclusion/conclusion.component";
import { DiaryComponent } from "./patient-data/diary/diary.component";
import { MainComponent } from "./patient-data/main/main.component";
import { MessagesComponent } from "./patient-data/messages/messages.component";
import { QuestioneerComponent } from "./patient-data/questioneer/questioneer.component";
import { ReportComponent } from "./patient-data/report/report.component";
import { AdminComponent } from './admin/admin.component';
import { DoctorsComponent } from './admin/doctors/doctors.component';
import { IntakeAmountComponent } from './admin/intake-amount/intake-amount.component';
import { IntakeTypeComponent } from './admin/intake-type/intake-type.component';
import { WhenListComponent } from './admin/when-list/when-list.component';
import { QuestionsComponent } from './admin/questions/questions.component';
import { AuditComponent } from './admin/audit/audit.component';
import { UsersComponent } from './admin/users/users.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent}, 

  { path: 'admin', component: AdminComponent, children:[
    {path:'doctors', component: DoctorsComponent},
    {path: 'intakeAmount', component: IntakeAmountComponent},
    {path: 'intakeType', component: IntakeTypeComponent},
    {path: 'whenList', component: WhenListComponent},
    {path: 'questions', component: QuestionsComponent},
    {path: 'audit', component: AuditComponent},
    {path: 'users', component: UsersComponent},
  ]},
  
  { path: 'navbar', component: NavbarComponent, children:[
          {path: 'inactive', component: InactiveComponent},
          {path: 'newPatient', component: NewPatientComponent},
          {path: 'patientData', component: PatientDataComponent},
          {path: 'sidebar', component: LeftSidebarComponent, children:[
            {path: 'conclusion', component: ConclusionComponent},
            {path: 'diary', component: DiaryComponent},
            {path: 'main', component: MainComponent},
            {path: 'messages', component: MessagesComponent},
            {path: 'questioneer', component: QuestioneerComponent},
            {path: 'report', component: ReportComponent},
          ]},
          {path: 'search', component: SearchPatientComponent},
          { path: 'editPatient', component: EditPatientComponent},
  ]},

     { path: 'login', component: LoginComponent },
     { path: "forgot", component: ForgotPassComponent},
 /*  { path: 'logout', component: LogoutComponent },
 */
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ],
  providers: [
    
  ]
})
export class AppRoutingModule { }

