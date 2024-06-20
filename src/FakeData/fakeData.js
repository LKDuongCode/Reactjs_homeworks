// file chứa data gốc và lưu lên local
// do chưa học redux toolkit nên chưa thể tương tác redux với API.

let products = [
  {
    id: Math.ceil(Math.random() * 1000),
    name: "Hamburger",
    price: 30,
    describle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Aspernatur ipsam fuga qui similique quia quidem facere ullam, odionemo, doloribus obcaecati autem sequi eum quo hic, neque inciduntaut. Nam!",
    img: "https://github.com/ngoquy12/template_shopping_cart/blob/master/images/Hamburger.jpg?raw=true",
    quantity: 5,
  },
  {
    id: Math.ceil(Math.random() * 1000),
    name: "Cake",
    price: 20,
    describle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Aspernatur ipsam fuga qui similique quia quidem facere ullam, odionemo, doloribus obcaecati autem sequi eum quo hic, neque inciduntaut. Nam!",
    img: "https://github.com/ngoquy12/template_shopping_cart/blob/master/images/Cake.jpg?raw=true",
    quantity: 6,
  },
  {
    id: Math.ceil(Math.random() * 1000),
    name: "Bread",
    price: 8,
    describle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Aspernatur ipsam fuga qui similique quia quidem facere ullam, odionemo, doloribus obcaecati autem sequi eum quo hic, neque inciduntaut. Nam!",
    img: "https://github.com/ngoquy12/template_shopping_cart/blob/master/images/bread.jpg?raw=true",
    quantity: 12,
  },
  {
    id: Math.ceil(Math.random() * 1000),
    name: "Pizza",
    price: 10,
    describle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Aspernatur ipsam fuga qui similique quia quidem facere ullam, odionemo, doloribus obcaecati autem sequi eum quo hic, neque inciduntaut. Nam!",
    img: "https://github.com/ngoquy12/template_shopping_cart/blob/master/images/pizza.jpg?raw=true",
    quantity: 2,
  },
];

//local
localStorage.setItem("products", JSON.stringify(products));

// localStorage.setItem('products',JSON.stringify([]));

//được link trong index.html
