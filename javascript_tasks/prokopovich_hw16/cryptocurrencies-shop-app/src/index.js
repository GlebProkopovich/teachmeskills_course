'use strict';

import { CryptoEl } from '../modules/classes.js';
import { selectOne, selectAll } from '../modules/utils.js';
import { getCryptosToBuy } from '../modules/utils.js';

const url = 'https://63d68c2ae60d5743697ac98b.mockapi.io/api/boards/cryptocurrencies';

async function getElsFromData(url) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    renderCryptosFromData(result);

    const imgs = selectAll('img');

    imgs.forEach(i => i.draggable = false);

    const cryptos = selectAll('.crypto');
    cryptos.forEach(i => {
      i.draggable = true;
      i.addEventListener('dragstart', (i) => {
        console.log(i.target);



      });
    });


    const basket = selectOne('#basket-container');
    basket.addEventListener('dragover', e => e.preventDefault())
    basket.addEventListener('drop', (e) => {
      console.log(e.target);
    })



  } catch(err) {
    console.log(err);
  }
}

getElsFromData(url);

function renderCryptosFromData(arr) {
  arr.forEach(i => {
    const cryptoEl = new CryptoEl(i.id, i.title, i.imgSrc);
  })
}





