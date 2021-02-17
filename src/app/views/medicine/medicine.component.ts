import { Component, OnInit, ViewChild } from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.scss']
})
export class MedicineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @ViewChild('myModal') public myModal: ModalDirective;
}
