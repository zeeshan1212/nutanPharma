import { NgModule } from '@angular/core';
import { BrandComponent} from './brand.component';
import { BrandRoutingModule } from './brand-routing.module';

@NgModule({
  imports: [
    BrandRoutingModule
  ],
  declarations: [ BrandComponent ]
})
export class BrandModule { }
