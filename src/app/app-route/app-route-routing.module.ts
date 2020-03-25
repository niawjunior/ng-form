import { NordicsComponent } from './../components/nordics/nordics.component';
import { Form4Component } from './../components/form4/form4.component';
import { Form3Component } from './../components/form3/form3.component';
import { SubscribeComponent } from '../components/subscribe/subscribe.component';
import { DownloadComponent } from './../components/download/download.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'subscribe',
    component: SubscribeComponent
  },
  {
    path: 'download',
    component: DownloadComponent
  },
  {
    path: 'form3',
    component: Form3Component
  },
  {
    path: 'form4',
    component: Form4Component
  },
  {
    path: 'nordics',
    component: NordicsComponent
  },
  {
    path: '',
    component: SubscribeComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouteRoutingModule {}
