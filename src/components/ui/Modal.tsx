"use client";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

type ModalProps = {
  children: React.ReactNode;
  handleClose: () => void;
  open: boolean;
  action: "add" | "update" | "delete" | "deleteAll";
};

export default function Modal({
  children,
  handleClose,
  open,
  action,
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

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="xl"
      >
        <DialogTitle
          id="alert-dialog-title"
          className="text-[22px] text-[#1f3347] font-bold leading-[1.38]"
        >
          {action === "add" && "Add Task"}
          {action === "update" && "Edit Task"}
        </DialogTitle>
        <DialogContent>{children}</DialogContent>
        <DialogActions>
          {action === "delete" && (
            <Button
              onClick={handleClose}
              variant="text"
              color="error"
              className="font-medium capitalize"
            >
              Delete
            </Button>
          )}
          {action === "deleteAll" && (
            <Button
              onClick={handleClose}
              variant="text"
              color="error"
              className="font-medium capitalize"
            >
              Delete
            </Button>
          )}
          <Button
            onClick={handleClose}
            variant="text"
            color="secondary"
            className="font-medium capitalize"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
