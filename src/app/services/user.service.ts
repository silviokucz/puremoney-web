import { Injectable } from '@angular/core';
import { Http, RequestOptions, RequestOptionsArgs, Headers } from "@angular/http";
import { Evangelist } from '../../models/evangelist ';
import { User } from '../../models/user';
import { GeoAddressGeoCode } from '../../models/geoAddressGeoCode';


@Injectable()
export class UserService {

  public user: User = null;

  constructor(private http: Http) {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
  }

  login(username: string, password: string) {

    localStorage.setItem('currentUser', JSON.stringify({ token: 'abc123', username: username }));
    this.user = new User();
    this.user.username = username;

    // return this.http.post('/api/authenticate', { username: username, password: password })
    // .toPromise()
    // .then((user => {
    //         // login successful if there's a jwt token in the response
    //         if (user) {
    //           // if (user && user.token) {
    //             // store user details and jwt token in local storage to keep user logged in between page refreshes
    //             localStorage.setItem('currentUser', JSON.stringify(user));
    //         }

    //         return user;
    //     }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.user = null;
  }

  create(evangelist: Evangelist) {

    evangelist.id = 0;
    evangelist.status = 0;


    return this.getGeoCode(`${evangelist.geoAddress.street1} 
    ${evangelist.geoAddress.street2} 
    ${evangelist.geoAddress.city} 
    ${evangelist.geoAddress.stateOrProvince} 
    ${evangelist.geoAddress.zip}
    ${evangelist.geoAddress.country}`)
      .then((result: any) => {

        let res = JSON.parse(result._body);

        evangelist.geoAddress.geoCode.latitude = res.resourceSets[0].resources[0].point.coordinates[0];
        evangelist.geoAddress.geoCode.longitude = res.resourceSets[0].resources[0].point.coordinates[1];
        evangelist.geoAddress.geoTerritory = res.resourceSets[0].resources[0].address.locality + ' ' +
          res.resourceSets[0].resources[0].address.adminDistrict + ' ' +
          res.resourceSets[0].resources[0].address.adminDistrict2 + ' ' +
          res.resourceSets[0].resources[0].address.countryRegion;

        return this.http.post('https://api.puremoney.tech/api/v1/database/evangelist', evangelist)
        .toPromise()
        .then()

      });



  }

  private getGeoCode(address: string) {
    let url = `http://dev.virtualearth.net/REST/v1/Locations?addressLine=${address}&$format=responseFormat&key=Al4qJqLS1IDCpE1RjEDvwjK2FzLnffLx2kp3fWEgO_9dExPJgTjaZRNMSC0KF1AH`;

    return this.http.get(url)
      .toPromise()

  }

  // getById(id: number) {
  //     return this.http.get('/api/users/' + id);
  // }



  // update(user: Evangelist) {
  //     return this.http.put('/api/users/' + user.id, user);
  // }

  // delete(id: number) {
  //     return this.http.delete('/api/users/' + id);
  // }

}
