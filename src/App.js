import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import * as path from "./constants/pathContants";
import Login from "./Screens/Unauthorized/Login";
import Dashboard from "./Screens/Authorized/Dashboard";
import PageNotFound from "./Screens/Unauthorized/PageNotFound";
import SignUp from "./Screens/Unauthorized/SignUp";
import { useUserAuth } from "./context/UserAuthContext";

function App() {
  const { user } = useUserAuth();
  return (
    <div className="App">
      <Routes>
        <Route path={path.LOGIN} element={<Login />} />
        <Route path={path.DASHBOARD} element={<Dashboard />} />
        <Route path={path.NO_MATCH} element={<PageNotFound />} />
        <Route
          path={path.ADMIN}
          element={<Navigate to={user ? path.LOGIN : path.DASHBOARD} />}
        />
        <Route
          path={path.BASE}
          element={<Navigate to={user ? path.LOGIN : path.DASHBOARD} />}
        />
        <Route path={path.SIGN_UP} element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
