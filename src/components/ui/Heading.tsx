"use client";

import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import CustomButton from "./CustomButton";
import Modal from "./Modal";
import AddForm from "./AddForm";
import { useState } from "react";
import DeleteAll from "./DeleteAll";

const Heading = ({ todoItemsCount }: { todoItemsCount: number }) => {
  const [modalState, setModalState] = useState({
    add: false,
    deleteAll: false,
  });

  const handleOpen = (action: "add" | "deleteAll") => {
    setModalState((prevState) => ({ ...prevState, [action]: true }));
  };

  const handleClose = (action: "add" | "deleteAll") => {
    setModalState((prevState) => ({ ...prevState, [action]: false }));
  };

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
          modalState={modalState.add}
          handleClose={() => handleClose("add")}
        >
          <AddForm handleClose={() => handleClose("add")} />
        </Modal>

        {/* Delete All Tasks Button */}
        <CustomButton
          bgColor="bg-red-600"
          className="hover:bg-red-700"
          onClick={() => handleOpen("deleteAll")}
        >
          <DeleteOutlineRoundedIcon />
        </CustomButton>
        <Modal
          modalState={modalState.deleteAll}
          handleClose={() => handleClose("deleteAll")}
        >
          <DeleteAll todoItemsCount={todoItemsCount} handleClose={() => handleClose("deleteAll")} />
        </Modal>
      </div>
    </div>
  );
};

export default Heading;
