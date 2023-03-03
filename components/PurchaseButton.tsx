import * as React from 'react';
import { formatPrice } from './../utility/formatting';

const PurchaseButton = ({ price, link }) => {
  return (
    <div>
      <a className="ss-price__button md:m-auto" href={link}>
        <strong>Purchase</strong> &#xb7; {formatPrice(price, 0)}
      </a>
      <div className="text-gray-500 text-sm text-center">
        Or pay in installments of $250/month
      </div>
    </div>
  );
};

export default PurchaseButton;
