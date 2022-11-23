import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-manifestation',
  templateUrl: './manifestation.component.html',
  styleUrls: ['./manifestation.component.scss'],
})
export class ManifestationComponent implements OnInit {
  public canDeleteGetRidOf: boolean = true;
  public canDeleteDailyAffirm: boolean = true;

  public manifestationForm = this.fb.group({
    manifest: [''],
    prayer: [''],
    visualization: this.fb.group({
      see: [''],
      have: [''],
      fell: [''],
    }),
    getRidOf: this.fb.array([this.fb.control('')]),
    dailyAffirm: this.fb.array([
      this.fb.group({
        affirmation: [''],
        action: [''],
        todo: [''],
      }),
    ]),
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    console.log(this.manifestationForm.value);
  }

  addFieldGetRidOf() {
    this.canDeleteGetRidOf = false;

    this.getGetRidOf().push(this.fb.control(''));
  }

  deleteFieldGetRidOf(i: number) {
    if (this.getGetRidOf().length > 1) {
      this.getGetRidOf().controls.splice(i, 1);
    } else {
      this.canDeleteGetRidOf = true;
    }
  }

  addFieldDailyAffirm(): void {

    this.getDailyAffirm().push(
      this.fb.group({
        affirmation: [''],
        action: [''],
        todo: [''],
      })
    );
    this.canDeleteDailyAffirm= false;
  }

  deleteFieldDailyAffirm(i: number): void {
    if (this.getDailyAffirm().length > 1) {
      this.getDailyAffirm().controls.splice(i, 1);
    } else {
      this.canDeleteDailyAffirm = true;
    }
  }

  getDailyAffirm() {
    return this.manifestationForm.get('dailyAffirm') as FormArray;
  }

  getGetRidOf() {
    return this.manifestationForm.get('getRidOf') as FormArray;
  }

  submit() {}
}
