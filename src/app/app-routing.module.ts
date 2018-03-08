import { BuyPmtpageComponent } from './buy-pmtpage/buy-pmtpage.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { HowItWorksPageComponent } from './how-it-works-page/how-it-works-page.component';
import { MissionPageComponent } from './mission-page/mission-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppComponent } from './app.component';
import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '', component: HomePageComponent
      },    {
        path: 'mission', component: MissionPageComponent
      },    {
        path: 'how-it-works', component: HowItWorksPageComponent
      },    {
        path: 'about', component: AboutPageComponent
      },    {
        path: 'contact', component: ContactPageComponent
      },    {
        path: 'pmt', component: BuyPmtpageComponent
      },
  ]
  },
  {
    path: '', component:AppComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}