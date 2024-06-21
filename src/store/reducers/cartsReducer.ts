import Cart from "../../model/carts";

//get carts
let carts = () => {
  let localCarts = localStorage.getItem("carts");
  let arr = localCarts ? JSON.parse(localCarts) : [];
  return arr;
};

//function
let cartsReducer = (state = carts(), action: any) => {
  switch (action.type) {
    case "ADD":
        let check = false;
      //kiểm tra xem item thêm vào đã tồn tạo hay chưa
       for(let i = 0; i <= state.length ; i++){
        console.log(state[i]);
        if(state[i] === action.newItem){
            state[i].quantity ++;
        }
        else{
            check = true;
        }
       }

      return check ? state : [...state,action.newItem];

    case "DELETE":
      return state.filter(
        (item: Cart, index: number) => index !== action.deleteIndex
      );
    default:
      return state;
  }
};

//ex
export { cartsReducer };
