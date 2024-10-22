import React from 'react';

import cartEmptyImg from '../../assets/img/empty-cart.png';
import { Link } from 'react-router-dom';

const CartEmpty: React.FC = () => (
  <div className="cart cart--empty">
    <h2>
      <span>Корзина пустая😞</span>
    </h2>
    <img src={cartEmptyImg} alt="Empty cart" />
    <Link to="/" className="button button--black">
      <span>Вернуться назад</span>
    </Link>
  </div>
);

export default CartEmpty;
