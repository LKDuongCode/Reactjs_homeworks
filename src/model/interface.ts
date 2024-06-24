export type Count = number;
export type ArrRandom = number[];
export type StatusTheme = boolean;
export type DisplayMode = string;
export type SideBar = boolean;
export type Language = string;
export type ProtectedUserType = {
    id:number;
    name:string;
    status:boolean;
}
export type UserLoginType = {
    id:number;
    name:string;
    pass:string;
    email:string;
}


export interface Combine  {
    count:Count;
    nums:ArrRandom;
    theme:StatusTheme;
    displayMode:DisplayMode;
    sideBar:SideBar;
    languages:string;
    protectedUser:ProtectedUserType[];
    loginUsers:UserLoginType[];
}