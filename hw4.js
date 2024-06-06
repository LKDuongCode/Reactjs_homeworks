"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function sumWithAsyncAwait(arr) {
    return __awaiter(this, void 0, void 0, function* () {
        let promise = new Promise((resolve, reject) => {
            let newArr = arr.reduce((sum, current) => {
                return sum + current;
            }, 0);
            resolve(newArr);
        });
        let value = yield promise;
        return value;
    });
}
;
(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log(yield sumWithAsyncAwait([1, 2, 3, 4, 5, 6, 7]));
}))();
