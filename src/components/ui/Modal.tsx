"use client";

import { ModalAction } from "@/types";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

type ModalProps = {
  children: React.ReactNode;
  handleClose: (action: ModalAction) => void;
  modalState: boolean;
};

export default function Modal({
  children,
  modalState,
  handleClose,
}: ModalProps) {
  return (
    <>
      <Dialog
        open={modalState}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="xl"
      >
        {children}
      </Dialog>
    </>
  );
}
