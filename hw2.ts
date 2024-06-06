async function divideNumbers(a:any,b:any) {
    //sử dụng try - catch - finally
    /*
    try: Khối code này chứa các câu lệnh có khả năng gây ra ngoại lệ.
    catch: Khối code này được thực thi khi có ngoại lệ xảy ra trong khối try.
    finally: Khối code này luôn được thực thi, không phụ thuộc vào việc có ngoại lệ xảy ra hay không.
    */
    try {
         if((a&&b !== 0)&&(typeof a&&b === 'number')){
            a>b? console.log(a/b) : console.log(b/a)
         }
         else{
            throw new Error('Không chia hết được cho 0 hoặc dữ liệu truyền vào phải là số.')
         }
      } catch (error: any) {
        console.error(error.message);
      } finally {
        console.log('finished !');
      }
}

divideNumbers(10,0);
divideNumbers('20',10);