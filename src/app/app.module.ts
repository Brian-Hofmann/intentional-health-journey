import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ViewContainerComponent } from './view-container/view-container.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    ViewContainerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ViewContainerComponent]
})
export class AppModule { }
