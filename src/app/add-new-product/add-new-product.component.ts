import { Component } from '@angular/core';
import { Product } from '../_model/product.model';
import { NgForm } from '@angular/forms';
import { ProductService } from '../_service/product.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FileHandle } from '../_model/file-handle.model';
import { DomSanitizer } from '@angular/platform-browser';
import { FocusMonitor } from '@angular/cdk/a11y';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent {
  product:Product={
    productName:"",
    productDescription:"",
    productDiscountedPrice:0,
    productActualPrice:0,
    productImages:[]
  }
  constructor(private productService:ProductService, 
    private senitizer:DomSanitizer){}

  addProduct(productForm :NgForm){
  const productFormData=  this.prepareFormData(this.product);
    this.productService.addProduct(productFormData).subscribe(
      (response:Product)=>{
        productForm .reset();
      },
      (error:HttpErrorResponse)=>{
        console.log(error);
      }
    );


  }

  prepareFormData(product:Product):FormData{
    const formData=new FormData();
    formData.append(
      'product',
      new Blob([JSON.stringify(product)],{type:'application/json'})
    );
    for(var i=0; i<product.productImages.length; i++){
      formData.append(
        'imageFile',
        product.productImages[i].file,
        product.productImages[i].file.name
      );
    }
  return formData;

  }
  onFileSelected(event:any){
  if(event.target.files){
 const file=event.target.files[0];

 const FileHandle: FileHandle={
  file:file,
  url: this.senitizer.bypassSecurityTrustUrl(
    window.URL.createObjectURL(file)
  )
 }

 this.product.productImages.push(FileHandle);
  }
  }

}

