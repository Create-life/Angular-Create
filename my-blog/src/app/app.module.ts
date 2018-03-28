import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RootModule } from './root/root.module';
import { CoreModule } from './core/core.module';
import { AppRouting } from './app.routing';
import { BlogModule } from './blog/blog.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RootModule,
    CoreModule,
    AppRouting,
    BlogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
