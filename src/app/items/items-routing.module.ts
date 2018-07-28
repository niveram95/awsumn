import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ItemDetailComponent} from '../item-detail/item-detail.component';
import {HeroesComponent} from './items.component';

const heroesRoutes: Routes = [
  {
    path: '',
    component: HeroesComponent,
    children: [
      // {path: '', component: HeroListComponent},
      {path: ':id', component: ItemDetailComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class HeroRoutingModule {
}
