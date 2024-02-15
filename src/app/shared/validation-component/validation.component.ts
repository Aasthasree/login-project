//Angular Imports
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-validation',
  template: `
  <ng-container *ngIf="control.invalid && (control.touched || control.dirty)" class="validation-error">
  <small *ngIf="control.errors?.required" class="mt">{{key}} is required</small>
  <small *ngIf="control.errors?.pattern">{{key}} is invalid</small>
 </ng-container>
`,
  styles: ['small { color: red; }']
})

export class ValidationComponent {
  @Input() control: any = '';
  @Input() key: string = '';
}