import { Routes } from '@angular/router';
import { ApplicationStartComponent } from './application-start/application-start.component';
import { HttpClientComponent } from './http-client/http-client.component';
import { TestComponent } from './test/test.component';
import { RouterComponent } from './router/router.component';


export const ListRoutes: Routes = [
  {path: '', redirectTo: '/blog/start', pathMatch: 'full'},
  {path: 'start', component: ApplicationStartComponent},
  {path: 'httpClient', component: HttpClientComponent},
  {path: 'router', component: RouterComponent},
  {path: 'test', component: TestComponent}
];
