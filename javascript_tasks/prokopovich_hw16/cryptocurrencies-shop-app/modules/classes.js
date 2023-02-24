'use strict';

import { create } from "./utils.js";

class Crypto {
  constructor(id, title, imgSrc, amount) {
    this.id = id;
    this.title = title;
    this.imgSrc = imgSrc;
    this.amount = amount;
  }
}

class CryptoEl extends Crypto {
  constructor(id, title, imgSrc, amount) {
    super(id, title, imgSrc, amount);

    const divEl = create('div');
    const figureEl = create('figure');
    const imgParagraph = create('p');
    const imgEl = create('img');

    imgEl.src = this.imgSrc;

    divEl.className = 'crypto';
    divEl.append(figureEl);
    figureEl.append(imgParagraph);
    imgParagraph.append(imgEl);
    
    divEl.append(this.title);
    this.amount && divEl.append(` (${this.amount})`);
    divEl.id = this.id;
    divEl.title = this.title;
    divEl.imgSrc = this.imgSrc;
    return divEl;
  }
}

export { Crypto, CryptoEl };