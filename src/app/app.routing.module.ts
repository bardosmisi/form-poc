import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LionFormComponent } from './lion-form/lion-form.component';
import { ShoelaceFormComponent } from './shoelace-form/shoelace-form.component';
import { KickstandFormComponent } from './kickstand-form/kickstand-form.component';
import { BaristaFormComponent } from './barista-form/barista-form.component';
import { PocFormComponent } from './poc-form/poc-form.component';

const routes: Routes = [
  {path: 'lion-form' , component: LionFormComponent},
  {path: 'shoelace-form' , component: ShoelaceFormComponent},
  {path: 'kickstand-form', component: KickstandFormComponent},
  {path: 'barista-form', component: BaristaFormComponent},
  {path: 'poc-form', component: PocFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
