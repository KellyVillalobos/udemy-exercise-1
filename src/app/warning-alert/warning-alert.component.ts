import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `
    <app-success-alert></app-success-alert>
    <app-success-alert></app-success-alert>
  `,
  styleUrls: ['./warning-alert.component.scss']
})
export class WarningAlertComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
