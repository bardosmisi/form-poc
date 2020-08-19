import { Component, OnInit } from '@angular/core';
import '@dynatrace/fluid-checkbox';
import '../webcomponent-form-prototype/webcomponentForm';

@Component({
  selector: 'app-poc-form',
  templateUrl: './poc-form.component.html',
  styleUrls: ['./poc-form.component.scss']
})
export class PocFormComponent implements OnInit {

  indeterminate = false;
  checked = false;

  constructor() { }

  ngOnInit(): void {
  }

  _isIndeterminate(): boolean {
    return this.indeterminate;
  }

  _isChecked(): boolean {
    return this.checked;
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log(event, new FormData(event.target));
    alert(`formdata: ${JSON.stringify(new FormData(event.target))}`);
  }

  handleFromData(event) {
    for (const value of event.formData.values()) {
      console.log('from for loop', value);
    }
    console.log(Array.from(event.formData.entries()));
  }
}
