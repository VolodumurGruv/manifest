import { NgModule } from '@angular/core';
import { VisualBoardRoutingModule } from './visual-board-routing.module';
import { VisualBoardComponent } from './components/visual-board/visual-board.component';
import { ModalComponent } from './components/modal/modal.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VisualBoardItemComponent } from './components/visual-board-item/visual-board-item.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    VisualBoardComponent,
    ModalComponent,
    VisualBoardItemComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VisualBoardRoutingModule,
    MaterialModule,
  ],
})
export class VisualBoardModule {}
