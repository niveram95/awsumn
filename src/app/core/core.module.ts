import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {throwIfAlreadyLoaded} from './module-import-guard';
import {LoggerService} from './logger.service';
import {GeolocationService} from './geolocation.service';

import {NavComponent} from './nav/nav.component';
import {SettingsDialog} from './nav/dialog.component';
import {SharedModule} from '../shared/modules/shared.module';
import {RouterModule} from '@angular/router';
import {SearchBarComponent} from './search-bar/search-bar.component';
import {Error404Component} from './error404/error-404.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    NavComponent,
    SettingsDialog
  ],
  declarations: [
    SearchBarComponent,
    Error404Component,
    NavComponent,
    SettingsDialog
  ],
  providers: [
    LoggerService,
    GeolocationService
  ],
  entryComponents: [SettingsDialog]
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
