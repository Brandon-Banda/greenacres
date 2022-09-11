import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import { navItems } from './Navitems';
import Dropdown from './Dropdown';

function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className="navbar">
      {/* <Link to="/" className="navbar-logo">
          flux
        </Link> */}
      <ul className="navbar-nav">
        {navItems.map((item) => {
          if (item.title) {
            return (
              <li
                key={item.id}
                className="nav-item" // {item.cName}
                onClick={() => setDropdown(!dropdown)}
              >
                <a href="#/" className="icon-button">
                  {' '}
                  {
                    <svg viewBox="0 0 320 512">
                      <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
                    </svg>
                  }{' '}
                </a>
                {dropdown && <Dropdown />}
              </li>
            );
          }
          return (
            <li key={item.id} className={item.cName}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
