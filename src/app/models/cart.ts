import { CartItem } from "./cartIem";

export class Cart{
    items:CartItem[]=[];

    get totalPrice(): number{
        let totalPrice=0;
        this.items.forEach(item=> {
            totalPrice += (item.price+50)
        });
        return totalPrice;
    }
}
