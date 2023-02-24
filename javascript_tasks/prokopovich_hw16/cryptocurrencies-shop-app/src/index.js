import { getRequestFromData, getAmountCryptosToBuy } from '../modules/otherFunctions.js';
import { renderCryptosInBasket } from '../modules/renderFunctions.js';

const url = 'https://63d68c2ae60d5743697ac98b.mockapi.io/api/boards/cryptocurrencies';

getAmountCryptosToBuy();

getRequestFromData(url);

renderCryptosInBasket();




