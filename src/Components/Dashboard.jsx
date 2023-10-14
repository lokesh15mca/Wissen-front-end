import axios from "axios";
import { useState } from "react";
export const Dashboard = ({ tokan }) => {
  var [userData, setUserData] = useState();
  const getData = () => {
    axios("https://reqres.in/api/unknown", {
      headers: { Authorization: tokan, "Content-type": "application/json" }
    }).then((res) => {
      setUserData(res.data.data);
    });
  };
  getData();
  return (
    <>
      {!userData ? (
        "Loading..."
      ) : (
        <div>
          {userData.map((e) => {
            return (
              <div>
                <p>
                  {e.id} - {e.name}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
