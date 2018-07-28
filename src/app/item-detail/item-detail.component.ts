import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppConfig } from '../config/app.config';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';

import { Item } from '../items/shared/item.model';
import { ItemService } from '../items/shared/item.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GeolocationService } from '../core/geolocation.service';
import { Coordinates } from '../core/coordinates.model';

import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';

@NgModule({
  schemas:  [ CUSTOM_ELEMENTS_SCHEMA ]
})

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})

export class ItemDetailComponent {
  item: Item;
  canVote: boolean;
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  public _latSubscription: any;
  public _longSubscription: any;

  @ViewChild("search")
  public searchElementRef: ElementRef;
  
  constructor(private itemService: ItemService,
    private activatedRoute: ActivatedRoute,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private geolocationService: GeolocationService) {
      
    this.latitude = geolocationService.latitude;
    this._latSubscription = geolocationService.latitudeChange.subscribe((value) => {
      this.latitude = value;
    });

    this.longitude = geolocationService.longitude;
    this._longSubscription = geolocationService.longitudeChange.subscribe((value) => {
      this.longitude = value;
    });

    this.activatedRoute.params.subscribe((params: any) => {
      if (params['id']) {
        this.itemService.getAllItems().subscribe((items: Array<Item>) => {
          items = items.filter(item => item.material_id == params['id']);
          this.item = items.length > 0 ? items[0] : null;
        });
      }
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

  public markerClick(lat, long) {
    window.open("https://www.google.com/maps/?q="+ lat + "," + long);
  }
}
