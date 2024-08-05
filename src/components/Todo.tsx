"use client";
import { ModalState } from "@/types";
import List from "./List";
import Heading from "./ui/Heading";
import { useState } from "react";

const Todo = () => {
  const [modalState, setModalState] = useState<ModalState>({
    add: false,
    update: false,
    delete: false,
    deleteAll: false
  });

  const handleOpen = (action: "add" | "update" | "delete" | "deleteAll") => {
    setModalState((prevState) => ({ ...prevState, [action]: true }));
  };

  const handleClose = (action: "add" | "update" | "delete" | "deleteAll") => {
    setModalState((prevState) => ({ ...prevState, [action]: false }));
  };

  return (
    <section className="mt-28">
      <Heading
        handleClose={handleClose}
        handleOpen={handleOpen}
        modalState={modalState}
      />
      <List
        handleClose={handleClose}
        handleOpen={handleOpen}
        modalState={modalState}
      />
    </section>
  );
};

export default Todo;
