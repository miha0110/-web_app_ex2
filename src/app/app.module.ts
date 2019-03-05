import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './/app-routing.module';
import { DateAndTimeComponent } from './date-and-time/date-and-time.component';
import { PatientDataComponent } from './patient-data/patient-data.component';
import { NewPatientComponent } from './new-patient/new-patient.component';
import { SearchPatientComponent } from './search-patient/search-patient.component';
import { HelloDrComponent } from './hello-dr/hello-dr.component';
import { LeftSidebarComponent } from './patient-data/left-sidebar/left-sidebar.component';
import { InactiveComponent } from './inactive/inactive.component';
import { ForgotPassComponent } from './login/forgot-pass/forgot-pass.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { MainComponent } from './patient-data/main/main.component';
import { ReportComponent } from './patient-data/report/report.component';
import { QuestioneerComponent } from './patient-data/questioneer/questioneer.component';
import { MessagesComponent } from './patient-data/messages/messages.component';
import { DiaryComponent } from './patient-data/diary/diary.component';
import { ConclusionComponent } from './patient-data/conclusion/conclusion.component';
import { IMaskModule } from 'angular-imask';
import { AdminComponent } from './admin/admin.component';
import { DoctorsComponent } from './admin/doctors/doctors.component';
import { IntakeAmountComponent } from './admin/intake-amount/intake-amount.component';
import { IntakeTypeComponent } from './admin/intake-type/intake-type.component';
import { WhenListComponent } from './admin/when-list/when-list.component';
import { QuestionsComponent } from './admin/questions/questions.component';
import { AuditComponent } from './admin/audit/audit.component';
import { UsersComponent } from './admin/users/users.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    DateAndTimeComponent,
    PatientDataComponent,
    NewPatientComponent,
    SearchPatientComponent,
    HelloDrComponent,
    LeftSidebarComponent,
    InactiveComponent,
    ForgotPassComponent,
    EditPatientComponent,
    MainComponent,
    ReportComponent,
    QuestioneerComponent,
    MessagesComponent,
    DiaryComponent,
    ConclusionComponent,
    AdminComponent,
    DoctorsComponent,
    IntakeAmountComponent,
    IntakeTypeComponent,
    WhenListComponent,
    QuestionsComponent,
    AuditComponent,
    UsersComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    IMaskModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
