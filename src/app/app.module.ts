import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { BasicLineEchartsComponent } from './echarts/line/basic-line-echarts/basic-line-echarts.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { EchartService } from './common/service/echart.service';
import { SharedModule } from './common/module/shared.module';
import { LineComponent } from './echarts/line/line.component';
import { BasicAreaEchartsComponent } from './echarts/line/basic-area-echarts/basic-area-echarts.component';
import { SmoothedLineEchartsComponent } from './echarts/line/smoothed-line-echarts/smoothed-line-echarts.component';
import { StackedAreaChartComponent } from './echarts/line/stacked-area-chart/stacked-area-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    LineComponent,
    BasicLineEchartsComponent,
    BasicAreaEchartsComponent,
    SmoothedLineEchartsComponent,
    StackedAreaChartComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxEchartsModule,
    SharedModule
  ],
  providers: [EchartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
