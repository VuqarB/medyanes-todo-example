"use client"
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import CustomButton from "./CustomButton";
import Modal from "./Modal";
import { ModalState } from "@/types";
import AddForm from "./AddForm";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";

type HeadingProps = {
  handleOpen: (action: "add" | "deleteAll") => void;
  handleClose: (action: "add" | "deleteAll") => void;
  modalState: ModalState;
};

const Heading = ({ handleOpen, handleClose, modalState }: HeadingProps) => {

  return (
    <div className="flex-between w-full">
      <h1 className="text-[28px] md:text-[32px] cLg:text-[36px] text-[#1f3347] font-bold leading-[1.38]">
        Todo <span className="text-[#ff621f]">app</span>
      </h1>

      <div className="flex gap-2">
        {/* Add Task Button */}
        <CustomButton
          bgColor="bg-lime-500"
          className="hover:bg-lime-600"
          icon={AddIcon}
          onClick={() => handleOpen("add")}
        >
          <span>Add</span>
        </CustomButton>
        <Modal
          handleClose={() => handleClose("add")}
          open={modalState.add}
          action="add"
        >
          <DialogContent>
            <AddForm handleClose={() => handleClose("add")} />
          </DialogContent>
        </Modal>
      </div>
    </div>
  );
};

export default Heading;
