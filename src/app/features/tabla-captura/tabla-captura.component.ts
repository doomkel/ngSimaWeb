import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import { ColDef } from 'ag-grid-community'; // Column Definition Type Interface

@Component({
  selector: 'app-tabla-captura',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './tabla-captura.component.html',
  styleUrls: ['./tabla-captura.component.css']
})
export class TablaCapturaComponent {
  rowData = [
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ];

  colDefs: ColDef[] = [
    { field: "make", editable: true },
    { field: "model", editable: true },
    { field: "price", editable: true },
    { field: "electric", editable: true }
  ];
}
