
//init
//get local
let products = () => {
  let storageProducts = localStorage.getItem("products");
  let arr = storageProducts ? JSON.parse(storageProducts) : [];
  return arr;
};

//function
let productsReducer = (state = products(), action:any)=>{
    switch(action.type){
        default:
            return state;
    }
}

//export
export default productsReducer;

