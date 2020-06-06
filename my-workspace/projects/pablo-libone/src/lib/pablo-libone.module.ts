import { NgModule } from '@angular/core';
import { PabloLiboneRoutingModule } from './pablo-libone-routing.module';
import { PabloLiboneComponent } from './pablo-libone.component';
import { PabloDetailsComponent } from './pablo-details/pablo-details.component';
import { PabloHomeComponent } from './pablo-home/pablo-home.component';

@NgModule({
  declarations: [PabloLiboneComponent, PabloDetailsComponent, PabloHomeComponent],
  imports: [
    PabloLiboneRoutingModule
  ],
  exports: [PabloLiboneComponent]
})
export class PabloLiboneModule { }
