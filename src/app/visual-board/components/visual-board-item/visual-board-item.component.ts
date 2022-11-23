import { Component, Input, SimpleChanges } from '@angular/core';
import { Item } from 'src/app/interfaces/item.interface';

@Component({
  selector: 'app-visual-board-item',
  templateUrl: './visual-board-item.component.html',
})
export class VisualBoardItemComponent {
  @Input() item!: Item;
  public items: Item[] = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    for (const item in changes) {
      if (changes[item].currentValue) {
        for (let key of changes[item].currentValue) {
          this.items.push(key);
        }
      }
    }
  }
}
