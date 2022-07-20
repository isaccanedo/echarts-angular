import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    NgxWebstorageModule.forRoot({ prefix: 'ECHARTS|' })
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    NgxWebstorageModule
  ]
})
export class SharedModule { }
