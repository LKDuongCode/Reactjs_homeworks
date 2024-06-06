async function sumWithAsyncAwait(arr:number[]) {
    let promise = new Promise((resolve,reject)=>{
        let newArr = arr.reduce((sum,current)=>{
           return  sum + current;
        },0)
        resolve(newArr)
    })
    let value = await promise;
    return value;
};

(async () => {
    console.log(await sumWithAsyncAwait([1, 2, 3, 4, 5, 6, 7]));
  })();