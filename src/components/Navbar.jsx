import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-gradient-to-r from-slate-200 to-slate-400 text-transparent bg-clip-text font-semibold transition-all duration-300 ease-in-out"
      : "text-slate-200 font-semibold transition-all duration-300 ease-in-out hover:border-b-blackKnight";
  return (
    <nav className="grid grid-cols-12">
      <div className="flex justify-start col-span-10 ">
        <div className="flex gap-6">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/projects" className={linkClass}>
            Projects
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/services" className={linkClass}>
            Service
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
