import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { BasicEchartLineModel, StackedLineEchartmodel } from '../model/echart.model';
@Injectable()
export class EchartService {
  constructor(private httpClient: HttpClient) { }

  getbasicLineEchartData() :Observable<BasicEchartLineModel[]>{
    return this.httpClient.get<BasicEchartLineModel[]>('assets/echart/basic-line-chart-data.json');
  }

  getbasicAreaEchartData() :Observable<BasicEchartLineModel[]>{
    return this.httpClient.get<BasicEchartLineModel[]>('assets/echart/basic-area-chart-data.json');
  }

  getbasicSmoothedEchartData() :Observable<BasicEchartLineModel[]>{
    return this.httpClient.get<BasicEchartLineModel[]>('assets/echart/basic-smoothed-line-chart-data.json');
  }

  getStackedLineEchartData() :Observable<StackedLineEchartmodel[]>{
    return this.httpClient.get<StackedLineEchartmodel[]>('assets/echart/stacked-area-chart-data.json');
  }
}
