import {Component} from '@angular/core'
import {UserService} from '../../services/user.service'
import {Router} from '@angular/router'
import {User} from '../../../models/user'

@Component({
  selector: 'app-register-user-page',
  templateUrl: './register-user-page.component.html',
  styleUrls: ['./register-user-page.component.css']
})
export class RegisterUserPageComponent {

  model: User
  loading = false

  constructor(private router: Router,
              private userService: UserService) {
    this.model = new User()
  }

  register() {
    this.loading = true
    this.userService.createUser(this.model)
      .then(
        data => {
          this.router.navigate(['/login'])
        },
        error => {
          alert(error._body)
          this.loading = false
        })
  }
}
