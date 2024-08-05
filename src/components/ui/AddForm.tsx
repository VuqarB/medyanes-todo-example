"use client";

import { Button } from "@mui/material";
import { FormEvent, useState } from "react";
import { postAPI } from "@/services/fetchApi";

type AddFormProps = {
  handleClose: () => void;
};

const AddForm = ({ handleClose }: AddFormProps) => {
  const [newTask, setNewTask] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    postAPI("/todo", newTask)
    .then((res) => {
      if (res.status === "success" || res.status === 200) {
        console.log("Heyyyyy");
      }
    })
    .catch((err) => {
      console.error("Failed to create task:", err.message);
    });
    
    setNewTask("")
    handleClose();
  };

  return (
    <form className="flex-center gap-4" onSubmit={onSubmit}>
      <input
        value={newTask}
        type="text"
        className="py-1 px-2 border font-medium focus:outline-0"
        placeholder="Type here"
        onChange={(e) => setNewTask(e.target.value)}
      />
      <Button
        type="submit"
        variant="contained"
        className="font-medium capitalize transition-all duration-300 ease-linear bg-[#333] hover:bg-[#555]"
      >
        Submit
      </Button>
    </form>
  );
};

export default AddForm;
