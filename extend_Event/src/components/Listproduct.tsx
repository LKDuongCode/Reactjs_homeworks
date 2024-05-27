import { useState } from "react"
import ProductItem from "./ProductItem";
import Event from "./Event";

// khai báo kiểu dữ liệu cho mảng đối tượng
type Product = {
    id:number;
    name:string;
    price:number;
}
export default function Listproduct() {
    //khu vực khai báo các state của cpn.
    //trong cpn không dùng biến mà dùng state.
    //cú pháp.
    let [productName,setProductName] = useState<string>('Táo bón');
    //tạo state mảng.
    let [products,setProducts] = useState<Product[]>([
        {id:1,
            name:'Cam',
            price:1234,
        },
        {id:2,
            name:'Cam',
            price:1234,
        },
        {id:3,
            name:'Cam',
            price:1234,
        }
    ]
    );
  return (
    <div>
        {/* render */}
        <h3>{productName}</h3>
        <h3>Danh sách sản phẩm:</h3>
        {products.map((product:Product)=>
            //return có thể được thay bằng ().
            (
                // truyền vào cpn con.
                <div key={product.id}>
                    <ProductItem product = {product}/>
                </div>
            )
        )}
        <Event></Event>
    </div>
  )
}


