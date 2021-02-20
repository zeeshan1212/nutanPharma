import { NgModule, ViewChild } from '@angular/core';
import { OrdersComponent} from './orders.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { ModalDirective, ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    OrdersRoutingModule,
    ModalModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule

  ],
  declarations: [ OrdersComponent ]
})
export class OrdersModule { 
  @ViewChild('largeModal') public largeModal: ModalDirective;

}
