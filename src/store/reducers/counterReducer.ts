//init
let counter:number = 0;

//function
let countReducer = (state = counter, action:any)=>{
    switch (action.type) {
        case 'INCREASE':
            
            return state + action.payload;
    
        case 'DECREASE':
            
            return state - action.payload;
    
        default:
            return state;
    }
}
//xuất
export default countReducer;