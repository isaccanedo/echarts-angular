import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicLineEchartsComponent } from './basic-line-echarts.component';

describe('BasicLineEchartsComponent', () => {
  let component: BasicLineEchartsComponent;
  let fixture: ComponentFixture<BasicLineEchartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicLineEchartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicLineEchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
