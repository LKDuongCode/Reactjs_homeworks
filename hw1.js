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
function calculateBMI(weight, height) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (typeof weight !== 'number' || typeof height !== 'number') {
                throw new Error('Cân nặng và chiều cao phải là số');
            }
            else if (weight <= 0 || height <= 0) {
                throw new Error('Cân nặng và chiều cao phải lớn hơn 0');
            }
            else if (Number.isNaN(weight) || Number.isNaN(height)) {
                throw new Error('NaN');
            }
            let bmi = weight / (height * height);
            console.log(bmi);
        }
        catch (error) {
            console.error('Lỗi:', error.message);
            return null;
        }
    });
}
calculateBMI(70, 1.75);
calculateBMI('70', 1.75);
