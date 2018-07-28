import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {HeroRoutingModule} from './items-routing.module';
import {SharedModule} from '../shared/modules/shared.module';

import {ItemService} from './shared/item.service';
import {ItemDetailComponent} from '../item-detail/item-detail.component';
import {HeroesComponent} from './items.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    HeroRoutingModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDNZSn5THDwDJ5wByE0j8Y1vgZuEjAiT5I',
      libraries: ['places']
    })
  ],
  declarations: [
    HeroesComponent,
    ItemDetailComponent
  ],
  entryComponents: [
  ],
  providers: [
    ItemService
  ]
})

export class HeroesModule {
}
