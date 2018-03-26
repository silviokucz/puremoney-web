import {HttpModule} from '@angular/http'
import {UserService} from './services/user.service'
import {AuthGuardService} from './services/auth-guard.service'
import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'
import {FormsModule} from '@angular/forms'
import {AppComponent} from './app.component'
import {AppRoutingModule} from './app-routing.module'
import {HomePageComponent} from './Pages/home-page/home-page.component'
import {NavBarComponent} from './UI/nav-bar/nav-bar.component'
import {MissionPageComponent} from './Pages/mission-page/mission-page.component'
import {HowItWorksPageComponent} from './Pages/how-it-works-page/how-it-works-page.component'
import {AboutPageComponent} from './Pages/about-page/about-page.component'
import {ContactPageComponent} from './Pages/contact-page/contact-page.component'
import {BuyPmtpageComponent} from './Pages/buy-pmtpage/buy-pmtpage.component'
import {FooterComponent} from './UI/footer/footer.component'
import {LoginPageComponent} from './Pages/login-page/login-page.component'
import {RegisterEvngelistPageComponent} from './Pages/register-evangelist-page/register-evangelist-page.component'
import {RegisterUserPageComponent} from './Pages/register-user-page/register-user-page.component';
import { ForgotPasswordComponent } from './Pages/forgot-password/forgot-password.component'


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
    RegisterUserPageComponent,
    ForgotPasswordComponent
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
export class AppModule {
}
