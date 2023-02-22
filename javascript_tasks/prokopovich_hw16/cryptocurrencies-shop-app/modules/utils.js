'use strict';

const create = el => document.createElement(el);
const selectOne = el => document.querySelector(el);
const selectAll = el => document.querySelectorAll(el);
const getCryptosToBuy = el => JSON.parse(localStorage.getItem('cryptosToBuy')) || [];

export { create, selectOne, selectAll, getCryptosToBuy };