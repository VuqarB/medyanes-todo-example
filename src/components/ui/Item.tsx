"use client";

import Button from "./Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import Modal from "./Modal";
import { useState } from "react";
import { Checkbox, DialogContentText } from "@mui/material";
import UpdateForm from "./UpdateForm";

type ModalState = {
  add: boolean;
  update: boolean;
  delete: boolean;
};

type ItemProps = {
  handleOpen: (action: "update" | "delete") => void;
  handleClose: (action: "update" | "delete") => void;
  modalState: ModalState;
};

const Item = ({ handleOpen, handleClose, modalState }: ItemProps) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="flex items-center gap-2 w-full bg-gray-100 rounded-sm p-2">
      <div className="flex items-center flex-[5] p-2">
        <Checkbox
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
        <div
          className={`whitespace-normal break-words text-[#1f3347] text-sm md:text-base font-medium transition-all duration-200 ease-linear ${
            checked && "text-gray-400"
          }`}
        >
          Item
        </div>
      </div>

      <div className="flex-end flex-1 gap-2">
        {/* Update Task Button */}
        <Button
          className="transition-all duration-300 ease-linear hover:bg-[#ff621f] btn-hover"
          onClick={() => handleOpen("update")}
        >
          <EditIcon className="text-[#ff621f] transition-all duration-300 ease-linear icon-hover" />
        </Button>
        <Modal
          handleClose={() => handleClose("update")}
          open={modalState.update}
          action="update"
        >
          <UpdateForm handleClose={() => handleClose("update")} />
        </Modal>

        {/* Delete Task Buttton */}
        <Button
          className="transition-all duration-300 ease-linear hover:bg-red-500 btn-hover"
          onClick={() => handleOpen("delete")}
        >
          <DeleteOutlineRoundedIcon className="text-red-500 transition-all duration-300 ease-linear icon-hover" />
        </Button>
        <Modal
          handleClose={() => handleClose("delete")}
          open={modalState.delete}
          action="delete"
        >
          <DialogContentText
            id="alert-dialog-description"
            className="text-[#1f3347] font-medium"
          >
            Are you sure you want to delete this Task?
          </DialogContentText>
        </Modal>
      </div>
    </div>
  );
};

export default Item;
