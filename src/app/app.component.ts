import { Component, OnInit } from '@angular/core';
import { applyPolyfills, defineCustomElements } from 'kickstand-ui/loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'form-poc';

  ngOnInit(){
    // Apply the polyfills and bind the custom elements to the window object
    applyPolyfills().then(() => {
      defineCustomElements();
    });
  }

}
