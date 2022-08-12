import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManifestationComponent } from './components/manifestation/manifestation.component';

const routes: Routes = [{ path: '', component: ManifestationComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManifestationRoutingModule {}
