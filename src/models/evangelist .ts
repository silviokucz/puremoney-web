import { GeoAddress } from './geoAddress';
export class Evangelist {
    status?:number; // = ['0', '1', '2']
    id?: number;

    firstName: string;
    lastName: string;
    ethAddress?: string;
    geoAddress?:GeoAddress;

}

