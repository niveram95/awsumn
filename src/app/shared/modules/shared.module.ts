import {ModuleWithProviders, NgModule} from '@angular/core';
import {MaterialModule} from './material.module';
import {TranslateModule} from '@ngx-translate/core';
import {ItemService} from '../../items/shared/item.service';
import {FlexLayoutModule} from '@angular/flex-layout';
import { GeolocationService } from '../../core/geolocation.service';

@NgModule({
  imports: [
    MaterialModule,
    FlexLayoutModule,
    TranslateModule
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    TranslateModule
  ]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        ItemService,
        GeolocationService
      ]
    };
  }
}
