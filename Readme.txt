thư viện sử dụng
1.tailwind : https://tailwindcss.com/docs/guides/vite
npm install -D tailwindcss postcss autoprefixer
2.react-router-dom : npm i react-router-dom
3.axios : npm i axios
4.json-server : npm install -g json-server@0.17.4
5.redux toolkit : https://redux-toolkit.js.org/introduction/why-rtk-is-redux-today 
npm install @reduxjs/toolkit react-redux


cấu trúc thư mục:
ALL
{
    client:{
        node modules
        scr:{
            api: chứa baseURL
            components: chứa cpn
            model: chứa định nghĩa kiểu dữ liệu.
            pages: chứa các trang.
            service:{ chứa các hàm API
                sellService:{
                    getSell.service.ts
                    updateSell.service.ts
                }
                cartService
            }
            store:{
                reducers:{
                    cartReducer.ts
                    sellReducer.ts
                }
                store.ts
            }
            App.tsx
            main.tsx
            ...
        }
    }

    server:{
        node modules
        db.json
        .gitignore
    }

    Readme.txt
}
