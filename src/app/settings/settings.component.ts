import {Component} from '@angular/core';

import {Item} from '../items/shared/item.model';

import {ItemService} from '../items/shared/item.service';
import {AppConfig} from '../config/app.config';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  heroes: Item[] = null;
  canVote = false;

  constructor(private heroService: ItemService) {
    // this.canVote = this.heroService.checkIfUserCanVote();

    // this.heroService.getAllHeroes().subscribe((heroes) => {
    //   this.heroes = heroes.sort((a, b) => {
    //     return b.likes - a.likes;
    //   }).slice(0, AppConfig.topHeroesLimit);
    // });
  }
}
