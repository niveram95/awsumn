import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import {APP_CONFIG, AppConfig} from './config/app.config';

import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/modules/shared.module';
import {CoreModule} from './core/core.module';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpLoaderFactory} from './app.translate.factory';
import {HeroTopComponent} from './home/home.component';
import {TimingInterceptor} from './shared/interceptors/timing.interceptor';
import {SettingsDialog} from './core/nav/dialog.component';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    SharedModule.forRoot(),
    CoreModule,
    AppRoutingModule,
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDNZSn5THDwDJ5wByE0j8Y1vgZuEjAiT5I',
      libraries: ['places']
    }),
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    HeroTopComponent
  ],
  providers: [
    {provide: APP_CONFIG, useValue: AppConfig},
    {provide: HTTP_INTERCEPTORS, useClass: TimingInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
  // entryComponents: [ SettingsDialog ]
})

export class AppModule {
}
