import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-bar-graphics',
  templateUrl: './bar-graphics.component.html',
  styleUrls: ['./bar-graphics.component.css']
})
export class BarGraphicsComponent implements OnInit {

  @Input() horizontal: boolean = false;
  
  @Input() barChartLabels: Label[] = [
    // '2015', '2016', '2017', '2018', '2019', '2020', '2021'
  ];

  @Input() barChartData: ChartDataSets[] = [
    // { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
    // { data: [48, 58, 60, 89, 26, 87, 50], label: 'Series C' }
  ];

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming. 
  };
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;



  constructor() { }

  ngOnInit(): void {
    if(this.horizontal === true){
      this.barChartType = 'horizontalBar'
    }
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData[0].data = [
      Math.round(Math.random() * 100),
      59,
      30,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40 ];

    this.barChartData[1].data = [
      Math.round(Math.random() * 100),
      49,
      80,
      (Math.random() * 100),
      96,
      (Math.random() * 100),
      54 ];

    this.barChartData[2].data = [
      Math.round(Math.random() * 100),
      79,
      20,
      (Math.random() * 100),
      26,
      (Math.random() * 100),
      84 ];
  }

}
