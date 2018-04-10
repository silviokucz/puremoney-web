import {Component, OnInit} from '@angular/core'
import {UserService} from '../../services/user.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router,
              private userService: UserService) {
  }

  ngOnInit() {
    setTimeout(() => {
      if (this.userService.evangelist) {
        this.router.navigate(['/evangelist-home-page'])
        return false
      }
    }, 1000)

  }

}
