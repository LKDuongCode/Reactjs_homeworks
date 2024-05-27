//khai báo kiểu dữ liệu cho product
//đối với tên prop sẽ khác đặt tên như thường
type PropTypeProduct = {
    id:number;
    name:string;
    price:number;
}

export default function ProductItem({product}:{product:PropTypeProduct}) {

  return (
    <div>
        <h4>ProductName</h4>
    </div>
  )
}
