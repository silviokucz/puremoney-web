import {GeoAddressGeoCode} from './geoAddressGeoCode'

export class GeoAddress {
  id?: number
  geoCode?: GeoAddressGeoCode
  geoTerritory?: string
  street1?: string
  street2?: string
  city?: string
  stateOrProvince?: string
  country?: string
  zip?: string
}
