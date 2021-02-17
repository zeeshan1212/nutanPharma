import { NgModule } from '@angular/core';
import { OrdersComponent} from './orders.component';
import { OrdersRoutingModule } from './orders-routing.module';

@NgModule({
  imports: [
    OrdersRoutingModule
  ],
  declarations: [ OrdersComponent ]
})
export class OrdersModule { }
