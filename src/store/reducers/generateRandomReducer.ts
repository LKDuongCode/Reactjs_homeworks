//init
let initArr :any = [];

//function
let generateRandomReducer = (state = initArr, action:any)=>{
    switch(action.type){
        case 'ADD':
            return [...state,action.payload];
         default:
            return state;
    }
}
//xuất
export default generateRandomReducer;