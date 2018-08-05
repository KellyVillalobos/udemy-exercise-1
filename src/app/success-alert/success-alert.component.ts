import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styles: [`
  :host >>> .popover-body {
    color: green;
    background-color: aquamarine;
  }
  `]
})
export class SuccessAlertComponent {
}
