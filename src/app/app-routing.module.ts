import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'visualboard',
        loadChildren: () =>
          import('./visual-board/visual-board.module').then(
            (m) => m.VisualBoardModule
          ),
      },
      {
        path: 'manifestation',
        loadChildren: () =>
          import('./manifestation/manifestation.module').then(
            (m) => m.ManifestationModule
          ),
      },
    ],
  },

  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
