import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { serviceDropdown } from './Navitems';
import './Nav.css';

function Dropdown() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <ul className={dropdown ? 'services-submenu clicked' : 'dropdown'}>
      {serviceDropdown.map((item) => {
        return (
          <li key={item.id} onClick={() => setDropdown(!dropdown)}>
            <Link
              to={item.path}
              className={item.cName}
              onClick={() => setDropdown(false)}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Dropdown;
