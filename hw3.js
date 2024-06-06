"use strict";
function sumWithPromise(arr) {
    return new Promise((resolve, reject) => {
        let sumArr = arr.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0);
        resolve(sumArr);
        // reject('lỗi tính toán');
    });
}
sumWithPromise([1, 2, 3, 4, 5, 6, 7])
    .then((result) => {
    console.log(result);
})
    .catch((error) => {
    console.error('Lỗi tính toán:', error);
});
