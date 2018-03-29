import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SydComponent } from './syd/syd.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [SydComponent]
})
export class SydModule { }
