import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Item } from 'src/app/interfaces/item.interface';
import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-visual-board',
  templateUrl: './visual-board.component.html',
  styleUrls: ['./visual-board.component.scss'],
})
export class VisualBoardComponent {
  public item!: Item;

  constructor(public dialog: MatDialog) {}

  addItem() {
    const dialogRef = this.dialog.open(ModalComponent);

    dialogRef.afterClosed().subscribe((res: Item) => (this.item = res));
  }
}
