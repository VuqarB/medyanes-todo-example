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
  // const createNewTask = (e: FormEvent) => {
  //   e.preventDefault();
  //   console.log("something")
  //   postAPI("/todo", newTask).then((res) => {
  //     if(res.status && (res.status === 200 || res.status === "success")) {
  //       console.log("Heyyyyy")
  //     }
  //   }).catch((error) => {
  //     console.error("Error creating task:", error);
  //   });

  //   setNewTask("")
  // };

  // const [modalState, setModalState] = useState<ModalState>({
  //   add: true,
  //   update: false,
  //   delete: false,
  //   deleteAll: false,
  // });

  // const handleOpen = (action: ModalAction) => {
  //   setModalState((prevState) => ({ ...prevState, [action]: true }));
  // };

  // const handleClose = (action: ModalAction) => {
  //   setModalState((prevState) => ({ ...prevState, [action]: false }));
  // };

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
