import {UserService} from '../../services/user.service'
import {Component, OnInit} from '@angular/core'
import {ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  modelLogin: any = {}
  loading = false
  returnUrl: string

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserService) {
  }

  ngOnInit() {
    // reset login status
    this.userService.logout()

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/'

    // todo remove this
    this.modelLogin = {username: 'silvio1@host.com', password: 'Aa1234567*'}
  }

  login() {
    this.loading = true
    this.userService.login(this.modelLogin.username, this.modelLogin.password)
      .then(
        data => {

          this.userService.getUserInfo()
            .then((info: any) => {
              console.log(JSON.stringify(info))

              // get evengelist data
              const userInfo = JSON.parse(info._body)
              this.userService.user.evangelistId = userInfo.EvangelistId

              if (this.userService.user.evangelistId !== 0) {
                this.userService.getEvangelistById(this.userService.user.evangelistId)
                  .then((evangelist) => {
                    console.log(JSON.stringify(evangelist))
                    this.router.navigate([this.returnUrl])
                  })
                  .catch(error => {
                    alert(JSON.stringify(error))
                    this.loading = false
                    this.modelLogin = {}
                  })
              }

              this.router.navigate([this.returnUrl])

            })
            .catch(error => {
              alert(JSON.stringify(error))
              this.loading = false
              this.modelLogin = {}
            })
        },
        error => {
          alert(JSON.stringify(error))
          this.loading = false
          this.modelLogin = {}
        })
  }

}
