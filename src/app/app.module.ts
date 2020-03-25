import { NdbxSharedModule } from './ndbx-shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NxModalModule } from '@allianz/ngx-ndbx';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { DownloadComponent } from './components/download/download.component';
import { Form3Component } from './components/form3/form3.component';
import { Form4Component } from './components/form4/form4.component';

import { NordicsComponent } from './components/nordics/nordics.component';
import { FormCompanyComponent } from './components/nordics/form-company/form-company.component';
import { FormFinancialComponent } from './components/nordics/form-financial/form-financial.component';
import { FormContactComponent } from './components/nordics/form-contact/form-contact.component';
import { FormQuestionComponent } from './components/nordics/form-question/form-question.component';

import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';

import { AppRouteRoutingModule } from './app-route/app-route-routing.module';
import { GlobalVariables } from './enviroments';
@NgModule({
  declarations: [
    AppComponent,
    SubscribeComponent,
    DownloadComponent,
    Form3Component,
    Form4Component,
    NordicsComponent,
    FormCompanyComponent,
    FormFinancialComponent,
    FormContactComponent,
    FormQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRouteRoutingModule,
    NdbxSharedModule,
    NxModalModule.forRoot(),
    RecaptchaModule,
    RecaptchaFormsModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    GlobalVariables
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
