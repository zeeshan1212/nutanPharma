import { NgModule } from '@angular/core';
import { BrandComponent} from './brand.component';
import { BrandRoutingModule } from './brand-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrandRoutingModule,
    ModalModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [ BrandComponent ]
})
export class BrandModule { }
