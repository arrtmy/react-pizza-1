import React from 'react';

import cartEmptyImg from '../../assets/img/empty-cart.png';
import { Link } from 'react-router-dom';

const CartEmpty = () => {
  return (
    <>
      <div class="cart cart--empty">
        <h2>
          <span>Корзина пустая😞</span>
        </h2>
        <img src={cartEmptyImg} alt="Empty cart" />
        <Link to="/" class="button button--black">
          <span>Вернуться назад</span>
        </Link>
      </div>
    </>
  );
};

export default CartEmpty;
