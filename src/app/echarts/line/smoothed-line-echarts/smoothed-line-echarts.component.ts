import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { EchartService } from 'src/app/common/service/echart.service';
import { BasicEchartLineModel } from 'src/app/common/model/echart.model';
import { EChartOption } from 'echarts';

@Component({
  selector: 'app-smoothed-line-echarts',
  templateUrl: './smoothed-line-echarts.component.html',
  styleUrls: ['./smoothed-line-echarts.component.scss']
})
export class SmoothedLineEchartsComponent implements OnInit, OnDestroy{

  _chartOption: EChartOption;
  subscription: Subscription;
  _theme: string;
  _isDarkmode: boolean = false;
  constructor(private echartService: EchartService) { }

  ngOnInit(): void {
    this.subscription = this.echartService.getbasicSmoothedEchartData().subscribe(data => {
      this._initSmoothedEchart(data);
    });
  }

  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

  private _initSmoothedEchart(chartData: BasicEchartLineModel[]) {

    this._theme = this._isDarkmode ? 'dark' : '';

    this._chartOption = {

      tooltip: {
        show: true
      },
      xAxis: {
        type: 'category',
        data: chartData.map(m => ({
          value: m.name
        }))
      },
      yAxis: {
        type: 'value'
      },

      series: [{
        data: chartData.map(m => ({
          value: m.value
        })),
        type: 'line',
        smooth: true
      }]

    }
  }
}
