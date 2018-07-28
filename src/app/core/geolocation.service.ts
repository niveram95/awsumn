import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Coordinates } from './coordinates.model';

const GEOLOCATION_ERRORS = [
    'Browser does not support location services',
    'You have rejected access to your location',
    'Unable to determine your location',
    'Service timeout has been reached'
];

@Injectable()
export class GeolocationService {
    public latitude: number;
    public longitude: number;

    latitudeChange: Subject<number> = new Subject<number>();
    longitudeChange: Subject<number> = new Subject<number>();

    constructor() {
      this.latitude = 0;
      this.longitude = 0;
    }
    
    public setLatitude(lat) {
        this.latitude = lat;
        this.latitudeChange.next(this.latitude);
    }

    public setLongitude(long) {
        this.longitude = long;
        this.longitudeChange.next(this.longitude);
    }
}