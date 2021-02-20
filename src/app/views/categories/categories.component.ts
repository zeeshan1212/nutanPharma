import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Category } from '../../interfaces/response';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
 categories = []
 public addCategoryForm: FormGroup;
 public submitted = false;
 @ViewChild("myModal") public myModal: ModalDirective;

  constructor(
    private catgServ : CategoriesService,
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {
    this.getCategories()
    this.buildForm()
  }


  getCategories(){
    this.catgServ.getCategories().subscribe((res : Category)=>{
      console.log('catg...', res)
      this.categories = res.data;
    })

  }

  status = false;
  onChang(e) {
    if (e.target.value == "true") {
      this.status = true;
    } else {
      this.status = false;
    }
  }
  get f() {
    console.log(
      "this.addBrandForm.value.status: ",
      this.addCategoryForm.value.status
    );
    return {
      ...this.addCategoryForm.value,
      status: this.status,
    };
  }
  buildForm(): void {
    this.addCategoryForm = this.fb.group({
      category : [""],
      desc: [""],
      other: [""],
    });
  }


  submit() {
    this.submitted = true;
    this.catgServ.postCategory(this.f).subscribe((resp) =>{
      this.getCategories()
    })
    console.log(this.f);
  }

  deletCategory(id) {
    this.catgServ.deleteCategory(id).subscribe((resp)=>{
      this.getCategories()
    })
  }
  reSet() {
    this.addCategoryForm.reset();
  }
  
}
