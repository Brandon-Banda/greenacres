import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { serviceDropdown } from './Navitems';
import './Nav.css';
import ClickAwayListener from '@mui/material/ClickAwayListener';

function Dropdown() {
  const [dropdown, setDropdown] = useState(false);

  const clickAwayHandler = () => {
    // setDropdown(!dropdown);
    console.log('CLicked away');
  };

  return (
    <ClickAwayListener onClickAway={clickAwayHandler}>
      <ul className={dropdown ? 'services-submenu clicked' : 'dropdown'}>
        {serviceDropdown.map((item) => {
          return (
            <li key={item.id} onClick={() => setDropdown(!dropdown)}>
              <Link
                to={item.path}
                className={item.cName}
                //onClick={() => setDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </ClickAwayListener>
  );
}

export default Dropdown;
