import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PabloLiboneComponent } from './pablo-libone.component';
import { PabloDetailsComponent } from './pablo-details/pablo-details.component';
import { PabloHomeComponent } from './pablo-home/pablo-home.component';

const routes: Routes = [
  { path: '', component: PabloLiboneComponent },
  { path: 'pablo-home', component: PabloHomeComponent },
  { path: 'pablo-details', component: PabloDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PabloLiboneRoutingModule { }
