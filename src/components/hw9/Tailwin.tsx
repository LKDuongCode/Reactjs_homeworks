import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import {
  faPenSquare,
  faRightFromBracket,
  faImage,
  faPager,
  faComment,
  faList,
  faMoon,
  faScrewdriverWrench,
  faUsers,
  faGear,
  faToggleOn,
} from "@fortawesome/free-solid-svg-icons";

import "./hw9.css";

export default function Tailwin9() {
  return (
    <div>
      <div className="bg-black rounded-md p-2 w-[300px] flex flex-col gap-8 ">
        <div>
          <div className="size-14 bg-yellow-600 flex items-center justify-center rounded-md font-bold text-lg text-white">
            Logo
          </div>
        </div>
        <ul className="flex flex-col gap-2">
          <li className="flex gap-1">
            <div>
              <FontAwesomeIcon icon={faHome} color="white"></FontAwesomeIcon>
            </div>
            <p>Dashboard</p>
          </li>
          <li className="flex gap-1 bg-slate-500">
            <div>
              <FontAwesomeIcon
                icon={faPenSquare}
                fontSize={20}
              ></FontAwesomeIcon>
            </div>
            <p>Post</p>
          </li>
          <li className="flex gap-1">
            <div>
              <FontAwesomeIcon icon={faImage} fontSize={18}></FontAwesomeIcon>
            </div>
            <p>Media</p>
          </li>
          <li className="flex gap-1">
            <div>
              <FontAwesomeIcon icon={faPager} fontSize={18}></FontAwesomeIcon>
            </div>
            <p>Pages</p>
          </li>
          <li className="flex gap-1">
            <div>
              <FontAwesomeIcon icon={faComment} fontSize={18}></FontAwesomeIcon>
            </div>
            <p>Comments</p>
          </li>
          <li className="flex gap-1">
            <div>
              <FontAwesomeIcon icon={faList} fontSize={18}></FontAwesomeIcon>
            </div>
            <p>Appearance</p>
          </li>
          <li className="flex gap-1">
            <div>
              <FontAwesomeIcon
                icon={faShoppingBag}
                fontSize={18}
              ></FontAwesomeIcon>
            </div>
            <p>Plugins</p>
          </li>
          <li className="flex gap-1">
            <div>
              <FontAwesomeIcon icon={faUsers} fontSize={18}></FontAwesomeIcon>
            </div>
            <p>Users</p>
          </li>
          <li className="flex gap-1">
            <div>
              <FontAwesomeIcon icon={faGear} fontSize={18}></FontAwesomeIcon>
            </div>
            <p>Settings</p>
          </li>
          <li className="flex gap-1">
            <div>
              <FontAwesomeIcon
                icon={faScrewdriverWrench}
                fontSize={18}
              ></FontAwesomeIcon>
            </div>
            <p>Tools</p>
          </li>
        </ul>
        <ul>
          <li className="flex gap-1">
            <div>
              <FontAwesomeIcon icon={faMoon} fontSize={26}></FontAwesomeIcon>
            </div>
            <p>Light Mode</p>
            <div className="pl-16">
              <FontAwesomeIcon
                icon={faToggleOn}
                fontSize={30}
              ></FontAwesomeIcon>
            </div>
          </li>
          <li className="flex gap-1">
            <div>
              <FontAwesomeIcon icon={faRightFromBracket}></FontAwesomeIcon>
            </div>
            <p>Logout</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
