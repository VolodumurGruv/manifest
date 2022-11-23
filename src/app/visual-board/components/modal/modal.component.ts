import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  public visual = this.fb.group({
    title: [''],
    image: [''],
  });

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ModalComponent>
  ) {}

  onSubmit() {
    this.dialogRef.close([this.visual.value]);
  }
}
