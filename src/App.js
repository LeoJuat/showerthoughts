import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Explore from "./Pages/Explore";
import SignUp from "./Pages/Signup";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Messages from "./Pages/Messages";
import Notifications from "./Pages/Notifications";
import Profile from "./Pages/Profile";
import AuthContext from "./store/AuthContext";

const publicRoutes = [
  { path: "/home", element: <Home /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/login", element: <Login /> },
  { path: "*", element: <Navigate to="/home" /> },
];

const privateRoutes = [
  { path: "/home", element: <Home /> },
  { path: "/explore", element: <Explore /> },
  { path: "/notifications", element: <Notifications /> },
  { path: "/messages", element: <Messages /> },
  { path: "/profile", element: <Profile /> },
  { path: "*", element: <Navigate to="/home" /> },
];

const mapRoutes = (routes) => {
  return routes.map((route) => {
    return <Route key={route.path} path={route.path} element={route.element} />;
  });
};

function App() {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <Routes>
      {!isLoggedIn ? mapRoutes(publicRoutes) : mapRoutes(privateRoutes)}
    </Routes>
  );
}

export default App;
