import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './admin/components/details/details.component';
import { SignupComponent } from './admin/components/signup/signup.component';
import { LoginComponent } from './admin/components/login/login.component';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthService } from './auth.service';

const routes: Routes = [
  {path:'details', component: DetailsComponent, canActivate: [AuthService] },
  {path:'login', component: LoginComponent },
  {path:'signup', component:SignupComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('access_token');
        },
        allowedDomains: ['http://localhost:8081'],
        disallowedRoutes: ['http://localhost:4200/login'],
      },
    }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
