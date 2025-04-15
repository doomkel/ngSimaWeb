import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from 'src/app/services/shared.service';

interface RowData {
  color: string;
  inputVal1: string;
  inputVal2: string;
  inputVal3: string;
  inputVal4: string;
  inputValTot: string;
}

@Component({
  selector: 'app-captura-cantidades-tc',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './captura-cantidades-tc.component.html',
  styleUrls: ['./captura-cantidades-tc.component.css']  
})

export class CapturaCantidadesTcComponent implements OnInit {
  constructor(private sharedService: SharedService) { }

  rows: RowData[] = [];  
  selectedColors: string[] = [];
  selectedTallaje: string = '';
  tallas: string[] =['CH','M','G','XG'];
  totalInputVal1: number = 0;
  totalInputVal2: number = 0;
  totalInputVal3: number = 0;
  totalInputVal4: number = 0;
  totalInputTot: number = 0;
   
  ngOnInit(): void {
    this.sharedService.currentColor.subscribe(color => {
      if (color) {
        this.selectedColors.push(color);        

        this.rows.push({
          color: color,
          inputVal1: '0',
          inputVal2: '0',
          inputVal3: '0',
          inputVal4: '0',
          inputValTot: '0'
        });        
      }
    });

    this.sharedService.currentTallaje.subscribe(tallaje => {
      if (tallaje) {
        this.selectedTallaje = tallaje;
        this.tallas = tallaje.split('-');
      }
    });
  }

  
  onKey(row: RowData) {
    const val1 = Number(row.inputVal1);
    const val2 = Number(row.inputVal2);
    const val3 = Number(row.inputVal3);
    const val4 = Number(row.inputVal4);

    const total = val1 + val2 + val3 + val4;
    row.inputValTot = total.toString();

    this.calculateTotalInput();
  }

  calculateTotalInput() {
    this.totalInputVal1 = this.rows.reduce((sum, row) => sum + Number(row.inputVal1), 0);
    this.totalInputVal2 = this.rows.reduce((sum, row) => sum + Number(row.inputVal2), 0);
    this.totalInputVal3 = this.rows.reduce((sum, row) => sum + Number(row.inputVal3), 0);
    this.totalInputVal4 = this.rows.reduce((sum, row) => sum + Number(row.inputVal4), 0);
    this.totalInputTot = this.rows.reduce((sum, row) => sum + Number(row.inputValTot), 0);
  }

 
}


