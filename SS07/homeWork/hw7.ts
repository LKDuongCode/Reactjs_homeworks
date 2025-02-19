//khai báo lớp đối tượng
class Student {
    name: string;
    id: number;
    class1: string;
  
    constructor(name: string, id: number, class1: string) {
      this.name = name;
      this.id = id;
      this.class1 = class1;
    }
  }
  // khởi tạo mảng
  let students: Student[] = [
    new Student('huy', 1, 'A'),
    new Student('huyền', 2, 'B'),
    new Student('hoàng', 3, 'C'),
    new Student('vỹ', 4, 'A'),
    new Student('anh', 5, 'B')
  ];
  
  typeStudents(students, 'A');
  // hàm lọc điều kiện
  function typeStudents(arr: Student[], className: string): Student[] {
    let result: Student[] = arr.filter((e: Student) => {
      return e.class1 === className;
    });
    console.log(result);
    return result;
  }
