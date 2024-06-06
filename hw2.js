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
function divideNumbers(a, b) {
    return __awaiter(this, void 0, void 0, function* () {
        //sử dụng try - catch - finally
        /*
        try: Khối code này chứa các câu lệnh có khả năng gây ra ngoại lệ.
        catch: Khối code này được thực thi khi có ngoại lệ xảy ra trong khối try.
        finally: Khối code này luôn được thực thi, không phụ thuộc vào việc có ngoại lệ xảy ra hay không.
        */
        try {
            if ((a && b !== 0) && (typeof a && b === 'number')) {
                a > b ? console.log(a / b) : console.log(b / a);
            }
            else {
                throw new Error('Không chia hết được cho 0 hoặc dữ liệu truyền vào phải là số.');
            }
        }
        catch (error) {
            console.error(error.message);
        }
        finally {
            console.log('finished !');
        }
    });
}
divideNumbers(10, 0);
divideNumbers('20', 10);
