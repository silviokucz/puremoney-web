import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Evangelist } from '../../models/evangelist ';
import { GeoAddress } from '../../models/geoAddress';
import { GeoAddressGeoCode } from '../../models/geoAddressGeoCode';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  evangelist: Evangelist;
    loading = false;
    
  constructor(private route: ActivatedRoute,
    private router: Router,
    private userService: UserService) {
      this.evangelist = new Evangelist();
      this.evangelist.geoAddress = new GeoAddress();
      this.evangelist.geoAddress.geoCode = new GeoAddressGeoCode();
     }

  ngOnInit() {
  }

  register() {
    this.loading = true;
    if(this.evangelist.geoAddress.street2 === undefined) {
      this.evangelist.geoAddress.street2 = '';
    }if(this.evangelist.geoAddress.country === undefined) {
      this.evangelist.geoAddress.country = '';
    }

    this.userService.create(this.evangelist)
        .then(
            data => {
                
                this.router.navigate(['/']);
            },
            error => {
                alert((error._body || error) + error); 
                this.loading = false;
            });
}
}
