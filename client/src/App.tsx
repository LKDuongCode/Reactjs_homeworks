import MainPost from "./components/MainPost";
import { Route, Routes } from "react-router-dom";
import Hw3 from "./components/Hw3";
import NotFound from "./components/NotFound";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Hw3></Hw3>}></Route>
        <Route path="/list-post" element={<MainPost></MainPost>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </>
  );
}
