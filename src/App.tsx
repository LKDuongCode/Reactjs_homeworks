import React from "react";
import Profile from "./components/hw1/Profile";
import ListUser from "./components/hw2/ListUser";
import ProductList from "./components/hw3/ProductList";
import Counter from "./components/hw4/Counter";
import GenerateRandom from "./components/hw5/GenerateRandom";
import ChangeState from "./components/hw6/ChangeState";
import ChangeBackground from "./components/hw7/ChangeBackground";
import { Route, Routes } from "react-router-dom";
import Home from "./components/hw9+10/Home";

export default function App() {
  return (
    <div>
      {/* <Profile></Profile> */}
      {/* <ListUser></ListUser> */}
      {/* <ProductList></ProductList> */}
      {/* <Counter></Counter> */}
      {/* <GenerateRandom></GenerateRandom> */}
      {/* <ChangeState></ChangeState> */}
      {/* <ChangeBackground></ChangeBackground> */}
      <Home></Home>
    </div>
  );
}
