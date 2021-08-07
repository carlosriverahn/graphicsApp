import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-double-bar',
  templateUrl: './double-bar.component.html',
  styleUrls: ['./double-bar.component.css']
})
export class DoubleBarComponent {
  proveedoresData: ChartDataSets[] = [
    { data: [ 100,200,300,400,500 ], label: 'Vendedor A' },
    { data: [ 50,250,30, 450,200 ], label: 'Vendedor B' },
  ];
  
  proveedoresLabels: string[] = ['2021', '2022','2023','2024','2025'];
  
  productoData: ChartDataSets[] = [
    { data: [ 200, 300, 400, 300, 100 ], label: 'Carros', backgroundColor: 'blue' },
  ];
}
