import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisualBoardComponent } from './components/visual-board/visual-board.component';

const routes: Routes = [{ path: '', component: VisualBoardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualBoardRoutingModule {}
