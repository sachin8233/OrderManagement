import { Component, OnInit } from '@angular/core';
import { MyOrderDetails } from '../_model/order.model';
import { ProductService } from '../_services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  displayedColumns = ["Name", "Address", "Contact No.", "Amount", "Status","Action"];

  myOrderDetails: MyOrderDetails[] = [];

  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    this.getOrderDetails();
  }

  getOrderDetails() {
    this.productService.getMyOrders().subscribe(
      (resp: MyOrderDetails[]) => {
        console.log(resp);
        this.myOrderDetails = resp;
      }, (err)=> {
        console.log(err);
      }
    );
  }

  ReOrder(orderId:number) {

    this.productService.getOrderDetails(orderId);
    
    // this.router.navigate(['/buyProduct', {
    //   isSingleProductCheckout: false, id: 0
    // }]);
    


   }

}
