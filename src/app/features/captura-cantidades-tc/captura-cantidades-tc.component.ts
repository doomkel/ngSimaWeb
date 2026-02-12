import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from 'src/app/services/shared.service';

interface RowData {
  color: string;
  tailwindColor: string;
  inputVal1: string;
  inputVal2: string;
  inputVal3: string;
  inputVal4: string;
  inputVal5: string;
  inputVal6: string;
  inputVal7: string;
  inputVal8: string;
  inputVal9: string;
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
  totalInputVal5: number = 0;
  totalInputVal6: number = 0;
  totalInputVal7: number = 0;
  totalInputVal8: number = 0;
  totalInputVal9: number = 0;
  totalInputTot: number = 0;
   
  ngOnInit(): void {
    this.sharedService.currentColor.subscribe(selectedColor => {
      if (selectedColor) {
        this.selectedColors.push(selectedColor.color);

        this.rows.push({
          color: selectedColor.color,
          tailwindColor: selectedColor.tailwindColor,
          inputVal1: '0',
          inputVal2: '0',
          inputVal3: '0',
          inputVal4: '0',
          inputVal5: '0',
          inputVal6: '0',
          inputVal7: '0',
          inputVal8: '0',
          inputVal9: '0',
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
    const val5 = Number(row.inputVal5);
    const val6 = Number(row.inputVal6);
    const val7 = Number(row.inputVal7);
    const val8 = Number(row.inputVal8);
    const val9 = Number(row.inputVal9);

    const total = val1 + val2 + val3 + val4 + val5 + val6 + val7 + val8 + val9;
    row.inputValTot = total.toString();

    this.calculateTotalInput();
  }

  calculateTotalInput() {
    this.totalInputVal1 = this.rows.reduce((sum, row) => sum + Number(row.inputVal1), 0);
    this.totalInputVal2 = this.rows.reduce((sum, row) => sum + Number(row.inputVal2), 0);
    this.totalInputVal3 = this.rows.reduce((sum, row) => sum + Number(row.inputVal3), 0);
    this.totalInputVal4 = this.rows.reduce((sum, row) => sum + Number(row.inputVal4), 0);
    this.totalInputVal5 = this.rows.reduce((sum, row) => sum + Number(row.inputVal5), 0);
    this.totalInputVal6 = this.rows.reduce((sum, row) => sum + Number(row.inputVal6), 0);
    this.totalInputVal7 = this.rows.reduce((sum, row) => sum + Number(row.inputVal7), 0);
    this.totalInputVal8 = this.rows.reduce((sum, row) => sum + Number(row.inputVal8), 0);
    this.totalInputVal9 = this.rows.reduce((sum, row) => sum + Number(row.inputVal9), 0);
    this.totalInputTot = this.rows.reduce((sum, row) => sum + Number(row.inputValTot), 0);
  }

  getColorBadgeClass(row: RowData): string {
    if (!row.tailwindColor) {
      return 'bg-red-500';
    }

    return row.tailwindColor.startsWith('bg-')
      ? row.tailwindColor
      : `bg-${row.tailwindColor}`;
  }

 
}


