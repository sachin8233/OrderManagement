<<<<<<< HEAD
import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { DomSanitizer } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { FileHandle } from "../_model/file-handle.model";
import { Product } from "../_model/product.model";
import { ProductService } from "../_services/product.service";

@Component({
  selector: "app-add-new-product",
  templateUrl: "./add-new-product.component.html",
  styleUrls: ["./add-new-product.component.css"],
})
export class AddNewProductComponent implements OnInit {
  isNewProduct = true;

  product: Product = {
    productId: null,
    productName: "",
    productDescription: "",
    productDiscountedPrice: 0,
    productActualPrice: 0,
    productImages: [],
  };

  constructor(
    private productService: ProductService,
    private sanitizer: DomSanitizer,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.product = this.activatedRoute.snapshot.data['product'];

    if(this.product && this.product.productId) {
      this.isNewProduct = false;
    }
  }

  addProduct(productForm: NgForm) {
    const formData = this.prepareFormDataForProduct(this.product);
    this.productService.addProduct(formData).subscribe(
      (response: Product) => {
        productForm.reset();
        this.product.productImages = [];
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  prepareFormDataForProduct(product: Product): FormData {
    const uploadImageData = new FormData();
    uploadImageData.append(
      "product",
      new Blob([JSON.stringify(product)], { type: "application/json" })
    );

    for (var i = 0; i < this.product.productImages.length; i++) {
      uploadImageData.append(
        "imageFile",
        this.product.productImages[i].file,
        this.product.productImages[i].file.name
      );
    }
    return uploadImageData;
  }

  onFileSelected(event: any) {
    if (event.target.files) {
      const file = event.target.files[0];
      const fileHandle: FileHandle = {
        file: file,
        url: this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        ),
      };
      this.product.productImages.push(fileHandle);
    }
  }

  removeImages(i: number) {
    this.product.productImages.splice(i, 1);
  }

  fileDropped(fileHandle: FileHandle) {
    this.product.productImages.push(fileHandle);
  }
}
=======
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

>>>>>>> f8d9c49ac489eac1ab8655924375229386ecee0a
