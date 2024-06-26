* thư viện:{
    (client){
        cài dự án
        tailwind:
        npm install -D tailwindcss postcss autoprefixer
        npx tailwindcss init -p
        
        npm i axios
        npm i @reduxjs/toolkit react-redux : cài redux toolkit
        npm i react-router-dom : cài router

    }

    (server){
        npm init --y
        npm install -g json-server@0.17.4 => json-server --w db.json --p 8000
        git ignore => chứa node module để không đẩy lên.
    }
}