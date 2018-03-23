import {Injectable} from '@angular/core'
import {Headers, Http} from '@angular/http'
import {Evangelist} from '../../models/evangelist '
import {User} from '../../models/user'

declare var require: any

@Injectable()
export class UserService {

  public user: User = null

  private httpOptions
  private baseUrl = 'https://api.puremoney.tech/api/v1/'

  constructor(private http: Http) {
    const token = JSON.parse(localStorage.getItem('accessToken'))
    if (token) {
      this.user = new User()
      this.user.email = token.token.userName

      this.httpOptions = {
        headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token.token.access_token
        })
      }
    }
  }

  // Set the configuration settings
  private credentials = {
    client: {
      id: 'someMachineId',
      secret: 'machineSecret'
    },
    auth: {
      tokenHost: 'https://api.puremoney.tech',
      tokenPath: '/token'
    }
  }

  oauth2 = require('simple-oauth2').create(this.credentials)

  login(username: string, password: string) {

    const tokenConfig = {
      username: username,
      password: password
    }

    if (username === null || password === null) {
      return Promise.reject('Please type username and password.')
    } else {
      tokenConfig.username = username
      tokenConfig.password = password

      return this.oauth2.ownerPassword
        .getToken(tokenConfig)
        .then((result) => {
            const accessToken = this.oauth2.accessToken.create(result)

            localStorage.setItem(`accessToken`, JSON.stringify(accessToken))
            console.log('accessToken in storage: ', localStorage.getItem(`accessToken`))

            this.user = new User()
            this.user.email = accessToken.token.userName

            return accessToken
          }, err => {
            console.log('access token error ', err)
            return Promise.reject(JSON.stringify(err))
          }
        )
    }

  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('accessToken')
    this.user = null
  }

  createEvangelist(evangelist: Evangelist) {

    evangelist.id = 0
    evangelist.status = 0

    return this.getGeoCode(`${evangelist.geoAddress.street1}
    ${evangelist.geoAddress.street2}
    ${evangelist.geoAddress.city}
    ${evangelist.geoAddress.stateOrProvince}
    ${evangelist.geoAddress.zip}
    ${evangelist.geoAddress.country}`)
      .then((result: any) => {

        const res = JSON.parse(result._body)

        evangelist.geoAddress.geoCode.latitude = res.resourceSets[0].resources[0].point.coordinates[0]
        evangelist.geoAddress.geoCode.longitude = res.resourceSets[0].resources[0].point.coordinates[1]
        evangelist.geoAddress.geoTerritory = res.resourceSets[0].resources[0].address.locality + ' ' +
          res.resourceSets[0].resources[0].address.adminDistrict + ' ' +
          res.resourceSets[0].resources[0].address.adminDistrict2 + ' ' +
          res.resourceSets[0].resources[0].address.countryRegion

        return this.http.post(this.baseUrl + 'evangelist', evangelist, this.httpOptions)
          .toPromise()
          .then((res) => {
            // assign id to current user
          })

      })
  }

  public getEvangelistById(id: number) {

    return this.http.get(this.baseUrl + `database/evangelist/id/${id}`, this.getHttpOptions())
      .toPromise()
      .then()

  }

  createUser(user: User) {

    return this.http.post(this.baseUrl + 'Account/Register', user)
      .toPromise()
      .then()
  }

  public getUserInfo() {
    return this.http.get(this.baseUrl + 'account/userinfo', this.getHttpOptions())
      .toPromise()
      .then()
  }

  public getLocalTokens() {
    return this.http.get(this.baseUrl + 'contracts/localtoken/list', this.getHttpOptions())
      .toPromise()
      .then()
  }

  private getHttpOptions() {
    const token = JSON.parse(localStorage.getItem('accessToken'))
    if (token) {
      const httpOptions = {
        headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token.token.access_token
        })
      }

      return httpOptions
    }

    return null
  }

  private getGeoCode(address: string) {
    const url = `http://dev.virtualearth.net/REST/v1/Locations?addressLine=${address} \
    &$format=responseFormat&key=Al4qJqLS1IDCpE1RjEDvwjK2FzLnffLx2kp3fWEgO_9dExPJgTjaZRNMSC0KF1AH`

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
