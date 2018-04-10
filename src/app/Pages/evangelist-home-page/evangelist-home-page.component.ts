import {Component, OnInit} from '@angular/core'
import {UserService} from '../../services/user.service'

@Component({
  selector: 'app-evangelist-home-page',
  templateUrl: './evangelist-home-page.component.html',
  styleUrls: ['./evangelist-home-page.component.css']
})
export class EvangelistHomePageComponent implements OnInit {

  private tokenBalance: any = 'Getting balance, Please wait ...'

  // private oldBalance: number

  constructor(private userService: UserService) {
    let oldBalance = Number(localStorage.getItem('evBal'))

    if (!oldBalance) {
      oldBalance = 0
      localStorage.setItem('evBal', oldBalance.toString())
    }

  }

  ngOnInit() {

    // keep poling
    setInterval(() => {
      this.getTokenBalance()
    }, 10000)


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
        const oldBalance = Number(localStorage.getItem('evBal'))
        this.tokenBalance = JSON.parse(res._body)

        if (this.tokenBalance !== oldBalance) {
          console.log(`balance changed from ${oldBalance} to ${this.tokenBalance}`)

          localStorage.setItem('evBal', this.tokenBalance.toString())

          // approve with MetaMask

        }

      })
      .catch((error) => {
        alert('getTokenBalance: ' + error)
      })

  }
}
