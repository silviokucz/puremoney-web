import {Component, ElementRef, OnInit, ViewChild} from '@angular/core'


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @ViewChild('mission') missionElement: ElementRef
  @ViewChild('howItWorks') howItWorksElement: ElementRef
  @ViewChild('about') aboutElement: ElementRef
  @ViewChild('contact') contactElement: ElementRef
  @ViewChild('pmt') pmtElement: ElementRef

  constructor() {
  }

  ngOnInit() {
    const url: string = window.location.href

    if (url.indexOf('mission') !== -1) {
      this.missionElement.nativeElement.style = 'border-bottom: 2px solid #000;'
    } else if (url.indexOf('how-it-works') !== -1) {
      this.howItWorksElement.nativeElement.style = 'border-bottom: 2px solid #000;'
    } else if (url.indexOf('about') !== -1) {
      this.aboutElement.nativeElement.style = 'border-bottom: 2px solid #000;'
    } else if (url.indexOf('contact') !== -1) {
      this.contactElement.nativeElement.style = 'border-bottom: 2px solid #000;'
    } else if (url.indexOf('pmt') !== -1) {
      this.pmtElement.nativeElement.style = 'border-bottom: 2px solid #000;'
    }

  }


}
