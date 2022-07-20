import { Component } from '@angular/core';
import { EchartsTypeModel } from 'src/app/common/model/echart.model';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html'
})
export class LineComponent {
  selectedEchartsType: string = 'SELECT';
  echartsTypeList: EchartsTypeModel[] = [
    {
      name: 'Select',
      code: 'SELECT'
    },
    {
      name: 'Basic Line Echart',
      code: 'BASIC_LINE_ECHART'
    },
    {
      name: 'Basic Area Echart',
      code: 'BASIC_AREA_ECHART'
    },
    {
      name: 'Smoothed Line Echart',
      code: 'SMOOTHED_LINE_ECHART'
    },
    {
      name: 'Stacked area Echart',
      code: 'STACKED_AREA_ECHART'
    }
  ];
}
