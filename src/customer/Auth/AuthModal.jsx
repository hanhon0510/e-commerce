import { Box, Modal, Typography } from "@mui/material";
import React from "react";
import RegisterForm from "./RegisterForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  outline: "none",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const AuthModal = ({ handleClose, open }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={style}>
          <RegisterForm />
        </Box>
      </Modal>
    </div>
  );
};

export default AuthModal;
