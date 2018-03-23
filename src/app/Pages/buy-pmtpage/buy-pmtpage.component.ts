import {Component, OnInit} from '@angular/core'
import {Evangelist} from '../../../models/evangelist '
import {GeoAddress} from '../../../models/geoAddress'
import {GeoAddressGeoCode} from '../../../models/geoAddressGeoCode'
import {UserService} from '../../services/user.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-buy-pmtpage',
  templateUrl: './buy-pmtpage.component.html',
  styleUrls: ['./buy-pmtpage.component.css']
})
export class BuyPmtpageComponent implements OnInit {

  evangelist: Evangelist

  constructor(private router: Router,
              private userService: UserService) {
    this.evangelist = new Evangelist()
    this.evangelist.geoAddress = new GeoAddress()
    this.evangelist.geoAddress.geoCode = new GeoAddressGeoCode()
  }

  ngOnInit() {
    if (!this.userService.user.evangelistId || this.userService.user.evangelistId === 0) {
      this.router.navigate(['/register-evangelist'])
    }
  }

}
