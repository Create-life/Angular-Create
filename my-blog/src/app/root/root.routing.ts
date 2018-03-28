import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogRoutes } from '../blog/blog.routing';



export const RootRoutes: Routes = [
  {path: 'home', component: HomeComponent, children: [
    ...BlogRoutes
  ]}
];
