import React from 'react';
import { menuItems } from './MenuItems';
import Search from '../Search/Search';
import SignIn from '../SignInButton/SignInButton';
import './Menu.css';

interface IMenu {
  isOpen: boolean;
  onChange: any;
}

const Menu: React.FC<IMenu> = ({ isOpen, onChange }) => {
  return (
    <div className={`Menu ${isOpen && 'open'}`}>
      <div className="Menu-items">
        {menuItems.map((item) => (
          <a href={item.itemLink} key={item.itemText}>
            {item.itemText}
          </a>
        ))}
        <div className="bottom-pannel">
          <span
            className="material-symbols-outlined btn-close"
            onClick={() => onChange(false)}
          >
            close
          </span>
          <div className="empty-space"></div>
          <Search />
          <SignIn />
        </div>
        <div className="additional-signIn">
          <SignIn />
        </div>
      </div>
    </div>
  );
};

export default Menu;
