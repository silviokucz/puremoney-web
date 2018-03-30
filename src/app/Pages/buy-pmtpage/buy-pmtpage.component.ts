import {Component, OnInit} from '@angular/core'
import {UserService} from '../../services/user.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-buy-pmtpage',
  templateUrl: './buy-pmtpage.component.html',
  styleUrls: ['./buy-pmtpage.component.css']
})
export class BuyPmtpageComponent implements OnInit {

  model: any = {howMany: 0, howMuch: 10, territoryContract: ''}
  loading = false

  constructor(private router: Router,
              private userService: UserService) {

  }

  ngOnInit() {
    setTimeout(() => {
      if (!this.userService.user.EvangelistId || this.userService.user.EvangelistId === 0) {
        this.router.navigate(['/register-evangelist'])
        return false

      }
    }, 1000)

  }

  buy() {

    if (this.model.howMany <= 0) {
      alert('Quntity cannot be zero')
      return
    }

    this.model.territoryContract = this.userService.localToken.contractAddress

    this.userService.buyLocalTokens(this.model.territoryContract, this.model.howMany, this.model.howMuch)
      .then((res) => {
        console.log(res)
        this.router.navigate((['/evangelist-home-page']))
        return false

      })
      .catch((error) => {
        alert(JSON.stringify(error))
      })

  }

}
