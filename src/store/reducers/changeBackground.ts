//init
let changeBackground :boolean = false;

//function
let changeBackgroundReducer = (state = changeBackground, action : any)=>{
    switch(action.type){
        case 'CHANGEBACK':
            return state = !state;
        default:
            return state;
    }
}

//ex
export default changeBackgroundReducer;