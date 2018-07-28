import {Component} from '@angular/core';
import {LoggerService} from '../logger.service';
import {Item} from '../../items/shared/item.model';
import {FormControl} from '@angular/forms';
import {ItemService} from '../../items/shared/item.service';
import {Router} from '@angular/router';
import {AppConfig} from '../../config/app.config';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  providers: [
    LoggerService
  ]
})

export class SearchBarComponent {
  defaultItems: Array<Item> = [];
  itemFormControl: FormControl;
  filteredItems: any;
  itemsAutocomplete: any;

  constructor(private itemService: ItemService,
              private router: Router) {
    this.itemFormControl = new FormControl();
    this.itemService.getAllItems().subscribe((items: Array<Item>) => {
      this.defaultItems = items;
      this.itemFormControl.valueChanges
        .startWith(null)
        .map(value => this.filterItems(value))
        .subscribe(itemsFiltered => {
          this.filteredItems = itemsFiltered;
        });
    });
  }
  
  filterItems(val: string): Item[] {
    return val ? this.defaultItems.filter(item => item.description.toLowerCase().indexOf(val.toLowerCase()) >= 0)
    : this.defaultItems;
  }

  searchItem(item: Item): Promise<boolean> {
    LoggerService.log('Moved to item with id: ' + item.material_id);
    return this.router.navigate([AppConfig.routes.heroes + '/' + item.material_id]);
  }
}
