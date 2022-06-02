 import { Tshirtdetails } from "./thsirtdetails";

export class CartItem{
    // price!: number;
    constructor(tshirt:Tshirtdetails){
        this.tshirt=tshirt;
        this.price;
    }

    tshirt:Tshirtdetails;
    quantity:number = 1;
    get price(): number{
        return this.tshirt.price * this.quantity;
    }
}
