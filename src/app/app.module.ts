import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { ShoelaceFormComponent } from './shoelace-form/shoelace-form.component';
import { LionFormComponent } from './lion-form/lion-form.component';
import { HttpClientModule } from '@angular/common/http';
import { DtIconModule } from '@dynatrace/barista-components/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing.module';
import { KickstandFormComponent } from './kickstand-form/kickstand-form.component';
import { BaristaFormComponent } from './barista-form/barista-form.component';
import { DtFormFieldModule } from '@dynatrace/barista-components/form-field';
import { PocFormComponent } from './poc-form/poc-form.component';
// import { FluidCheckbox } from '@dynatrace/fluid-elements/checkbox';
@NgModule({
    declarations: [
        AppComponent,
        ShoelaceFormComponent,
        LionFormComponent,
        KickstandFormComponent,
        BaristaFormComponent,
        PocFormComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        DtIconModule.forRoot({ svgIconLocation: '/assets/icons/{{name}}.svg' }),
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        DtFormFieldModule,
        // FluidCheckbox
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class AppModule {
}
