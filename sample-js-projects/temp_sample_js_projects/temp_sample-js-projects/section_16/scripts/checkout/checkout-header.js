import { cart } from '../../data/cart.js';

export function renderCheckoutHeader() {

    let numberOfItems = 0;
    cart.forEach(cartItem => {
        numberOfItems += cartItem.quantity;
    });

    const html = `Items (${numberOfItems}):`;
    document.querySelector('.js-items-quantity').innerHTML = html;
}