import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientComponent } from './http-client/http-client.component';
import { ApplicationStartComponent } from './application-start/application-start.component';
import { MarkdownModule } from 'angular2-markdown';
import { RouterComponent } from './router/router.component';
import { TestComponent } from './test/test.component';

@NgModule({
  imports: [
    CommonModule,
    MarkdownModule.forRoot()
  ],
  declarations: [
    HttpClientComponent,
    ApplicationStartComponent,
    RouterComponent,
    TestComponent
  ]
})
export class ListModule { }
