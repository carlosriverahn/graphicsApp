import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphicsRoutingModule } from './graphics-routing.module';
import { BarsComponent } from './pages/bars/bars.component';
import { DonutsComponent } from './pages/donuts/donuts.component';
import { BarGraphicsComponent } from './components/bar-graphics/bar-graphics.component';
import { DoubleBarComponent } from './pages/double-bar/double-bar.component';
import { DonutHttpComponent } from './pages/donut-http/donut-http.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    BarsComponent,
    DonutsComponent,
    BarGraphicsComponent,
    DoubleBarComponent,
    DonutHttpComponent
  ],
  imports: [
    CommonModule,
    GraphicsRoutingModule,
    ChartsModule
  ]
})
export class GraphicsModule { }
