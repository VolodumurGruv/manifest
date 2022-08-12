import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { ManifestationComponent } from './components/manifestation/manifestation.component';
import { ManifestationRoutingModule } from './manifestation-routing.module';

@NgModule({
  declarations: [ManifestationComponent],
  imports: [ManifestationRoutingModule, MaterialModule],
})
export class ManifestationModule {}
