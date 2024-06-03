import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Employee() {
  let [searchTerm, setSearchTerm] = useState("");
  let navigate = useNavigate();

  const location = useLocation();

  const employee = new URLSearchParams(location.search).get("employeeName");
  console.log(employee);
  const handleSearch = () => {
    navigate(`/employee?employeeName=${searchTerm}`);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Employee;
