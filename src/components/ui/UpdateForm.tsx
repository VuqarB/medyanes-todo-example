"use client";

import { putAPI } from "@/services/fetchApi";
import { Button } from "@mui/material";
import { FormEvent, useState } from "react";

type UpdateFormProps = {
  updatedTaskId: string;
  handleClose: () => void;
};

const UpdateForm = ({ updatedTaskId, handleClose }: UpdateFormProps) => {
  const [updatedTask, setUpdatedTask] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    putAPI("/todo", {
      id: updatedTaskId,
      title: updatedTask,
    });

    handleClose();
  };

  return (
    <form className="flex-center gap-4" onSubmit={onSubmit}>
      <input
        value={updatedTask}
        type="text"
        className="py-1 px-2 border font-medium focus:outline-0"
        placeholder="Type here"
        onChange={(e) => setUpdatedTask(e.target.value)}
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

export default UpdateForm;
