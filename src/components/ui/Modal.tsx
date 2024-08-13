"use client";

import { ModalAction } from "@/types";
import Dialog from "@mui/material/Dialog";

type ModalProps = {
  children: React.ReactNode;
  modalState: boolean;
  handleClose: (action: ModalAction) => void;
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
