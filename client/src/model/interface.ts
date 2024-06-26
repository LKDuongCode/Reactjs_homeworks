export type Task = {
    id:number;
    name:string;
    status:boolean;
}

//kiểu dữ liệu cho state;
export type StateType = {
    loading:boolean;
    data:any;
    error:string|null;
}
// kiểu dữ liệu chung
export interface CombineType{
    tasksList:StateType;
}