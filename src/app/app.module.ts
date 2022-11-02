import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { AdminComponent } from './admin/admin.component';
import { FofficerComponent } from './fofficer/fofficer.component';
import { CustomersComponent } from './customers/customers.component';
import { LoanentryComponent } from './customers/loanentry/loanentry.component';
import { LoanListComponent } from './customers/loan-list/loan-list.component';
import { FeedbackquestionEntryComponent } from './customers/feedbackquestion-entry/feedbackquestion-entry.component';
import { FeedbackquestionListComponent } from './customers/feedbackquestion-list/feedbackquestion-list.component';
import { HelpEntryComponent } from './customers/help-entry/help-entry.component';
import { HelpListComponent } from './customers/help-list/help-list.component';
import { UpdateloanverificationEntryComponent } from './fofficer/updateloanverification-entry/updateloanverification-entry.component';
import { UpdateloanverificationListComponent } from './fofficer/updateloanverification-list/updateloanverification-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthService } from './shared/auth.service';
import { UsersService } from './shared/users.service';
import { OfficerListComponent } from './fofficer/officer-list/officer-list.component';
import { AssigntaskEntryComponent } from './admin/assigntask-entry/assigntask-entry.component';
import { FeedbackqueslistComponent } from './admin/feedbackqueslist/feedbackqueslist.component';
import { FeedbackComponent } from './admin/feedback/feedback.component';
import { AdminprofileComponent } from './admin/adminprofile/adminprofile.component';
import { CustomerprofileComponent } from './customers/customerprofile/customerprofile.component';
import { AskQuestionComponent } from './customers/ask-question/ask-question.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserListComponent,
    AdminComponent,
    FofficerComponent,
    CustomersComponent,
    LoanentryComponent,
    LoanListComponent,
    FeedbackquestionEntryComponent,
    FeedbackquestionListComponent,
    HelpEntryComponent,
    HelpListComponent,
    UpdateloanverificationEntryComponent,
    UpdateloanverificationListComponent,
    LoginComponent,
    PagenotfoundComponent,
    OfficerListComponent,
    AssigntaskEntryComponent,
    FeedbackqueslistComponent,
    FeedbackComponent,
    AdminprofileComponent,
    CustomerprofileComponent,
    AskQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    NgxPaginationModule,
    Ng2SearchPipeModule,
    NgbModule
  ],
  providers: [UsersService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
