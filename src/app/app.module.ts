import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APIService } from './service/APIService';
import { HeaderComponent } from './header/header.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { NumberCardComponent } from './number-card/number-card.component';
import { PieGridComponent } from './pie-grid/pie-grid.component';
import { TestComponent } from './home/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    HeaderComponent,
    BarChartComponent,
    PieChartComponent,
    NumberCardComponent,
    PieGridComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
