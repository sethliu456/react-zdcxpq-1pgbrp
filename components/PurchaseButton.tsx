import * as React from 'react';
import { formatPrice } from './../utility/formatting';

const PurchaseButton = ({ price, link }) => {
  return (
    <div>
      <a className="ss-price__button" href={link}>
        <strong>Purchase</strong> &#xb7; {formatPrice(price, 0)}
      </a>
      <p className="text-gray-500 text-sm text-center">
        Or pay in installments of $250/month
      </p>
    </div>
  );
};

export default PurchaseButton;
