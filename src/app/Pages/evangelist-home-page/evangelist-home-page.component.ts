import {Component, OnInit} from '@angular/core'
import {UserService} from '../../services/user.service'

@Component({
  selector: 'app-evangelist-home-page',
  templateUrl: './evangelist-home-page.component.html',
  styleUrls: ['./evangelist-home-page.component.css']
})
export class EvangelistHomePageComponent implements OnInit {

  private tokenBalance: any = {}

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    setTimeout(() => {
      this.getTokenBalance()
    }, 5000)
  }

  private getEvangelist() {
    return this.userService.evangelist
  }

  private getLocalToken() {
    return this.userService.localToken
  }

  private getTokenBalance() {
    this.userService.getTokenBalance(this.userService.localToken.contractAddress, this.userService.evangelist.ethAddress)
      .then((res: any) => {
        this.tokenBalance = JSON.parse(res._body)
      })
      .catch((error) => {
        alert(error)
      })
  }
}
