// action count
export let actionCount = (type:any,value:any)=>{
    return {
        type: type ,
        payload:value,
    }
}

// action random 5
export let actionRandom = (type:any, value:any)=>{
    return {
        type:type,
        payload:value,
    }
}

// action company
export let actionCompany = (type:any,value:any)=>{
    return {
        type:type,
        newValue:value,
    }
}

//action background
export let actionBackground = (type:any)=>{
    return {type:type}
}