import {Component, OnInit} from '@angular/core'
import {UserService} from '../../services/user.service'
import {ActivatedRoute, Router} from '@angular/router'
import {Evangelist} from '../../../models/evangelist '
import {GeoAddress} from '../../../models/geoAddress'
import {GeoAddressGeoCode} from '../../../models/geoAddressGeoCode'

declare var web3: any

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

    if (!web3 || !web3.currentProvider.isMetaMask) {
      alert('you must install the Metamask browser extension to continue')
    }


  }

  register() {
    const defaultAccount = web3.eth.defaultAccount
    if (!defaultAccount) {
      alert('Please login to Metamask and/or create an account to continue')
      return false
    }

    this.loading = true

    this.evangelist.ethAddress = defaultAccount

    if (this.evangelist.geoAddress.street2 === undefined) {
      this.evangelist.geoAddress.street2 = ''
    }
    if (this.evangelist.geoAddress.country === undefined) {
      this.evangelist.geoAddress.country = ''
    }

    this.userService.createEvangelist(this.evangelist)
      .then(
        data => {
          this.loading = false

          if (!data) {
            alert('There was  problem, please check data')
          } else {
            this.router.navigate(['/'])
          }

          return false

        },
        error => {
          alert((error.statusText || error) + error)
          this.loading = false
        })
      .catch(error => {
        alert((error.statusText || error) + error)
        this.loading = false
      })
  }

}
