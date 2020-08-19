import { Component, OnInit } from '@angular/core';
import { FluidCheckbox } from '@dynatrace/fluid-checkbox';
import { DtFormFieldModule } from '@dynatrace/barista-components/form-field';
import { DtInputModule } from '@dynatrace/barista-components/input';

@Component({
  selector: 'app-barista-form',
  templateUrl: './barista-form.component.html',
  styleUrls: ['./barista-form.component.css'],
})
export class BaristaFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
