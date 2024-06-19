import React from "react";
import DeleteBtn from "./DeleteBtn";
import UpdateBtn from "./UpdateBtn";
import BookStatus from "./BookStatus";
import { useSelector } from "react-redux";

interface Book {
  id: number;
  bookName: string;
  lendStudent: string;
  lendDate: string;
  returnDate: string;
  status: string;
}

export default function BookItem() {
  //get data
  let books = useSelector((state: any) => {
    return state.renderReducer;
  });

  return (
    <>
      {books.map((item: Book, index: number) => {
        return (
          <tr key={index}>
            <td className="text-center">{index + 1}</td>
            <td>{item.bookName}</td>
            <td>{item.lendStudent}</td>
            <td className="text-center">{item.lendDate}</td>
            <td className="text-center">{item.returnDate}</td>
            <td className="text-center">
              <BookStatus status={item.status}></BookStatus>
            </td>
            <td className="flex gap-3">
              <UpdateBtn></UpdateBtn>
              <DeleteBtn></DeleteBtn>
            </td>
          </tr>
        );
      })}
    </>
  );
}
