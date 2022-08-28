import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import SignIn from "./pages/Signin";
import SignUp from "./pages/Signup";
import Cards from "./pages/cards";
import Profile from "./pages/profile";
import { AuthAtom } from "./state";

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [auth, setAuth] = useRecoilState(AuthAtom);
  useEffect(() => {
    if (!!auth?.accessToken === false) {
      const data = localStorage.getItem("userData");
      if (!!data === true) {
        try {
          const parsed = JSON.parse(data);
          if (!!parsed.accessToken === true) {
            setAuth(parsed);
            navigate("/profile");
          } else {
            Navigate("/login");
          }
        } catch (error) {
          navigate("/login");
        }
      }
      navigate("/sign_up");
    } else if (!!auth?.accessToken === true) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  }, [auth]);
  return (
    <div className="app">
      <Routes>
        <Route path="/sign_up" element={<SignUp />} />
        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cards" element={<Cards />} />
      </Routes>
    </div>
  );
}
