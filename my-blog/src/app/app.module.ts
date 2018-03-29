import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRouting } from './app.routing';
import { BlogModule } from './blog/blog.module';
import { MarkdownModule } from 'angular2-markdown';
import { NotFoundComponent } from './not-found/not-found.component';
import { SydModule } from './syd/syd.module';
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    MarkdownModule.forRoot(),
    BrowserModule,
    CoreModule,
    AppRouting,
    BlogModule,
    SydModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
