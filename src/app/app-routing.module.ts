import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminprofileComponent } from './admin/adminprofile/adminprofile.component';
import { AssigntaskEntryComponent } from './admin/assigntask-entry/assigntask-entry.component';
import { FeedbackComponent } from './admin/feedback/feedback.component';
import { FeedbackqueslistComponent } from './admin/feedbackqueslist/feedbackqueslist.component';
import { CustomersComponent } from './customers/customers.component';
import { FeedbackquestionListComponent } from './customers/feedbackquestion-list/feedbackquestion-list.component';
import { HelpListComponent } from './customers/help-list/help-list.component';
import { LoanListComponent } from './customers/loan-list/loan-list.component';
import { AskQuestionComponent } from './customers/ask-question/ask-question.component';
import { CustomerprofileComponent } from './customers/customerprofile/customerprofile.component';
import { FofficerComponent } from './fofficer/fofficer.component';
import { OfficerListComponent } from './fofficer/officer-list/officer-list.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
import { LoanentryComponent } from './customers/loanentry/loanentry.component';
import { FeedbackquestionEntryComponent } from './customers/feedbackquestion-entry/feedbackquestion-entry.component';

const routes: Routes = [
  {path: '', redirectTo:'/login', pathMatch: 'full'}, //full Definition of URL
  //{path: 'home', component: HomeComponent},

  //admin
  {path: 'admin', component: AdminComponent},
  {path: 'loanlist', component: LoanListComponent},
  {path: 'adminprofile', component: AdminprofileComponent},
  {path: 'adminfdquestionlist', component: FeedbackqueslistComponent},
  {path: 'feedback', component: FeedbackComponent},
  {path: 'assign', component: AssigntaskEntryComponent},
  {path: 'feedbackquestion', component: FeedbackquestionListComponent},
  {path: 'helplist', component: HelpListComponent},

  //fieldofficer
  {path: 'fofficer', component: FofficerComponent},
  {path: 'officerlist', component: OfficerListComponent},

  //customer
  {path: 'customer', component: CustomersComponent},
  {path: 'customerprofile', component: CustomerprofileComponent},
  {path: 'loanentry', component: LoanentryComponent},
  {path: 'ask-question', component: AskQuestionComponent},
  {path: 'feedback-question', component: FeedbackquestionEntryComponent},
  

  {path: 'login', component: LoginComponent},


  {path: 'userlist', component: UserListComponent},
  {path: 'user', component: UserComponent},
  {path: 'users', component: UsersComponent},
  {path: '**', component: PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
