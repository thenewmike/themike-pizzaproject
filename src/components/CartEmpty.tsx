import React from 'react';
import { Link } from 'react-router-dom';
import cartEmptyImg from '../assets/img/empty-cart.png';

const CartEmpty: React.FC = () => (
  <div className="cart cart--empty">
    <h2>
      Кошик порожній <span>😕</span>
    </h2>
    <p>
      Скоріше всього, ви ще не замовляли піццу.
      <br />
      Для того, щоб замовити піццу перейдіть на головну сторінку.
    </p>
    <img src={cartEmptyImg} alt="Empty cart" />
    <Link to="/" className="button button--black">
      <span>Повернутись назад</span>
    </Link>
  </div>
);
export default CartEmpty;
