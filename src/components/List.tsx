import { ModalState } from "@/types";
import Item from "./ui/Item";

type ListProps = {
  handleOpen: (action: "update" | "delete") => void;
  handleClose: (action: "update" | "delete") => void;
  modalState: ModalState;
};

const List = ({ handleOpen, handleClose, modalState }: ListProps) => {
  return (
    <div className="w-full mt-3">
      <div className="flex-between p-2 bg-gray-200 rounded-sm mb-4">
        <h2 className="text-xs uppercase font-bold text-gray-600 cLg:text-base">
          Task
        </h2>
        <h2 className="text-xs uppercase font-bold text-gray-600 cLg:text-base">
          Action
        </h2>
      </div>

      <div className="flex flex-col gap-2">
        <Item
          handleOpen={handleOpen}
          handleClose={handleClose}
          modalState={modalState}
        />
        <Item
          handleOpen={handleOpen}
          handleClose={handleClose}
          modalState={modalState}
        />
      </div>
    </div>
  );
};

export default List;
