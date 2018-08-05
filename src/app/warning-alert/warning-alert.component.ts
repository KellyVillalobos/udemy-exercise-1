import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `
    <button mdbBtn type="button" color="blue-grey" class="waves-light" mdbPopover="This is a warning!!!"
            placement="bottom"
            mdbPopoverHeader="Alert!!" mdbWavesEffect>The Warning Component!!</button>
  `,
  styles: [`
    :host >>> .popover-body {
      color: red;
      background-color: mistyrose;
    }
  `]
})
export class WarningAlertComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
