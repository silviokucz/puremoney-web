import {Injectable} from '@angular/core'
import {Headers, Http} from '@angular/http'
import {Evangelist} from '../../models/evangelist '
import {User} from '../../models/user'

declare var require: any

@Injectable()
export class UserService {

  public user: User = null
  public evangelist: Evangelist = null
  public localToken: any = {}

  private httpOptions
  private baseUrl = 'https://api.puremoney.tech/api/v1/'
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

  constructor(private http: Http) {
    this.prepareHeaders()
    this.refresh()
  }

  prepareHeaders() {
    const token = JSON.parse(localStorage.getItem('accessToken'))
    if (token) {
      this.user = new User()
      this.user.Email = token.token.userName

      this.httpOptions = {
        headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token.token.access_token
        })
      }
    }
  }

  public refresh() {
    if (this.httpOptions) {
      this.getUserInfo()
        .then(() => {
          this.getEvangelistById(this.user.EvangelistId)
            .then(() => {
              this.getLocalTokens()
                .then((res: any) => {

                  const list = JSON.parse(res._body)
                  list.forEach((tk) => {
                    if (tk.localityCode === this.evangelist.geoAddress.geoTerritory) {
                      this.localToken = tk
                    }
                  })
                })
            })
        })
    }
  }


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
            this.prepareHeaders()

            this.user = new User()
            this.user.Email = accessToken.token.userName

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
    this.evangelist = null
  }

  createEvangelist(evangelist: Evangelist) {


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

        this.evangelist = evangelist
        this.evangelist.id = 0
        this.evangelist.status = 0


        return this.http.post(this.baseUrl + 'database/evangelist', evangelist, this.httpOptions)
          .toPromise()
          .then((res1: any) => {
            // assign id to current user
            const ev: any = JSON.parse(res1._body)
            this.evangelist.id = ev.id
            this.evangelist.status = ev.status
            this.user.EvangelistId = ev.id
          })
          .catch((error) => {
            console.log(error)
            this.evangelist = null
          })

      })
      .catch((error) => {
        console.log(error)
        this.evangelist = null
      })
  }

  public getEvangelistById(id: number) {

    return this.http.get(this.baseUrl + `database/evangelist/id/${id}`, this.getHttpOptions())
      .toPromise()
      .then((res: any) => {
        this.evangelist = JSON.parse(res._body)
      })
  }

  createUser(user: User) {

    return this.http.post(this.baseUrl + 'Account/Register', user)
      .toPromise()
      .then()
  }

  buyLocalTokens(territoryContract: string, howMany: number, howMuch: number) {

    const body = {
      'territoryContract': territoryContract,
      'howMany': howMany
    }

    const data = {
      territoryContract: territoryContract,
      howMany: howMany,
      howMuch: 10.00
    }

    const qrystring = Object.keys(data)
      .map(key => key + '=' + encodeURIComponent(data[key]))
      .join('&')

    const url = this.baseUrl + 'contracts/localtoken/buylocaltokens?' + qrystring

    console.log('buy tokens url ', url)
    return this.http.put(url, body, this.getHttpOptions())
      .toPromise()
      .then()
  }

  getTokenBalance(territoryContract: string, account: string) {

    const data = {
      territoryContract: territoryContract,
      account: account
    }

    const qrystring = Object.keys(data)
      .map(key => key + '=' + encodeURIComponent(data[key]))
      .join('&')

    const url = this.baseUrl + 'contracts/localtoken/gettokenbalance?' + qrystring

    console.log('gettokenbalance url ', url)
    return this.http.get(url, this.getHttpOptions())
      .toPromise()
      .then()
  }

  changePassword(model) {

    return this.http.post(this.baseUrl + 'Account/ChangePassword', model)
      .toPromise()
      .then()
  }

  public getUserInfo() {
    return this.http.get(this.baseUrl + 'account/userinfo', this.getHttpOptions())
      .toPromise()
      .then((res: any) => {
        this.user = JSON.parse(res._body)
      })
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
