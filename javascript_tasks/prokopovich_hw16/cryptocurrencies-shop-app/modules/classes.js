'use strict';

import { create, selectOne, selectAll, getCryptosToBuy } from "./utils.js";

class Crypto {
  constructor(id, title, imgSrc) {
    this.id = id;
    this.title = title;
    this.imgSrc = imgSrc;
  }
}

class CryptoEl extends Crypto {
  constructor(id, title, imgSrc) {
    super(id, title, imgSrc);

    const divEl = create('div');
    const figureEl = create('figure');
    const imgParagraph = create('p');
    const imgEl = create('img');

    imgEl.src = this.imgSrc;

    divEl.className = 'crypto';
    divEl.append(figureEl);
    figureEl.append(imgParagraph);
    imgParagraph.append(imgEl);

    const goodsInShop = selectOne('#goodsInShop');
    goodsInShop.append(divEl);

    divEl.append(this.title);
    divEl.id = this.id;
  }
}

export { Crypto, CryptoEl };