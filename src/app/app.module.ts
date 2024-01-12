import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './admin/components/details/details.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './admin/components/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './nav/navigation/navigation.component';
import { LoginComponent } from './admin/components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    SignupComponent,
    NavigationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
