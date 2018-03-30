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
  }

  login() {
    this.loading = true
    this.userService.login(this.modelLogin.username, this.modelLogin.password)
      .then(
        data => {

          this.userService.getUserInfo()
            .then((info: any) => {
              if (this.userService.user.EvangelistId !== 0) {
                this.userService.refresh()

                this.router.navigate(['/evangelist-home-page'])
                return false

              } else {
                this.router.navigate([this.returnUrl])
                return false

              }
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
