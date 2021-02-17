import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicineComponent } from './medicine.component';

const routes: Routes = [
  {
    path: '',
    component: MedicineComponent,
    data: {
      title: 'Medicine'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicineRoutingModule {}
