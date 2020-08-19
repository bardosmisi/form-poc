import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoelace-form',
  templateUrl: './shoelace-form.component.html',
  styleUrls: ['./shoelace-form.component.css']
})
export class ShoelaceFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const form = document.querySelector('.form-overview');

    form.addEventListener('slSubmit', event => {
      const formData = (event as any).detail.formData;
      let output = '';

      //
      // Example 2: Output all form control names + values
      //
      for (const entry of formData.entries()) {
        output += `${entry[0]}: ${entry[1]}\n`;
      }
      alert(output);

      //
      // Example 3: Get all form controls that were serialized as
      // an array of HTML elements
      //
      console.log((event as any).detail.formControls);
    });
  }

}
