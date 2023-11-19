import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-consulta-docente',
  templateUrl: './consulta-docente.component.html',
  styleUrls: ['./consulta-docente.component.css']
})
export class ConsultaDocenteComponent {
//Grila
dataSource:any;

//Clase para la paginacion
@ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

//Cabecera
displayedColumns = ["idDocente","nombre","dni","fecha","hora","estado","ubigeo"];

}
