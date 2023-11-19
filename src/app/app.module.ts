import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudDocenteComponent } from './components/crud-docente/crud-docente.component';
import { AppMaterialModule } from './app.material.module';
import { CrudDocenteAddComponent } from './components/crud-docente-add/crud-docente-add.component';
import { CrudDocenteUpdateComponent } from './components/crud-docente-update/crud-docente-update.component';
import { ConsultaDocenteComponent } from './components/consulta-docente/consulta-docente.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudDocenteComponent,
    CrudDocenteAddComponent,
    CrudDocenteUpdateComponent,
    ConsultaDocenteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
