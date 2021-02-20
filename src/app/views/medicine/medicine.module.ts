import { NgModule } from '@angular/core';
import { MedicineComponent } from './medicine.component';
import { MedicineRoutingModule } from './medicine-routing.module';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MomentModule } from 'angular2-moment';

@NgModule({
  imports: [
    MedicineRoutingModule,
    CollapseModule.forRoot(),
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    MomentModule
  ],
  declarations: [ MedicineComponent ],
})
export class MedicineModule { }
