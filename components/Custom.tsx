import { dividerClasses } from '@mui/material';
import { useState } from 'react';
import CustomItem from './CustomItem';
import PurchaseButton from './PurchaseButton';
import * as React from 'react';
import customPurchaseItems from './../utility/customPurchaseItems';
import { formatPrice } from './../utility/formatting';

const Custom = (props) => {
  type selectedItem = {
    itemName: string;
    count: number;
  };

  const [selectedItems, setSelectedItems] = useState<selectedItem[]>([]);

  const getSumPrice = () => {
    return selectedItems.reduce((sum, selectedItem) => {
      let pricePerUnit = getItemPrice(selectedItem.itemName);
      return sum + selectedItem.count * pricePerUnit;
    }, 0);
  };

  const getItemPrice = (itemName) => {
    return customPurchaseItems.find((el) => el.itemName == itemName).price;
  };

  const displaySelectedItems = () => {
    return (
      <div className="ss-custom-total-display">
        <h2>Your selections</h2>
        <ul className="list-none">
          {selectedItems.map((selectedItem) => {
            return (
              <li>
                <span className="font-bold">&gt;</span>
                {selectedItem.count > 1
                  ? selectedItem.count.toString().concat('x ')
                  : ''}
                {selectedItem.itemName}
                {formatPrice(getItemPrice(selectedItem.itemName))}
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  const getUrlLink = () => {
    const baseUrl = '7sage.com/purchase?';

    const params = selectedItems
      .map((el) => {
        const key = el.itemName;
        const value = el.count.toString();
        return key.concat('=', value, '&');
      })
      .join(',');

    return baseUrl.concat(params).slice(0, -1);
  };

  const displayCustomItem = (itemName: string) => {
    const item = customPurchaseItems.find((item) => item.itemName == itemName);
    return (
      <CustomItem
        item={item}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        key={item.itemName}
      />
    );
  };

  return (
    <div id="custompage">
      <div className="md:flex justify-around">
        <div className="m-auto flex-1">
          Just order what you need. All custom packages include full access to
          the 7Sage Admissions Course.
        </div>
        <div className="flex-1">
          {selectedItems.length > 0 ? (
            <PurchaseButton price={getSumPrice()} link="www.google.com" />
          ) : (
            <a className="ss-price__button" aria-disabled="true">
              Purchase Select Items
            </a>
          )}
        </div>
      </div>
      <div className="ss-test-grid">
        <div className="ss-test-grid-item">
          <div>Work with an admissions officer</div>
          {displayCustomItem('unlimited-edit-essay')}
          {displayCustomItem('five-school-writing-package')}
        </div>
        <div className="ss-test-grid-item">
          <div>Work with a professional writer</div>
          {displayCustomItem('item-sold-out')}
          {displayCustomItem('item-multiple')}
        </div>
        <div className="ss-test-grid-item">
          <div>After-the-application support</div>
          {displayCustomItem('item-sold-out')}
          {displayCustomItem('item-multiple')}
        </div>
        <div className="ss-test-grid-item">
          {displaySelectedItems()}
          {selectedItems.length > 0 ? (
            <PurchaseButton price={getSumPrice()} link={getUrlLink()} />
          ) : (
            <a className="ss-price__button" aria-disabled="true">
              Purchase Select Items
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Custom;
