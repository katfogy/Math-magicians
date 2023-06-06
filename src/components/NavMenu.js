import { NavLink } from 'react-router-dom';

const NavMenu = () => (
  <div className="Navmenu">
    <div className="container2">
      <ul className="menus">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>|</li>

        <li>
          <NavLink to="/calculator">Calculator</NavLink>
        </li>
        <li>|</li>

        <li>
          <NavLink to="/quotes">Quote</NavLink>
        </li>
      </ul>
    </div>
  </div>
);

export default NavMenu;
