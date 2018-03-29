import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { BlogRoutes } from './blog/blog.routing';
import { SydRoutes } from './syd/syd.routing';


const appRoutes: Routes = [
  {path: '', redirectTo: '/blog/start', pathMatch: 'full'},
  ...BlogRoutes,
  ...SydRoutes,
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRouting {}
