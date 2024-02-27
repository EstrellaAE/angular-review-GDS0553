import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { RegisterComponent } from './componentes/register/register.component';
<<<<<<< HEAD
import { authGuard } from './guards/auth.guard';
=======
>>>>>>> 6aa91eeaef74d443e02809e86717e73bd334ec34

const routes: Routes = [
  {
  path: 'login',
  component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'home',
<<<<<<< HEAD
    component: HomeComponent,
    canActivate: [authGuard]
=======
    component: HomeComponent
>>>>>>> 6aa91eeaef74d443e02809e86717e73bd334ec34
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
