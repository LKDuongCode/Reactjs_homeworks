export let actAdd = (type:string, value:any)=>{
    return {
        type:type,
        newItem:value,
    }
}

export let actDelete = (type:string, value:any)=>{
    return {
        type:type,
        deleteIndex:value,
    }
}