import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';
import { GraphicsService } from '../../services/graphics.service';

@Component({
  selector: 'app-donut-http',
  templateUrl: './donut-http.component.html',
  styleUrls: ['./donut-http.component.css']
})
export class DonutHttpComponent implements OnInit {
  // Doughnut
  public doughnutChartLabels: Label[] = [
    // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales'
  ];

  public doughnutChartData: MultiDataSet = [
    // [350, 450, 100]
  ];

  public doughnutChartType: ChartType = 'doughnut';

  constructor(private graphicsService: GraphicsService) { }

  ngOnInit(): void {
    // this.graphicsService.getData().subscribe(data => {
    //   const labels: string[] = Object.keys( data );
    //   const values: number[] = Object.values( data );
      
    //   this.doughnutChartLabels = labels;
    //   this.doughnutChartData.push( values );
    
    // })
    
    this.graphicsService.getDataArrays().subscribe(({labels, values}) => {
      
        this.doughnutChartLabels = labels;
        this.doughnutChartData.push( values );
    })

  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }


}
