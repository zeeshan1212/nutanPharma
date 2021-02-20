import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Response } from "../../interfaces/response";
import { MedicineService } from "../../services/medicine.service";

@Component({
  selector: "app-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.scss"],
})
export class OrdersComponent implements OnInit {
  medicines = [];
  public orderForm: FormGroup;
  public submitted = false;
  constructor(private medServ: MedicineService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.getMedicines();
  }

  getMedicines() {
    this.medServ.getMedicines().subscribe((res: Response) => {
      console.log("res: >>>>>>>>>>>>", res);
      this.medicines = res.data;
      console.log(this.medicines);
    });
  }
  medicine;
  rate;
  quantity;
  orderQuantity;
  total;
  subTotal
  discount
  gst
  grandTotal
  gstTotal
  onChange(e) {
    console.log(e.target.value);
    this.medicine = this.medicines.filter(
      (med) => med._id == e.target.value
    )[0];
    this.rate = this.medicine.rate;
    this.quantity = this.medicine.quantity;
    this.total = "";
    this.orderQuantity = "";
    console.log(this.medicine.rate);
  }

  onQuant(ev) {
    this.orderQuantity = ev.target.value;
    this.total = this.rate * this.orderQuantity;
    console.log(this.total);
  }

  localMedicine = {};
  orderList = [];
  onAdd() {
    this.localMedicine = {
      medicine: this.medicine.productName,
      rate: this.rate,
      orderQuantity: this.orderQuantity,
      total: this.total,
    };
    this.orderList.push(this.localMedicine);
    console.log(this.orderList);
    this.orderTotal();
    console.log(this.subTotal)
    this.grandTotl()

  }
  onGst(e){
    this.gst = e.terget.value
  }
  onDiscount(e){
    this.discount = e.target.value
  }
  orderTotal(){
    for (let i = 0; i < this.orderList.length ; i++){
      this.subTotal =+ this.orderList[i].total
    }
  }
  grandTotl(){
    if (this.gst != ''){
      this.gstTotal = 0.01 * this.gst * this.subTotal + this.subTotal 
    }
    else if (this.discount != ''){
      this.grandTotal = this.subTotal -  0.01* this.discount * this.subTotal
    }
    else{
      this.grandTotal = this.subTotal
      this.gstTotal = this.subTotal
    }
  }

  buildForm(): void {
    this.orderForm = this.fb.group({
      date: [""],
      brand: [""],
      packing: [""],
      expiry: [""],
      rate: [""],
      productName: [""],
      categories: [""],
      batchNo: [""],
      quantity: [""],
      mrp: [""],
    });
  }

  get f() {
    return this.orderForm.value;
  }

  submit() {
    this.submitted = true;
    this.medServ.postMedicine(this.f).subscribe((resp) => {
      this.getMedicines();
      this.orderForm.reset();
    });
    console.log(this.f);
  }

  reSet() {
    this.orderForm.reset();
  }
}
