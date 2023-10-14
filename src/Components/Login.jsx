import { useState, useEffect } from "react";
import axios from "axios";
export const Login = ({ handelTokan }) => {
  var jsonData = { email: "", password: "" };
  var [inputData, setInputData] = useState(jsonData);
  const SubmitDetails = (e) => {
    e.preventDefault();
    console.log("axios function", inputData);
    axios
      .post("https://reqres.in/api/login", inputData)
      .then((res) => {
        console.log(res.data.token);
        if (res.data.token.length < 0 || res.data.error) {
          alert("Invalid username /password");
        } else {
          console.log("Details page");
          alert("Successfully logged-in");
          handelTokan(res.data.token);
        }
      })
      .catch((e) => {
        alert("Invalid username /password");
        console.log(e);
      });
  };
  const handalChnage = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div>
        <img src="https://drive.google.com/uc?export=view&id=1hvRAGrdq0SqFBZApx2--IcuDf-DOmOBH" />
        <div className={"formdata"}>
          <h4>Hello there, Sign in to continue</h4>

          <div>
            <form>
              <div>
                <div className={"labeltext"}>
                  <label>Email</label>
                </div>
                <div>
                  <input
                    className="inputdata"
                    type="text"
                    name="email"
                    value={inputData.email}
                    onChange={handalChnage}
                  />
                </div>
                <div></div>
              </div>
              <div>
                <div className={"labeltext"}>
                  <label>Password</label>
                </div>
                <div>
                  <input
                    className="inputdata"
                    type="password"
                    name="password"
                    value={inputData.password}
                    onChange={handalChnage}
                  />
                </div>
                <div className={"termsandcond"}>
                  <div className={"radiobtn"}>
                    <input type="radio" />
                  </div>
                  <div>
                    <p className="paradata">
                      By creating or logging into an account, you
                      <br /> are agreeing with our{" "}
                      <span>Terms & Conditions </span> <br />
                      and
                      <span> Privacy Policys.</span>
                    </p>
                  </div>
                </div>
              </div>
              <button className="btn" onClick={SubmitDetails}>
                Next
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
