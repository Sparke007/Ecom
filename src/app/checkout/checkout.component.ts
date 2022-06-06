import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.services';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public product:any=[];
  public grandTotal!:number;

  constructor(private cartService: CartService) { }
  ngOnInit(): void {

    this.cartService.getProducts()
    .subscribe(res=>{
      this.product=res;
      this.grandTotal=this.cartService.getTotalPrice();
    })
  }

  removeItem(item:any){
this.cartService.removeCartItem(item)
  }

  emptycart(){
    this.cartService.removeAllCart();
  }
  }




