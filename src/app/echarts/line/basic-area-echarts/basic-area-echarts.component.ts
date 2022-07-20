import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { EchartService } from 'src/app/common/service/echart.service';
import { BasicEchartLineModel } from 'src/app/common/model/echart.model';
import { EChartOption } from 'echarts';

@Component({
  selector: 'app-basic-area-echarts',
  templateUrl: './basic-area-echarts.component.html',
  styleUrls: ['./basic-area-echarts.component.scss']
})
export class BasicAreaEchartsComponent implements OnInit, OnDestroy {

  _chartOption: EChartOption;
  subscription: Subscription;
  _isDarkMode: boolean = false;
  _theme: string;
  constructor(private echartSevrice: EchartService) { }

  ngOnInit(): void {
    this.subscription = this.echartSevrice.getbasicAreaEchartData().subscribe(data => {
      this._initBasicAreaEcharts(data);
    })
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private _initBasicAreaEcharts(chartData: BasicEchartLineModel[]) {

    this._theme = this._isDarkMode ? 'dark' : '';

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
        areaStyle: {}
      }]
    }
  }

}
