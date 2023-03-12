import React, { useState } from 'react';
import Menu from '../Menu/Menu';
import Searchbar from '../Searchbar/Searchbar';
import Search from '../Search/Search';
import SignIn from '../SignIn/SignIn';
import './Navigation.css';

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="nav-container">
      <span
        className="material-symbols-outlined btn-menu"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        menu
      </span>
      <Menu isOpen={isOpen} onChange={setIsOpen}></Menu>
      <Searchbar />
      <Search />
      <SignIn />
    </div>
  );
};

export default Nav;
