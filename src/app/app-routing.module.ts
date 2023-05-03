import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { DishComponent } from './backoffice/dish/dish.component';

const routes: Routes = [   
 { path: '', component: HomeComponent },
{ path: 'dishs', component: DishComponent },
{ path: 'dishs', component: DashboardComponent },
{ path: 'admin', loadChildren: () => import('./backoffice/backoffice.module').then(m => m.BackofficeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
