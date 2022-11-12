import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { ApiService } from './api.service';
import { AppRoutingModule } from './app-routing.module';

import { NavbarComponent } from './navbar/navbar.component';
import { TrackingComponent } from './tracking/tracking.component';
import { TrackComponent } from './track/track.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ShowItemComponent } from './show-item/show-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TrackingComponent,
    TrackComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ShowItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ApiService, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
