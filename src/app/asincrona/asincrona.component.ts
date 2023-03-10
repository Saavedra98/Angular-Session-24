import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export interface DialogData {
  deporte: string;
  name: string;
}

@Component({
  selector: 'app-asincrona',
  templateUrl: './asincrona.component.html',
  styleUrls: ['./asincrona.component.css']
})
export class AsincronaComponent {

  deporte!: string;
  name!: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: {name: this.name, deporte: this.deporte},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.deporte = result;
    });
  }
}


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'asincrona-dialogo.html',
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}