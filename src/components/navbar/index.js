import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { classToggler } from './../../lib/util.js';

function Navbar() {
    const [navOpen, setNavOpen] = useState(false);
    const handleHamburgerClick = () => setNavOpen(!navOpen);

    return (
      <header>
        <nav>
          <div className='container'>
            <div className='logo'>
                <Link to='/' onClick={() => setNavOpen(false)}>BBB</Link>
            </div>
            <div className={classToggler({ 'hamburger': true, 'open': navOpen })} onClick={handleHamburgerClick}>
              <span className="top buns"></span>
              <span className="bottom buns"></span>
            </div>
            <section className={classToggler({ 'hamburgerToggle': true, 'slideIn': navOpen })}>
              <ul className="dropDownList">
                <li className="dropDownListItem"><Link to='/about' className="dropDownLink" onClick={handleHamburgerClick}>About</Link></li>
                <li className="dropDownListItem"><a className="dropDownLink" href="https://www.linkedin.com/in/brianbixby1/" rel="noopener noreferrer" target="_blank">LinkedIn</a></li>
                <li className="dropDownListItem"><a className="dropDownLink" href="https://github.com/brianbixby" rel="noopener noreferrer" target="_blank">Github</a></li>
                <li className="dropDownListItem"><a className="dropDownLink" href="mailto:brianbixby0@gmail.com">Email</a></li>
              </ul>
            </section>
          </div>
        </nav>
      </header>
    );
}

export default Navbar;