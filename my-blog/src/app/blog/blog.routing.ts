import { Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ListRoutes } from '../list/list.routing';


export const BlogRoutes: Routes = [
  {path: '', redirectTo: '/home/blog', pathMatch: 'full'},
  {path: 'blog', component: BlogComponent, children: [
    ...ListRoutes,
  ]}
];
