import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CrudDocenteComponent } from './components/crud-docente/crud-docente.component';
import { ConsultaDocenteComponent } from './components/consulta-docente/consulta-docente.component';


const routes: Routes = [
  {path:"crudDocente", component:CrudDocenteComponent },
  {path:"consultaDocente", component:ConsultaDocenteComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
