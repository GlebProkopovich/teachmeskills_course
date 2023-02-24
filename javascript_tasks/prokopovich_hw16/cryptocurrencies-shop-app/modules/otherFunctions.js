import { Crypto } from "./classes.js";
import { selectAll, selectOne, getCryptosToBuy, save, create } from "./utils.js";
import { renderCryptos, renderCryptosInBasket } from "./renderFunctions.js";
  
const imgs = selectAll('img');
const basket = selectOne('#basket-container');
const goodsInShop = selectOne('#goodsInShop');
let cryptosToBuy = getCryptosToBuy();
let currentCrypto = null;

async function getRequestFromData(url) {
  try {
    const response = await fetch(url);
    const result = await response.json();

    function pushCryptoToArray(crypto) {
      cryptosToBuy.push(new Crypto(crypto.id, crypto.title, crypto.imgSrc, 1));
    }

    function dragToBasket(crypto) {
      currentCrypto = crypto;
    }

    function addToBasket(currentCrypto) {
      if (cryptosToBuy.length) {
        let indexIdenticalCrypto = cryptosToBuy.findIndex(crypto => crypto.id === currentCrypto.id);
        if (indexIdenticalCrypto > -1) {
          let identicalCrypto = cryptosToBuy[indexIdenticalCrypto];
          identicalCrypto = {...identicalCrypto, amount: ++identicalCrypto.amount};
        } else pushCryptoToArray(currentCrypto);
      } else pushCryptoToArray(currentCrypto);
      
      save(cryptosToBuy);
      renderCryptosInBasket();
      getAmountCryptosToBuy();
    }

    renderCryptos(result, goodsInShop, false); 
    const cryptos = selectAll('.crypto');

    imgs.forEach(i => i.draggable = false); 

    cryptos.forEach(i => { 
      i.draggable = true;
      i.addEventListener('dragstart', () => {
        dragToBasket(i)});
    });

    basket.addEventListener('dragover', e => e.preventDefault()); 
    basket.addEventListener('drop', () => addToBasket(currentCrypto));
  } catch (err) {
    console.log(err);
  }
}

function addOverFlow(crypto) {
  const overflow = create('div');
  overflow.className = 'overflow';
  overflow.append('Delete');
  overflow.addEventListener('click', () => deleteCrypto(crypto.id));
  crypto.append(overflow);
}

function deleteCrypto(currentCryptoId) {
  cryptosToBuy = cryptosToBuy.filter(crypto => crypto.id !== currentCryptoId);
  save(cryptosToBuy);
  renderCryptosInBasket();
  getAmountCryptosToBuy();
}

function getAmountCryptosToBuy() {
  const cryptosToBuy = getCryptosToBuy();
  const amount = document.querySelector('#cryptosAmount');
  amount.innerHTML = '';
  amount.append(cryptosToBuy.length);
}

export { getRequestFromData, addOverFlow, deleteCrypto, getAmountCryptosToBuy };