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
    // border: '1px solid #758289',
    borderRadius: '10px',
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
        <div className="ss-custom-item-title">{title}</div>
        <div className="ss-custom-item-details">{description}</div>
        <div className="ss-custom-item-modal-link" onClick={handleOpen}> How it works </div>
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
          </Typography>
          <div>
            {title}
          </div>
          <div>
           {description} 
          </div>  
          <ul className='text-base'>
            {details.map((detail) => {
              return (
                <li>
                  {detail}
                  </li>
              )
            })}
          </ul>

          <div className="ss-modal-buttons">
            {buttonType}
            <div onClick={handleClose}>Close</div>
          </div>
        </Box>
      </Modal>
      <br></br>
    </div>
  );
};

export default CustomItem;
