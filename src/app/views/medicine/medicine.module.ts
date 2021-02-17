import { NgModule } from '@angular/core';
import { MedicineComponent } from './medicine.component';
import { MedicineRoutingModule } from './medicine-routing.module';

@NgModule({
  imports: [
    MedicineRoutingModule,
  ],
  declarations: [ MedicineComponent ]
})
export class MedicineModule { }
