// init
let listProduct : any = [
    {
        id:1,
        name:'Cam',
        price:'2000',
        quantity:10,
    },
    {
        id:2,
        name:'Bưởi',
        price:'3000',
        quantity:5,
    }
]

// function
let productlistReducer = (state = listProduct, action:any)=>{
    switch (action.type) {
        case 'ADD':
            
            return [...state,action.payload];
    
        default:
            return state;
    }
}

export default productlistReducer;