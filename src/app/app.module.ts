import { Http, HttpModule } from '@angular/http';
import { UserService } from './services/user.service';
import { AuthGuardService } from './services/auth-guard.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MissionPageComponent } from './mission-page/mission-page.component';
import { HowItWorksPageComponent } from './how-it-works-page/how-it-works-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { BuyPmtpageComponent } from './buy-pmtpage/buy-pmtpage.component';
import { FooterComponent } from './footer/footer.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterEvngelistPageComponent } from './register-evangelist-page/register-evangelist-page.component';
import { RegisterUserPageComponent } from './register-user-page/register-user-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    MissionPageComponent,
    HowItWorksPageComponent,
    AboutPageComponent,
    ContactPageComponent,
    BuyPmtpageComponent,
    FooterComponent,
    LoginPageComponent,
    RegisterEvngelistPageComponent,
    RegisterUserPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    AuthGuardService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
