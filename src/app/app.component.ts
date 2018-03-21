import {Component} from '@angular/core'
import {UserService} from './services/user.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pure Money Tech'

  constructor(private userService: UserService, private router: Router,) {
  }

  private getUser() {
    return this.userService.user
  }

  private logout() {
    this.userService.logout()
    this.router.navigate(['/'])
  }
}
