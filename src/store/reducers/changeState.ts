//init
let companyState :any = 'Rikkei Academy';

//function
let companyStateReducer = (state = companyState, action:any)=>{
    switch(action.type){
        case 'CHANGE':
            return state  =  action.newValue;
        default:
            return state;
    }
}

// ex
export default companyStateReducer;