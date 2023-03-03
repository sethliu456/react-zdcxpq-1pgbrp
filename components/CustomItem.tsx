import * as React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonMulti from './ButtonMulti';
import ButtonSingle from './ButtonSingle';
import Typography from '@mui/material/Typography';
import { formatPrice } from './../utility/formatting';

const CustomItem = ({
  item: {
    itemName,
    title,
    price,
    isSoldOut,
    isMultiple,
    description,
    details,
    maxLimit,
  },
  setSelectedItems,
  selectedItems,
}) => {
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  let buttonType;

  if (isSoldOut) {
    buttonType = (
      <button className="ss-custom-item-add-button ss-custom-item-sold-out">
        Sold out
      </button>
    );
  } else if (isMultiple) {
    buttonType = (
      <ButtonMulti
        itemName={itemName}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        maxLimit={maxLimit}
      />
    );
  } else {
    buttonType = (
      <ButtonSingle
        itemName={itemName}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
      />
    );
  }

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="ss-custom-item">
      <div className="ss-custom-item-description">
        <div className="font-bold">{title}</div>
        <div className="ss-custom-item-details">{description}</div>
        <div onClick={handleOpen}> How it works </div>
      </div>
      <div className="ss-custom-item-price">
        {buttonType}
        <div className="ss-custom-item-price">{formatPrice(price, 0)}</div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          {details.map((detail) => {
            return (
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {detail}
              </Typography>
            );
          })}
          {buttonType}
          <div onClick={handleClose}>Close</div>
        </Box>
      </Modal>
      <br></br>
    </div>
  );
};

export default CustomItem;
