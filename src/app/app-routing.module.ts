import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {OurMissionComponent} from "./our-mission/our-mission.component";
import {ServicesComponent} from "./services/services.component";
import {CheckoutComponent} from "./checkout/checkout.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'our-mission',
    component: OurMissionComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
