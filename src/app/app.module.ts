import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ViewContainerComponent } from './view-container/view-container.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import { ContactUsComponent } from './contact-us/contact-us.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { OurMissionComponent } from './our-mission/our-mission.component';
import {HttpClientModule} from "@angular/common/http";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { ServicesComponent } from './services/services.component';
import { CheckoutComponent } from './checkout/checkout.component';
import {NgxPayPalModule} from "ngx-paypal";

@NgModule({
  declarations: [
    ViewContainerComponent,
    HomeComponent,
    ContactUsComponent,
    OurMissionComponent,
    ServicesComponent,
    CheckoutComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatProgressBarModule,
        NgxPayPalModule
    ],
  providers: [],
  bootstrap: [ViewContainerComponent]
})
export class AppModule { }
