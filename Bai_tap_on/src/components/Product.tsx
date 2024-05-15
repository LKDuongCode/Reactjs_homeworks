import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { propTypes } from "react-bootstrap/esm/Image";
interface ProductTypeChild{
    id:number;
    name:string;
    price:number;
    quantity:number;
    img:string;
}
interface PropType{
    product:ProductTypeChild;
    function1:Function
}
//hứng từ cha
export default function Product(props: PropType) {
  const {product}=props;
  const {function1}=props;
    let handleAdd = (id:number)=>{
      function1(id)
    }
  return (
    <>
      <div
        style={{
            borderRadius: '8px',
            backgroundColor:'#f5f5f5',
            width:'300px',
            marginTop:'50px'
        }}
      >
        <div
          style={{
            padding: "10px",
            width:'100%'
          }}
        >
          <img
            src= {product.img}
            alt=""
            style={{
              height: "60%",
              width: "100%",
            }}
          />
          <div className="container-choose">
            <h3>{product.name}</h3>
            <p >{product.price} $</p>
            <button className="button-add" onClick={()=>handleAdd(product.id)}><FontAwesomeIcon icon={faCartShopping} color="white" />  Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}
