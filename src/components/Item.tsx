import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import Modal from "./ui/Modal";
import { useState } from "react";
import { Checkbox } from "@mui/material";
import UpdateForm from "./UpdateForm";
import { putAPI } from "@/services/fetchApi";
import CustomButton from "./ui/CustomButton";
import Delete from "./Delete";
import { ItemTypes } from "@/types";

type ModalState = {
  update: boolean;
  delete: boolean;
};

type ItemProps = {
  handleOpen: (action: "update" | "delete") => void;
  handleClose: (action: "update" | "delete") => void;
  modalState: ModalState;
  item: ItemTypes;
};

const Item = ({ item, handleOpen, handleClose, modalState }: ItemProps) => {
  const [checked, setChecked] = useState<boolean>(item?.completed);

  const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setChecked(isChecked);

    putAPI("/todo", {
      where: { id: item?.id },
      data: { completed: isChecked },
    });
  };

  return (
    <div className="flex items-center gap-2 w-full bg-gray-100 rounded-sm p-2">
      <div className="flex items-center flex-[5] p-2">
        <Checkbox
          checked={checked}
          onChange={handleChecked}
          inputProps={{ "aria-label": "controlled" }}
        />
        <div
          className={`whitespace-normal break-words text-[#1f3347] text-sm md:text-base font-medium transition-all duration-200 ease-linear ${
            checked && "text-gray-400"
          }`}
        >
          {item?.title}
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
          modalState={modalState.update}
          handleClose={() => handleClose("update")}
        >
          <UpdateForm id={item?.id} title={item?.title} handleClose={() => handleClose("update")} />
        </Modal>

        {/* Delete Task Button */}
        <CustomButton
          className="transition-all duration-300 ease-linear hover:bg-red-500 btn-hover"
          onClick={() => handleOpen("delete")}
        >
          <DeleteOutlineRoundedIcon className="text-red-500 transition-all duration-300 ease-linear icon-hover" />
        </CustomButton>
        <Modal
          modalState={modalState.delete}
          handleClose={() => handleClose("delete")}
        >
          <Delete id={item?.id} handleClose={() => handleClose("delete")} />
        </Modal>
      </div>
    </div>
  );
};

export default Item;
