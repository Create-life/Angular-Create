import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './root/home/home.component';
import { RootRoutes } from './root/root.routing';
import { NotFoundComponent } from './root/not-found/not-found.component';


const appRoutes: Routes = [
  {path: '', redirectTo: '/home/blog', pathMatch: 'full'},
  ...RootRoutes,
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRouting {}
