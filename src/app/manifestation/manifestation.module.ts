import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { ManifestationComponent } from './components/manifestation/manifestation.component';
import { ManifestationRoutingModule } from './manifestation-routing.module';

@NgModule({
  declarations: [ManifestationComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ManifestationRoutingModule,
    MaterialModule,
  ],
})
export class ManifestationModule {}
