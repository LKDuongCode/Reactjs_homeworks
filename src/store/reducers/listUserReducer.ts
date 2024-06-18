
//init
let users:any = [
    {
        id:1,
        name: 'Nguyen Van A',
        sex:'Nam',
        born:'20/03/2023',
        address:'Thanh Xuan, HN'
    },
    {
        id:2,
        name: 'Nguyen Van B',
        sex:'Nu',
        born:'20/03/2023',
        address:'Hai Phong'
    }
]
//function
let reducerUser2 = (state = users, action:any)=>{
    // xử lí logic
    switch (action.type) {
        case 'Add':
            
            return [...state,action.payload];
    
        default:
            return state;
    }
}
//xuất
export default reducerUser2;

