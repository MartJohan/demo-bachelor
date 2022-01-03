import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LoginGuardGuard } from './guards/login-guard.guard';
import { HomeComponent } from './pages/home.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path : 'home',
    component : HomeComponent,
    canActivate : [ LoginGuardGuard ]
  },
  {
    path : '**',
    component : HomeComponent,
    canActivate : [ LoginGuardGuard ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }