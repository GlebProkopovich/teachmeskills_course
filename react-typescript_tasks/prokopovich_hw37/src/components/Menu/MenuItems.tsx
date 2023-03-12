interface IMenuItem {
  itemText: string;
  itemLink: string;
}

const menuItems: IMenuItem[] = [
  { itemText: 'HOME', itemLink: '/home' },
  { itemText: 'ABOUT', itemLink: '/about' },
  { itemText: 'SERVICE', itemLink: '/service' },
  { itemText: 'PORTFOLIO', itemLink: '/portfolio' },
  { itemText: 'CONTACT', itemLink: '/contact' },
];

export { type IMenuItem, menuItems };
