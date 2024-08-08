"use client";

import { putAPI } from "@/services/fetchApi";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";

type UpdateFormProps = {
  id: string;
  title: string;
  handleClose: () => void;
};

const UpdateForm = ({ id, title, handleClose }: UpdateFormProps) => {
  const [updatedTask, setUpdatedTask] = useState("");
  const { refresh } = useRouter();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (updatedTask === "" || updatedTask.trim() === title.trim()) {
      toast.error("Nothing to update")
      return
    };

    putAPI("/todo", {
      where: { id },
      data: { title: updatedTask },
    })
      .then((res) => {
        if (res.status === "success" || res.status === 200) {
          toast.success("The task was edited");
          refresh();
        } else {
          toast.error("Something went wrong");
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });

    setUpdatedTask("");
    handleClose();
  };

  return (
    <form onSubmit={onSubmit}>
      <DialogTitle
        id="alert-dialog-title"
        className="text-[22px] text-[#1f3347] font-bold leading-[1.38]"
      >
        Update Task
      </DialogTitle>
      <DialogContent>
        <input
          value={updatedTask}
          type="text"
          className="py-1 px-2 border font-medium focus:outline-0"
          placeholder="Type here"
          onChange={(e) => setUpdatedTask(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button
          type="submit"
          variant="contained"
          className="font-medium capitalize transition-all duration-300 ease-linear bg-[#ff621f] hover:bg-[#f75f1b]"
        >
          Update
        </Button>
      </DialogActions>
    </form>
  );
};

export default UpdateForm;
