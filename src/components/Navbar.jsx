import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const linkClass = ({ isActive }) => (isActive ? 'text-gray-500' : '');
  return (
    <nav className="grid grid-cols-12">
      <div className="flex justify-start col-span-10">
        <div className="flex  gap-5">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/project" className={linkClass}>
            Project
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
        </div>
      </div>
      <div className="flex justify-end col-span-2">
        <div className="flex justify-center">
          <NavLink>DarkMode</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
