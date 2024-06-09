//thuật toán frequency
// tìm số xuất hiện nhiều nhất trong mảng [1,4,4,3,4,3,7];
//cách 1: hai for độ phức tạp O(n^2)
let arr = [1, 4, 4, 3, 4, 3, 3, 3, 7];
let find = 0;
let sub = []; //[1,3,3,4,3,4,4,4,1]
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] == arr[j]) {
      find++;
    }
  }
  sub.push(find);
  find = 0;
}

console.log("mảng số lần xuất hiện của phần tử :", sub);
let max = Math.max(...sub);
console.log(" lần xuất hiện nhiều nhất :", max);
let index = sub.indexOf(max);
console.log("chỉ số của phần tử xuất hiện nhiều nhất: ", index);
console.log("số xuất hiện nhiều nhất: ", arr[index]);

// cách 2:độ phức tạp 0(n)
console.log("==> cách 2 độ phức tạp nhỏ hơn___________________________");
let arrCln = {};
for (let i = 0; i < arr.length; i++) {
  let num = arr[i];
  if (arrCln[num]) {
    arrCln[num]++;
  } else {
    arrCln[num] = 1;
  }
}
let maxCount = 0;
let maxNum;
for (let num in arrCln) {
  if (arrCln[num] > maxCount) {
    maxCount = arrCln[num];
    maxNum = num;
  }
}
console.log("Số xuất hiện nhiều nhất là: ", maxNum);
