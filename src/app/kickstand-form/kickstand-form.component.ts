import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-kickstand-form',
  templateUrl: './kickstand-form.component.html',
  styleUrls: ['./kickstand-form.component.css']
})
export class KickstandFormComponent implements AfterViewInit {

  @ViewChild('ksform') ksform: ElementRef<HTMLKsFormElement>;

  constructor() { }

  handleSubmit(e: Event) {
    console.log(e);
  }

  ngAfterViewInit(): void {
    const myForm = this.ksform.nativeElement;
    myForm.addEventListener('submitted', (e: CustomEvent) => {
        const myFormData = e.detail;
        alert(JSON.stringify(myFormData));
        // do something with the form data
    });
  }
}
