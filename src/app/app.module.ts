import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MissionPageComponent } from './mission-page/mission-page.component';
import { HowItWorksPageComponent } from './how-it-works-page/how-it-works-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { BuyPmtpageComponent } from './buy-pmtpage/buy-pmtpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    MissionPageComponent,
    HowItWorksPageComponent,
    AboutPageComponent,
    ContactPageComponent,
    BuyPmtpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
