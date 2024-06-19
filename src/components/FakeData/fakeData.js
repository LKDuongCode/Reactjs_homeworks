// redux không dùng được với json nên dữ liệu sẽ được lưu lên local storage.
// dữ liệu gốc.

function generateRandomId() {
  return Math.ceil(Math.random() * 1000);
}

const books = [
  {
    id: generateRandomId(),
    bookName: "Dark nhân tâm",
    lendStudent: "David",
    lendDate: "12/02/2012",
    returnDate: "20/10/2012",
    status: "Đã trả",
  },
  {
    id: generateRandomId(),
    bookName: "Nhà giả kim",
    lendStudent: "Alice",
    lendDate: "15/03/2013",
    returnDate: "22/11/2013",
    status: "Đã trả",
  },
  {
    id: generateRandomId(),
    bookName: "Người truyền ký ức",
    lendStudent: "Bob",
    lendDate: "05/04/2014",
    returnDate: "13/12/2014",
    status: "Đã trả",
  },
  {
    id: generateRandomId(),
    bookName: "Đắc nhân tâm",
    lendStudent: "Charlie",
    lendDate: "25/05/2015",
    returnDate: "30/01/2016",
    status: "Đã trả",
  },
  {
    id: generateRandomId(),
    bookName: "Chiến binh cầu vồng",
    lendStudent: "Daisy",
    lendDate: "10/06/2016",
    returnDate: "18/02/2017",
    status: "Đã trả",
  },
  {
    id: generateRandomId(),
    bookName: "Bí mật của Naoko",
    lendStudent: "Edward",
    lendDate: "20/07/2017",
    returnDate: "28/03/2018",
    status: "Đã trả",
  },
  {
    id: generateRandomId(),
    bookName:
      "Thầy thuốc giỏi cỡ nào cũng không thắng nổi bệnh nhân không muốn sống",
    lendStudent: "Fiona",
    lendDate: "30/08/2018",
    returnDate: "07/04/2019",
    status: "Đã trả",
  },
  {
    id: generateRandomId(),
    bookName: "Con đường hồi giáo",
    lendStudent: "George",
    lendDate: "10/09/2019",
    returnDate: "18/05/2020",
    status: "Đã trả",
  },
  {
    id: generateRandomId(),
    bookName: "Đi tìm lẽ sống",
    lendStudent: "Hannah",
    lendDate: "20/10/2020",
    returnDate: "28/06/2021",
    status: "Đã trả",
  },
  {
    id: generateRandomId(),
    bookName: "Đời ngắn đừng ngủ dài",
    lendStudent: "Ivan",
    lendDate: "30/11/2021",
    returnDate: "08/07/2022",
    status: "Đã trả",
  },
];

localStorage.setItem("books", JSON.stringify(books));

// localStorage.setItem('books',JSON.stringify([]));
