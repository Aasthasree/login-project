//Angular Imports
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-validation',
  template: `
  <ng-container *ngIf="control.invalid && (control.touched || control.dirty)" class="validation-error">
  <small *ngIf="control.errors?.required" class="mt">{{key}} is required</small>
  <small *ngIf="control.errors?.pattern">Invalid {{key}} format</small>
  <small *ngIf="control.errors?.cannotContainSpace">No spaces allowed in {{key}}</small>
  <small *ngIf="control.errors?.email">Invalid {{key}} format</small>
 </ng-container>
`,
  styles: ['small { color: red; }']
})

export class ValidationComponent {
  @Input() control: any = '';
  @Input() key: string = '';
}