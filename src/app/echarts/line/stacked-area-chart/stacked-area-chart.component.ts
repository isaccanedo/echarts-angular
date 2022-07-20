import { Component, OnInit, OnDestroy } from '@angular/core';
import { EchartService } from 'src/app/common/service/echart.service';
import { Subscription } from 'rxjs';
import { EChartOption } from 'echarts';
import { StackedLineEchartmodel } from 'src/app/common/model/echart.model';

@Component({
  selector: 'app-stacked-area-chart',
  templateUrl: './stacked-area-chart.component.html',
  styleUrls: ['./stacked-area-chart.component.scss']
})
export class StackedAreaChartComponent implements OnInit, OnDestroy {

  _isDarkmode: boolean = false;
  _theme: string;
  _echartOption: EChartOption;
  subscription: Subscription;
  constructor(private echartService: EchartService) { }

  ngOnInit(): void {
    this.subscription = this.echartService.getStackedLineEchartData().subscribe(data => {
      this._initStackedLineEchart(data);
    })
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  _initStackedLineEchart(chartData: StackedLineEchartmodel[]) {
    this._theme = this._isDarkmode ? 'dark' : '';
    this._echartOption = {
      tooltip: {
        show: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: chartData[0].value.map(m => ({
          value: m.name
        }))
      },
      yAxis: [{
        type: 'value'
      }],
      series: chartData.map(m => ({
        name: m.name,
        type: 'line',
        stack: 'stack',
        areaStyle: {},
        data: m.value.map(m => ({
          value: m.value
        }))
      }))
    };
  }




}
