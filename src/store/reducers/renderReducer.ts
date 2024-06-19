let books = () => {
    let storedBooks = localStorage.getItem('books');
    let arr = storedBooks ? JSON.parse(storedBooks) : [];
    return arr;
};

// function
let renderReducer = (state = books(), action:any) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default renderReducer;

