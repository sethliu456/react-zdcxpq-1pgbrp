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
  const getItemTitle = (itemName) => {
    return customPurchaseItems.find((el) => el.itemName == itemName).title;
  };

  const displaySelectedItems = () => {
    return (
      <div className="ss-custom-total-display">
        <div className="m-5">
          <h3 className="mx-5">Your selections</h3>
          <div className="">
            {selectedItems.map((selectedItem) => {
              return (
                <div className="ss-custom-selected">
                  <div>
                    <div className="ss-custom-selected-item">
                      &gt;
                      {selectedItem.count > 1
                        ? selectedItem.count.toString().concat('x ')
                        : ''}
                      {getItemTitle(selectedItem.itemName)}
                    </div>
                  </div>
                  <div className="text-gray-600">
                    {formatPrice(getItemPrice(selectedItem.itemName))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="my-4">
          {selectedItems.length > 0 ? (
            <PurchaseButton price={getSumPrice()} link={getUrlLink()} />
          ) : (
            <a
              className="ss-price__button ss-price-disabled m-auto"
              aria-disabled="true"
            >
              Add items to order
            </a>
          )}
        </div>
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
      <div className="md:flex justify-around my-6">
        <div className="m-auto flex-1 text-center">
          Just order what you need. All custom packages include full access to
          the 7Sage Admissions Course.
        </div>
        <div className="flex-1 m-auto">
          {selectedItems.length > 0 ? (
            <PurchaseButton price={getSumPrice()} link="www.google.com" />
          ) : (
            <div>
              <a
                className="ss-price__button ss-price-disabled m-auto"
                aria-disabled="true"
              >
                Add items to order
              </a>
              <div className="text-gray-500 text-sm text-center invisible">
                Or pay in installments of $250/month
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="ss-test-grid">
        <div>
          <div className="ss-custom-category-description">
            Work with an admissions officer
          </div>
          {displayCustomItem('unlimited-edit-essay')}
          {displayCustomItem('five-school-writing-package')}
        </div>
        <div>
          <div className="ss-custom-category-description">
            Work with a professional writer
          </div>
          {displayCustomItem('item-sold-out')}
          {displayCustomItem('item-multiple')}
        </div>
        <div>
          <div className="ss-custom-category-description">
            After-the-application support
          </div>
          {displayCustomItem('item-sold-out')}
          {displayCustomItem('item-multiple')}
        </div>
        <div>{displaySelectedItems()}</div>
      </div>
    </div>
  );
};

export default Custom;
