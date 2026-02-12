import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedService } from 'src/app/services/shared.service';
import { ColorService } from 'src/app/services/color.service';
import { Color } from 'src/app/models/color.model';



@Component({
  selector: 'app-captura-colores',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './captura-colores.component.html',
  styleUrls: ['./captura-colores.component.css']
})

export class CapturaColoresComponent implements OnInit {
  colores: Color[] = [];
  selectedColor: string = '';

  constructor(private colorService: ColorService, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.colorService.getColores().subscribe(
      (data: Color[]) => {
        this.colores = data;
      },
      (error) => {
        console.error('HTTP error:', error);
      }
    );
  }

  onColorChange(event: any) {
    this.selectedColor = event.target.value;    
  }

  onAddClick() {
    const selectedColorData = this.colores.find(color => color.color === this.selectedColor);

    if (!selectedColorData) {
      return;
    }

    this.sharedService.changeColor({
      color: selectedColorData.color,
      tailwindColor: selectedColorData.tailwindColor
    });
  }
}
