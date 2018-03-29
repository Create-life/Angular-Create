import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RootModule } from './root/root.module';
import { CoreModule } from './core/core.module';
import { AppRouting } from './app.routing';
import { BlogModule } from './blog/blog.module';
import { SydModule } from './syd/syd.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RootModule,
    CoreModule,
    AppRouting,
    BlogModule,
    SydModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
