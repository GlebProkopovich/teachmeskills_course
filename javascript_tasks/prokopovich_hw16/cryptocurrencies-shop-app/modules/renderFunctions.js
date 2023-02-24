import { CryptoEl } from "./classes.js";
import { selectOne, getCryptosToBuy } from "./utils.js";
import { addOverFlow } from "./otherFunctions.js";

const goodsInBasket = selectOne('#goodsInBasket');

function renderCryptos(arr, parentEl, shouldAddOverflow = true) {
  parentEl.innerHTML = '';
  arr.forEach(i => {
    const cryptoEl = new CryptoEl(i.id, i.title, i.imgSrc, i.amount);
    parentEl.append(cryptoEl);
    shouldAddOverflow && addOverFlow(cryptoEl);
  })
}

function renderCryptosInBasket() {
  renderCryptos(getCryptosToBuy(), goodsInBasket);
}

export { renderCryptos, renderCryptosInBasket };
