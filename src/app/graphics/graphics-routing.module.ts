import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarsComponent } from './pages/bars/bars.component';
import { DonutsComponent } from './pages/donuts/donuts.component';
import { DoubleBarComponent } from './pages/double-bar/double-bar.component';
import { DonutHttpComponent } from './pages/donut-http/donut-http.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'bars', component: BarsComponent },
      { path: 'double-bar', component: DoubleBarComponent },
      { path: 'donuts', component: DonutsComponent },
      { path: 'donuts-http', component: DonutHttpComponent },
      { path: '**', redirectTo: 'bars' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GraphicsRoutingModule {}
