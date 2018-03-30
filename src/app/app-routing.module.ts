import {LoginPageComponent} from './Pages/login-page/login-page.component'
import {AuthGuardService} from './services/auth-guard.service'
import {BuyPmtpageComponent} from './Pages/buy-pmtpage/buy-pmtpage.component'
import {ContactPageComponent} from './Pages/contact-page/contact-page.component'
import {AboutPageComponent} from './Pages/about-page/about-page.component'
import {HowItWorksPageComponent} from './Pages/how-it-works-page/how-it-works-page.component'
import {MissionPageComponent} from './Pages/mission-page/mission-page.component'
import {HomePageComponent} from './Pages/home-page/home-page.component'
import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {RegisterEvngelistPageComponent} from './Pages/register-evangelist-page/register-evangelist-page.component'
import {RegisterUserPageComponent} from './Pages/register-user-page/register-user-page.component'
import {ForgotPasswordComponent} from './Pages/forgot-password/forgot-password.component'
import {ChangePasswordComponent} from './Pages/change-password/change-password.component'
import {EvangelistHomePageComponent} from './Pages/evangelist-home-page/evangelist-home-page.component'


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '', component: HomePageComponent
      }, {
        path: 'mission', component: MissionPageComponent
      }, {
        path: 'how-it-works', component: HowItWorksPageComponent
      }, {
        path: 'about', component: AboutPageComponent
      }, {
        path: 'contact', component: ContactPageComponent
      }, {
        path: 'pmt', component: BuyPmtpageComponent, canActivate: [AuthGuardService]
      },
    ]
  },
  {
    path: 'login', component: LoginPageComponent
  },
  {
    path: 'forgot-password', component: ForgotPasswordComponent
  },
  {
    path: 'change-password', component: ChangePasswordComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'register-user', component: RegisterUserPageComponent
  },
  {
    path: 'register-evangelist', component: RegisterEvngelistPageComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'evangelist-home-page', component: EvangelistHomePageComponent, canActivate: [AuthGuardService]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
