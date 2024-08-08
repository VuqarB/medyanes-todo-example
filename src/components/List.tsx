"use client";

import { ItemTypes } from "@/types";
import Item from "./Item";
import { useState } from "react";

type ListProps = {
  todoItems: ItemTypes[];
};

const List = ({ todoItems }: ListProps) => {
  const [modalState, setModalState] = useState({
    update: false,
    delete: false,
  });

  const handleOpen = (action: "update" | "delete") => {
    setModalState((prevState) => ({ ...prevState, [action]: true }));
  };

  const handleClose = (action: "update" | "delete") => {
    setModalState((prevState) => ({ ...prevState, [action]: false }));
  };

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
        {todoItems?.map((item: ItemTypes) => (
          <Item
            key={item?.id}
            item={item}
            handleOpen={handleOpen}
            handleClose={handleClose}
            modalState={modalState}
          />
        ))}
      </div>
    </div>
  );
};

export default List;
