'use strict';

const create = el => document.createElement(el);
const selectOne = el => document.querySelector(el);
const selectAll = el => document.querySelectorAll(el);
const getCryptosToBuy = () => JSON.parse(localStorage.getItem('cryptosToBuy')) || [];
const save = el => localStorage.setItem('cryptosToBuy', JSON.stringify(el));

export { create, selectOne, selectAll, getCryptosToBuy, save };