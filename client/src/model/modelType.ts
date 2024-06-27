export type Cart = {
    id:number;
    name:string;
    image:string;
    price:number;
    quantity:number;
}

export type Sell = {
    id:number;
    name:string;
    image:string;
    price:number;
    quantity:number;
    description:string;
}
// type cho state cart
export type StateCartType = {
    loading:boolean;
    data:Cart[];
    error:string | null;
}
// type cho state sell
export type StateSellType = {
    loading:boolean;
    data:Sell[];
    error:string | null;
}
//type chung 
export interface CombineType  {
    carts:StateCartType;
    sells:StateSellType;
}