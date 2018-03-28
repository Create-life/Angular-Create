import { Routes } from '@angular/router';
import { RouterComponent } from './router/router.component';
import { HttpClientComponent } from './http-client/http-client.component';
import { ApplicationStartComponent } from './application-start/application-start.component';


export const ListRoutes: Routes = [
  {path: '', redirectTo: '/home/blog/start', pathMatch: 'full'},
  {path: 'start', component: ApplicationStartComponent},
  {path: 'httpClient', component: HttpClientComponent},
];
