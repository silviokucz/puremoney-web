import {Component, OnInit} from '@angular/core'
import {UserService} from '../../services/user.service'
import {ActivatedRoute, Router} from '@angular/router'
import {Evangelist} from '../../../models/evangelist '
import {GeoAddress} from '../../../models/geoAddress'
import {GeoAddressGeoCode} from '../../../models/geoAddressGeoCode'

@Component({
  selector: 'app-register-page',
  templateUrl: './register-evangelist-page.component.html',
  styleUrls: ['./register-evangelist-page.component.css']
})
export class RegisterEvngelistPageComponent implements OnInit {

  evangelist: Evangelist
  loading = false
  localTokens = []


  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserService) {
    this.evangelist = new Evangelist()
    this.evangelist.geoAddress = new GeoAddress()
    this.evangelist.geoAddress.geoCode = new GeoAddressGeoCode()

    this.userService.getLocalTokens()
      .then((res: any) => {
        const list = JSON.parse(res._body)
        list.forEach(item => {
          this.localTokens.push(item)
        })
      })
  }

  ngOnInit() {
  }

  register() {
    this.loading = true
    if (this.evangelist.geoAddress.street2 === undefined) {
      this.evangelist.geoAddress.street2 = ''
    }
    if (this.evangelist.geoAddress.country === undefined) {
      this.evangelist.geoAddress.country = ''
    }

    this.userService.createEvangelist(this.evangelist)
      .then(
        data => {

          this.router.navigate(['/'])
        },
        error => {
          alert((error.statusText || error) + error)
          this.loading = false
        })
  }

}
