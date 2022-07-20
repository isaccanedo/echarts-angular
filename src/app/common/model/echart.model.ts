export interface BasicEchartLineModel {
  name: string;
  value: number;
}

export interface EchartsTypeModel {
  name: string;
  code: string;
}


export interface StackedLineEchartmodel{
  name : string ;
  value : BasicEchartLineModel[];
}
