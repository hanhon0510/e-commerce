import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const ConfirmDeleteProduct = ({ isOpen, productId }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(isOpen);

  useEffect(() => {
    setOpen(isOpen);
    console.log("use effect", open);
  }, [isOpen]);

  const handleProductDelete = () => {
    console.log("delete: ", productId);

    // dispatch(deleteProduct(productId));
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to delete this product?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This will permanently delete the product and cannot be undone.
          </DialogContentText>
          <Button
            onClick={() => {
              console.log(open);
            }}
          >
            Cl
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleProductDelete} autoFocus color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default ConfirmDeleteProduct;
