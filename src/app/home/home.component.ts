import { Component, OnInit } from '@angular/core';
import { productd } from '../productd';
import { ProductService } from '../services/products.services';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  result:productd[]=[];

  constructor(private order:ProductService) { }

  ngOnInit(): void {

    this.order.getData().subscribe((data:productd[])=>{

      console.log(data);
      this.result=data;
    })
  }
}
