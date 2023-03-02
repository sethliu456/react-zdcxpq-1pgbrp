import * as React from 'react';
/**
 * Button for adding/removing an item with a single unit limit to the cart
 */
const ButtonSingle = ({ itemName, selectedItems, setSelectedItems }) => {
  const addItemToCart = () => {
    setSelectedItems([...selectedItems, { itemName: itemName, count: 1 }]);
  };

  const removeItemFromCart = () => {
    const filered = selectedItems.filter((el) => el.itemName != itemName);
    setSelectedItems(filered);
  };

  const isItemAdded = selectedItems.some((el) => el.itemName == itemName);
  const buttonText = isItemAdded ? ' Added' : 'Add';

  return (
    <button
      className={
        'ss-custom-item-add-button ' +
        (isItemAdded ? 'ss-custom-item-add-button-added' : '')
      }
      onClick={() => (isItemAdded ? removeItemFromCart() : addItemToCart())}
    >
      {buttonText}
    </button>
  );
};

export default ButtonSingle;
