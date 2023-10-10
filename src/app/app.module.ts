import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeCompomentComponent } from './home-compoment/home-compoment.component';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
const sistemaRoutes:Routes=[
  {path:'',component:HomeCompomentComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeCompomentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, RouterModule.forRoot(sistemaRoutes),//indica las rutas del sistema


    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
