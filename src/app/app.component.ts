import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public dialog: MatDialog) {}

  onClick() {
    const dialogRef = this.dialog.open(DialogComponent, {
      closeOnNavigation: true,
      maxHeight: '100vh',
      height: '100vh',
      maxWidth: '100vw',
      width: '100vw',
      role: 'dialog',
      panelClass: 'full-screen',
    });
  }
}
