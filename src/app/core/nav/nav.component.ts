import { Component, Inject, NgModule } from '@angular/core';
import { Router } from '@angular/router';

import { APP_CONFIG, AppConfig } from '../../config/app.config';
import { IAppConfig } from '../../config/iapp.config';

import { SettingsDialog } from './dialog.component';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

// @NgModule({
//   declarations: [
//     SettingsDialog
//   ]
// })
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent {
  appConfig: any;
  menuItems: any[];
  name: String;
  address: String;
  animal: String;

  constructor( @Inject(APP_CONFIG) appConfig: IAppConfig,
    private router: Router,
    public dialog: MatDialog) {
    this.appConfig = appConfig;
  }

  private goHome() {
    return this.router.navigate([AppConfig.routes.home]);
  }

  private openAddressDialog() {
    // @TODO
    let dialogRef = this.dialog.open(SettingsDialog, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });
  }
}