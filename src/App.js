import "./styles.css";
import { useState, useEffect } from "react";
import { Login } from "./Components/Login";
import { Dashboard } from "./Components/Dashboard";
export default function App() {
  var [tokan, setTokan] = useState("");
  const handelTokan = (value) => {
    setTokan(value);
  };
  return (
    <>
      {tokan ? (
        <Dashboard tokan={tokan} />
      ) : (
        <Login handelTokan={handelTokan} />
      )}
    </>
  );
}
