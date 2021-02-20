import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ModalDirective } from "ngx-bootstrap/modal";
import { Brand, Category, Response } from "../../interfaces/response";
import { BrandService } from "../../services/brand.service";
import { CategoriesService } from "../../services/categories.service";
import { MedicineService } from "../../services/medicine.service";
@Component({
  selector: "app-medicine",
  templateUrl: "./medicine.component.html",
  styleUrls: ["./medicine.component.scss"],
})
export class MedicineComponent implements OnInit {
  medicines = [];
  categories = [];
  brands = [];
  public medicineAddForm: FormGroup;
  public submitted = false;
  constructor(
    private medServ: MedicineService, 
    private fb: FormBuilder,
    private catgServ : CategoriesService,
    private brandServ : BrandService
  
    ) {}

  ngOnInit(): void {
    this.getMedicines();
    this.buildForm();
    this.getCategories();
    this.getBrands();
  }
  @ViewChild("myModal") public myModal: ModalDirective;

  getMedicines() {
    this.medServ.getMedicines().subscribe((res: Response) => {
      console.log("res: >>>>>>>>>>>>", res);
      this.medicines = res.data;
      console.log(this.medicines);
    });
  }

  getCategories(){
    this.catgServ.getCategories().subscribe((res : Category)=>{
      this.categories = res.data;
    })
  }
  getBrands(){
    this.brandServ.getBrands().subscribe((res : Brand)=>{
      this.brands = res.data;
    })

  }
  deleteMed(id){
    this.medServ.deleteMedicine(id).subscribe((resp)=>{
      this.getMedicines();
    })
  }

  buildForm(): void {
    this.medicineAddForm = this.fb.group({
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
    return this.medicineAddForm.value;
  }

  submit() {
    this.submitted = true;
    this.medServ.postMedicine(this.f).subscribe((resp) =>{
      this.getMedicines();
      this.medicineAddForm.reset();
    })
    console.log(this.f);
  }

  reSet(){
    this.medicineAddForm.reset()
  } 

}
