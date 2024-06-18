// interface User {
//     id:number;
//     name: string,
//     sex:string,
//     born:string,
//     address:string
// }

//tạo thông tin
let users:any= [
    {
        id:1,
        name: 'Nguyen Van A',
        sex:'Nam',
        born:'20/03/2023',
        address:'Thanh Xuan, HN'
    }
];

//hàm
let reducerUsers = (state = users,action:any)=>{
    switch (action.type) {
        case 'ADD':
            
            return [...state,action.payload];
    
        default:
            return state;
    }
}

export default reducerUsers;
