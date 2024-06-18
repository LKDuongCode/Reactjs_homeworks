//init
let accounts: any = [
  {
    id: 1,
    email: "duong",
    pass: "123",
  },
];
//function
let signupReducer = (state = accounts, action: any) => {
  switch (action.type) {
    case "SIGNUP":
      // kiểm tra tài khoản đã tồn tại chưa
      state.map((item: any, idex: number) => {
        if (item.email === action.newAcc.email) {
          alert("Tài khoản đã tồn tại !");
          return false;
        } else {
          console.log([...state, action.newAcc]);
          console.log(" Đăng kí thành công !");
          return [...state, action.newAcc];
        }
      });

    default:
      return state;
  }
};

export default signupReducer;
