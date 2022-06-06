import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  public totalItem: number=0;
  constructor (public cartService: CartService) {

  }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
    this.totalItem = res.length;
  })

  }

}
