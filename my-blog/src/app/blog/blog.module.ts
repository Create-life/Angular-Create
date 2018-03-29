import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog/blog.component';
import { CoreModule } from '../core/core.module';
import { ListModule } from './list/list.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    ListModule
  ],
  declarations: [
    BlogComponent,
  ]
})
export class BlogModule { }
