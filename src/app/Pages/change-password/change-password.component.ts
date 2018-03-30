import {Component, OnInit} from '@angular/core'
import {UserService} from '../../services/user.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  model = {OldPassword: '', NewPassword: '', ConfirmPassword: ''}
  loading = false

  constructor(private router: Router,
              private userService: UserService) {
  }

  ngOnInit() {
  }

  changePassword() {
    this.loading = true
    this.userService.changePassword(this.model)
      .then(
        data => {
          this.router.navigate(['/login'])
          return false

        },
        error => {
          alert(error._body)
          this.loading = false
        })
  }
}
