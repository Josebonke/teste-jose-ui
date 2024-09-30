import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [

  {path:'',component:LoginComponent, pathMatch: 'full' },
  {path:'Login',component:LoginComponent},
  {path:'Home',component : HomePageComponent}
];

