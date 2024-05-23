import React from "react";
import "./hw10.css";
export default function Tailwin10() {
  return (
    <div>
      <div>
        <form action="">
          <div>
            <label htmlFor="">Username</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Username</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Username</label>
            <input type="text" />
          </div>

          <ul>
            <li className="li10">
              <input type="radio" />
              <p>Remember me</p>
            </li>
            <li className="li10">
              <input type="radio" />
              <p>Radio selection 1</p>
            </li>
            <li className="li10">
              <input type="radio" />
              <p>Radio selection 2</p>
            </li>
            <li className="li10">
              <input type="radio" />
              <p>Radio selection 3</p>
            </li>
          </ul>
          <select name="" id="">
            <option value="">Dropdown opt</option>
            <option value="">Dropdown opt 1</option>
            <option value="">Dropdown opt 2</option>
          </select>
          <div>
            <button>Cancel</button>
            <button>Next</button>
          </div>
        </form>
      </div>
    </div>
  );
}
