import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import baseURL from "./api";
import User from "./model/User";
import debounce from "lodash.debounce";
/*
https://www.npmjs.com/package/lodash.debounce
link thư viện để hạn chế số lần call api và delay tìm kiếm.

https://swiperjs.com/demos#navigation
link tạo slide mượt như bootstrap.

https://www.youtube.com/watch?v=WGapGKz8n7E
link bài giảng.
*/
export default function App() {
  //state input name
  let [inputValue, setInputValue] = useState<string>("");

  // taọ state lưu trữ data
  let [users, setUsers] = useState<User[]>([]);

  //state lưu data trang hiện tại khi chuyển trang
  let [currentPage, setCurrentPage] = useState<number>(1);

  //state số lượng bản ghi trong một trang.
  let [pageSize, setPageSize] = useState<number>(10);

  //state tổng số trang
  let [totalPage, setTotalPage] = useState<number>(0);

  //cần dùng một hàm để kiểm soát việc gọi dữ liệu
  let loadData = () => {
    //gọi dữ liệu trả về obj
    baseURL
      .get(
        `/users?name_like=${inputValue}&_page=${currentPage}&_limit=${pageSize}`
      )
      .then((response: AxiosResponse) => {
        //truy cập vào key = data lấy dữ liệu
        //cập nhật danh sách user vào state
        setUsers(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //gọi dữ liệu khi cpn mount vào dom
  useEffect(() => {
    loadData();
  }, []);

  //gọi khi nhập giá trị tìm kiếm, thay đổi số trang và chuyển trang.
  useEffect(() => {
    //tạo độ trễ khi tìm kiếm sử dụng thư viện debounce
    // sau bao nhiêu giây thì bắt đầu gọi api
    let delaySearch = debounce(loadData, 300);
    delaySearch();

    //clean up function giúp giải phóng bộ nhớ
    return () => {
      delaySearch.cancel();
    };
  }, [inputValue]);

  // lấy danh sách tất cả user nhưng không có phân trang
  useEffect(() => {
    baseURL.get("/users").then((res: AxiosResponse) => {
      //tính toán số trang : Tổng / số lượng trên 1 trang.
      let sumPage = res.data.lengh / pageSize;

      // sau đó cập nhật lại số trang
      setTotalPage(sumPage);
    });
  }, []);

  // hàm chuyển đến trang tiếp theo
  let handleNextPage = () => {
    //nếu trang hiện tại < tổng số trang
    if (currentPage < totalPage) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  //hàm quay lại trang trước đó
  let handlePrevPage = () => {
    //nếu trang hiện tại < tổng số trang
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  //hàm render danh sách các nút chuyển trang
  let handleRenderPage = () => {
    let pages: number[] = [];
    for (let i = 1; i <= totalPage; i++) {
      pages.push(i);
    }
    console.log(pages);
    return (
      <>
        {pages.map((page: number, index: number) => {
          <button onClick={() => setCurrentPage(page)} key={index}>
            {page}
          </button>;
        })}
      </>
    );
  };

  console.log(handleRenderPage());
  return (
    <div>
      <div>
        <h2 className="">User Manage</h2>
        {/* tìm kiếm theo tên */}
        <input
          type="text"
          placeholder="Search by name..."
          onChange={(e) => setInputValue(e.target.value)}
        />
        <table border={1}>
          <thead>
            <tr>
              <th>STT</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Date Of Birth</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {/* render ra */}
            {users.map((item: User, index: number) => {
              return (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.gender}</td>
                  <td>{item.born}</td>
                  <td>{item.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="flex gap-3">
          {handleRenderPage()}
          <button onClick={handlePrevPage}>Prev</button>

          <button onClick={handleNextPage}>Next</button>
        </div>
      </div>
    </div>
  );
}
