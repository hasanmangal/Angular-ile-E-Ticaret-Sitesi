import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-add-forms2',
  templateUrl: './product-add-forms2.component.html',
  styleUrls: ['./product-add-forms2.component.css'],
  providers:[CategoryService,ProductService]
})
export class ProductAddForms2Component implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  productAddForm!: FormGroup; 
  product:any={}
  createProductAddForm(){ //required değerlerini kontrol et
    this.productAddForm=this.formBuilder.group({
      name:["",Validators.required],
      description:["",Validators.required],
      imageUrl:["",Validators.required],
      price:["",Validators.required],
      categoryId:["",Validators.required]


    });
  }

  ngOnInit(): void {
  }
add(){
  if(this.productAddForm.valid){
    this.product=Object.assign({},this.productAddForm.value);

  }
}


}
