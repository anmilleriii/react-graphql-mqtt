import { NavLink } from "react-router-dom";

let activeStyle = {
  color: "var(--active)",
};

export const NavigationBar = (): JSX.Element => {
  return (
    <>
      <div className="flex flex-row w-100 justify-start f6 outline-0 ">
        <NavLink
          className="link dim gray"
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          home
        </NavLink>{" "}
        <span className="o-50">

        &nbsp;|&nbsp;
        </span>
        <NavLink
          className="link dim gray outline-0"
          to="/about"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          about
        </NavLink>
      </div>
    </>
  );
};
