import { ModalState } from "@/types";
import Item from "./ui/Item";
import { getAPI } from "@/services/fetchApi";
import { useEffect, useState } from "react";

type ListProps = {
  handleOpen: (action: "update" | "delete") => void;
  handleClose: (action: "update" | "delete") => void;
  modalState: ModalState;
};

const List = ({ handleOpen, handleClose, modalState }: ListProps) => {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    getAPI("/todo").then((res) => {
      if (res) {
        setTodoItems(res.data);
      }
    });
  }, []);

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
        {todoItems.map((item) => (
          <Item
            key={item["id"]}
            handleOpen={handleOpen}
            handleClose={handleClose}
            modalState={modalState}
            id={item["id"]}
            title={item["title"]}
            completed={item["completed"]}
          />
        ))}
      </div>
    </div>
  );
};

export default List;
