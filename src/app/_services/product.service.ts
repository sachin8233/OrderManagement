import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderDetails } from '../_model/order-details.model';
import { MyOrderDetails } from '../_model/order.model';
import { Product } from '../_model/product.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  OrderDetail: any;

  constructor(private httpClient: HttpClient,
    private router:Router) { }

  public createTransaction(amount) {
    return this.httpClient.get("http://localhost:9090/createTransaction/"+amount);
  }

  public markAsDelivered(orderId) {
      return this.httpClient.get("http://localhost:9090/markOrderAsDelivered/"+orderId)
  }

  public getAllOrderDetailsForAdmin(status: string): Observable<MyOrderDetails[]> {
    return this.httpClient.get<MyOrderDetails[]>("http://localhost:9090/getAllOrderDetails/"+status);
  }

  public getMyOrders(): Observable<MyOrderDetails[]> {
    return this.httpClient.get<MyOrderDetails[]>("http://localhost:9090/getOrderDetails");
  }

  public deleteCartItem(cartId) {
    return this.httpClient.delete("http://localhost:9090/deleteCartItem/"+cartId);
  }

  public addProduct(product: FormData) {
    return this.httpClient.post<Product>("http://localhost:9090/addNewProduct", product);
  }

  public getAllProducts(pageNumber: number, searchKey: string) {
    return this.httpClient.get<Product[]>("http://localhost:9090/getAllProducts?pageNumber=");
  }

  public getProductDetailsById(productId) {
    return this.httpClient.get<Product>("http://localhost:9090/getProductDetailsById/"+productId);
  }

  public deleteProduct(productId: number) {
    return this.httpClient.delete("http://localhost:9090/deleteProductDetails/"+productId);
  }

  public getProductDetails(isSingleProductCheckout, productId) {
    return this.httpClient.get<Product[]>("http://localhost:9090/getProductDetails/"+isSingleProductCheckout+"/"+productId);
  }

  public placeOrder(orderDetails: OrderDetails, isCartCheckout) {
    return this.httpClient.post("http://localhost:9090/placeOrder/"+isCartCheckout, orderDetails);
  }

  public addToCart(productId) {
    return this.httpClient.get("http://localhost:9090/addToCart/"+productId);
  }

  public getCartDetails() {
    return this.httpClient.get("http://localhost:9090/getCartDetails");
  }

  public getOrderDetails(orderId:number){
    this.httpClient.post("http://localhost:9090/getOrderDetails",orderId).subscribe(
      data=>{
        this.OrderDetail=data;
      //  console.log(this.OrderDetail);
        this.router.navigate(['/buyProduct', {
          isSingleProductCheckout: false, id: 0
        }]);
      }
      
    );
  }
}
