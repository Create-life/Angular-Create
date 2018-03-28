import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CoreModule } from '../core/core.module';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [HomeComponent],
  declarations: [HomeComponent, NotFoundComponent]
})
export class RootModule { }
