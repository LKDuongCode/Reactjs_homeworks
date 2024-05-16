import React, { useState } from 'react';

type ProductType = {
  id: number;
  name: string;
  price: string;
  quantity: number;
};

export default function Hw2() {
  const [product, setProduct] = useState<ProductType>({
    id: 1,
    name: 'Coca Cola',
    price: '1000 $',
    quantity: 10,
  });
  //Object.entries(obj):lặp qua => mảng các thuộc tính : giá trị tương ứng.
  //Object.keys(obj):lặp qua => chỉ trả key.
  return (
    <div>
      <h3>Home Work 2</h3>
      {Object.entries(product).map(([key, value]) => {
        console.log([key, value]);
        return (
          <div key={key}>
            <p>
              {key}: {value}
            </p>
          </div>
        );
      })}
      <hr />
    </div>
  );
}