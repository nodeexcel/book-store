import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { AboutUsComponent } from './components/about-us/about-us.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isCollapsed: boolean;
  constructor(
    public dialog: MatDialog
  ) {
    this.isCollapsed = true;
  }

  ngOnInit() { }

  abutUs(): void {
    const dialogRef = this.dialog.open(AboutUsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
