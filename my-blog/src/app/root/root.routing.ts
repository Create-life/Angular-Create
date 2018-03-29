import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogRoutes } from '../blog/blog.routing';
import { SydComponent } from '../syd/syd/syd.component';



export const RootRoutes: Routes = [
  {path: 'home', component: HomeComponent, children: [
    ...BlogRoutes,
    {path: 'syd', component: SydComponent}
  ]}
];
