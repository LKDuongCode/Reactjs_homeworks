

async function calculateBMI(weight:any,height:any) {
   
        try {
          
          if (typeof weight !== 'number' || typeof height !== 'number') {
            throw new Error('Cân nặng và chiều cao phải là số');
          }
      
          else if (weight <= 0 || height <= 0) {
            throw new Error('Cân nặng và chiều cao phải lớn hơn 0');
          }

          else if (Number.isNaN(weight) ||Number.isNaN(height)){
            throw new Error('NaN')
          }
      
          let bmi = weight / (height * height);
          console.log(bmi);
        } catch (error:any) {
          console.error('Lỗi:', error.message);
          return null;
        }
      
}

calculateBMI(70,1.75);
calculateBMI('70',1.75);