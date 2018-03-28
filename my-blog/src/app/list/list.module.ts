import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterComponent } from './router/router.component';
import { HttpClientComponent } from './http-client/http-client.component';
import { ApplicationStartComponent } from './application-start/application-start.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RouterComponent,
    HttpClientComponent,
    ApplicationStartComponent
  ],
  exports: [
    RouterComponent
  ]
})
export class ListModule { }
