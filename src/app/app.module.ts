import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeCompomentComponent } from './home-compoment/home-compoment.component';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { ArticulosComponent } from './articulos/articulos.component';
import { AsignarComponent } from './asignar/asignar.component';
import { OficinasComponent } from './oficinas/oficinas.component';
import { DesignadasComponent } from './designadas/designadas.component';
import { RegistroAsignarComponent } from './home-compoment/registro-asignar/registro-asignar.component';


const sistemaRoutes:Routes=[
  {path:'',component:HomeCompomentComponent},
  {path:'Articulos', component:ArticulosComponent},
  {path:'Asignacion', component:AsignarComponent},
  {path:'Oficinas', component:OficinasComponent},
  {path:'Designadas', component:DesignadasComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeCompomentComponent,
    ArticulosComponent,
    AsignarComponent,
    OficinasComponent,
    DesignadasComponent,
    RegistroAsignarComponent
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
