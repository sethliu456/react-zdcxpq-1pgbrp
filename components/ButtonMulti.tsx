import * as React from 'react';

/**
 * Button for adding/removing a items with mulitpl units to the cart
 */
const ButtonMulti = ({
  itemName,
  selectedItems,
  setSelectedItems,
  maxLimit,
}) => {
  const addItemToCart = () =>
    setSelectedItems([...selectedItems, { itemName: itemName, count: 1 }]);

  const addSingleUnit = () => {
    if (getUnitCount() == maxLimit) {
      return;
    }

    setSelectedItems(
      selectedItems.map((el) => {
        if (el.itemName == itemName) {
          let newCount = el.count + 1;
          return { ...el, count: newCount };
        }
        return el;
      })
    );
  };

  const removeSingelUnit = () => {
    if (selectedItems.find((el) => el.itemName == itemName).count > 1) {
      setSelectedItems(
        selectedItems.map((el) => {
          if (el.itemName == itemName) {
            let newCount = el.count - 1;
            return { ...el, count: newCount };
          }
          return el;
        })
      );
    } else {
      removeItemFromCart();
    }
  };

  const removeItemFromCart = () => {
    const filered = selectedItems.filter((el) => el.itemName != itemName);
    setSelectedItems(filered);
  };

  const getUnitCount = () => {
    return selectedItems.find((el) => el.itemName == itemName).count;
  };

  let button;
  const isItemAdded = selectedItems.some((el) => el.itemName == itemName);

  if (isItemAdded) {
    button = (
      <div className="ss-custom-item-add-button-multi">
        <button
          className="ss2-custhours__btn"
          onClick={removeSingelUnit}
        >
          -
        </button>
        <span className="ss-custhours__label">{getUnitCount()}</span>
        <button
          className="ss2-custhours__btn"
          onClick={addSingleUnit}
        >
          +
        </button>
      </div>
    );
  } else {
    button = (
      <div className="ss-custom-item-add-button" onClick={addItemToCart}>
        Add
      </div>
    );
  }

  return button;
};

export default ButtonMulti;
