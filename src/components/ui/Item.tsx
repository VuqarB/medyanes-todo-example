"use client";

import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import Modal from "./Modal";
import { useState } from "react";
import {
  Button,
  Checkbox,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import UpdateForm from "./UpdateForm";
import { deleteAPI } from "@/services/fetchApi";
import CustomButton from "./CustomButton";

type ModalState = {
  update: boolean;
  delete: boolean;
};

type ItemProps = {
  handleOpen: (action: "update" | "delete") => void;
  handleClose: (action: "update" | "delete") => void;
  modalState: ModalState;
  id: string;
  title: string;
  completed: boolean;
};

const Item = ({
  handleOpen,
  handleClose,
  modalState,
  id,
  title,
  completed,
}: ItemProps) => {
  const [checked, setChecked] = useState(completed);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleDelete = (id: string) => {
    deleteAPI("/todo", { id: id });
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
          {title}
        </div>
      </div>

      <div className="flex-end flex-1 gap-2">
        {/* Update Task Button */}
        <CustomButton
          className="transition-all duration-300 ease-linear hover:bg-[#ff621f] btn-hover"
          onClick={() => handleOpen("update")}
        >
          <EditIcon className="text-[#ff621f] transition-all duration-300 ease-linear icon-hover" />
        </CustomButton>
        <Modal
          handleClose={() => handleClose("update")}
          open={modalState.update}
          action="update"
        >
          <DialogContent>
            <UpdateForm updatedTaskId={id} handleClose={() => handleClose("update")} />
          </DialogContent>
        </Modal>

        {/* Delete Task Buttton */}
        <CustomButton
          className="transition-all duration-300 ease-linear hover:bg-red-500 btn-hover"
          onClick={() => handleDelete(id)}
        >
          <DeleteOutlineRoundedIcon className="text-red-500 transition-all duration-300 ease-linear icon-hover" />
        </CustomButton>
      </div>
    </div>
  );
};

export default Item;
