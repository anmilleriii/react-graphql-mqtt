import { NavLink } from "react-router-dom";

let activeStyle = {
  textDecoration: "underline",
};


export const NavigationBar = (): JSX.Element => {
  return (
    <>
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        home
      </NavLink> |  
      <NavLink
        to="/about"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        about
      </NavLink>
      <h2 className="">asdf</h2>
      <div className=""></div>
    </>
  );
};
