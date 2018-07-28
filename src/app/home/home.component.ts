import { NgModule, Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Item } from '../items/shared/item.model';
import {Location} from '../items/shared/location.model';

import { ItemService } from '../items/shared/item.service';
import { AppConfig } from '../config/app.config';

import { GeolocationService } from '../core/geolocation.service';
import { Coordinates } from '../core/coordinates.model';

import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-home',
  styles: [`
    agm-map {
      height: 300px;
    }
  `],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HeroTopComponent implements OnInit {

  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  public _latSubscription: any;
  public _longSubscription: any;
  public recyclingLocs: any;

  public labelLoc = "Location";
  public label1 = "Northrop";
  public label2 = "Savers";
  public label3 = "Target";
  public label4 = "Eureka Recycling";
  public label5 = "Coffman Memorial_Union";
  public label6 = "Keller Hall";
  public label7 = "Minnesota Materials Exchange";
  public label8 = "Ocean Tech";
  public label9 = "Atomic Recycling LLC";
  public labelp = "SKB Malcolm";
  public labelz = "The Recycling Zone";




  @ViewChild("search")
  public searchElementRef: ElementRef;
  itemFormControl: FormControl;
  defaultItems: Array<Item> = [];  
  items: any;
  locations: any;

  constructor(private itemService: ItemService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private geolocationService: GeolocationService
  ) {
    this.latitude = geolocationService.latitude;
    this._latSubscription = geolocationService.latitudeChange.subscribe((value) => {
      this.latitude = value;
    });

    this.longitude = geolocationService.longitude;
    this._longSubscription = geolocationService.longitudeChange.subscribe((value) => {
      this.longitude = value;
    });

    this.itemFormControl = new FormControl();

    this.itemService.getAllItems().subscribe((items: Array<Item>) => {
      this.defaultItems = items;
      this.itemFormControl.valueChanges
        .startWith(null)
        .map(value => this.filterLocations(value))
        .subscribe(locationsFiltered => {
          this.locations = locationsFiltered;
        });
    });
  }

  ngOnInit() {
    //set google maps defaults
    this.zoom = 16;
    this.latitude = 39.8282;
    this.longitude = -98.5795;

    //create search FormControl
    this.searchControl = new FormControl();

    //set current position
    this.setCurrentPosition();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 16;
        });
      });
    });
  }
    
  getLocations(val: string): void {
    var items = new Array<Item>();
    items = val ? this.defaultItems.filter(item => item.description.toLowerCase().indexOf(val.toLowerCase()) >= 0)
    : this.defaultItems;
  }
  

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.geolocationService.setLatitude(position.coords.latitude);
        this.geolocationService.setLongitude(position.coords.longitude);
        this.zoom = 16;
      });
    }
  }

  private setNewPosition(lat, long) {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = lat;
        this.longitude = long;
        this.zoom = 16;
      });
    }
  }

  filterItems(val: string): Item[] {
    return this.defaultItems;
  }

  filterLocations(val: string): Location[] {
    var locations = [];
    var locationsFiltered = [];

    this.defaultItems.forEach(item => {
      locations.push({ place: item.place_one, place_lat: item.place_one_lat, place_long: item.place_one_long });
      locations.push({ place: item.place_two, place_lat: item.place_two_lat, place_long: item.place_two_long });
      locations.push({ place: item.place_three, place_lat: item.place_three_lat, place_long: item.place_three_long });
    });

    locationsFiltered = this.filterByPlaceName(locations);
    return locationsFiltered;
  }

  filterByPlaceName(arr) {
    var locations = []
    return arr.filter(function(n) {
      return locations.indexOf(n.place) == -1 && locations.push(n.place)
    })
  }

  public markerClick(lat, long) {
    window.open("https://www.google.com/maps/?q="+ lat + "," + long);
  }
}
