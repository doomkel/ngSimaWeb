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
  templateUrl: './captura-cantidades-tc.component.html',
  styleUrls: ['./captura-cantidades-tc.component.css'],
  imports: [FormsModule, CommonModule]
})

export class CapturaCantidadesTcComponent implements OnInit {
  constructor(private sharedService: SharedService) { }

  rows: RowData[] = [];

  selectedColors: string[] = [];
  

  onKey(row: RowData) {
    const val1 = Number(row.inputVal1);
    const val2 = Number(row.inputVal2);
    const val3 = Number(row.inputVal3);
    const val4 = Number(row.inputVal4);

    const total = val1 + val2 + val3 + val4;
    row.inputValTot = total.toString();

  }

  ngOnInit(): void {
    this.sharedService.currentColor.subscribe(color => {
      if (color) {
        this.selectedColors.push(color);
        console.log(this.selectedColors);

        this.rows.push({
          color: color,
          inputVal1: '0',
          inputVal2: '0',
          inputVal3: '0',
          inputVal4: '0',
          inputValTot: '0'
        });

        console.log(this.rows);
      }
    });
  }

 
}


