"use client";

import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { FormEvent, useState } from "react";
import { postAPI } from "@/services/fetchApi";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

type AddFormProps = {
  handleClose: () => void;
};

const AddForm = ({ handleClose }: AddFormProps) => {
  const [title, setTitle] = useState("");
  const { refresh } = useRouter();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (title === "") {
      toast.error("Nothing to add");
      return;
    }

    postAPI("/todo", { title })
      .then((res) => {
        if (res.status === "success" || res.status === 200) {
          toast.success("A new task added");
          refresh();
        } else {
          toast.error("Something went wrong");
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });

    setTitle("");
    handleClose();
  };

  return (
    <form onSubmit={onSubmit}>
      <DialogTitle
        id="alert-dialog-title"
        className="text-[22px] text-[#1f3347] font-bold leading-[1.38]"
      >
        Add Task
      </DialogTitle>
      <DialogContent>
        <input
          value={title}
          type="text"
          className="py-1 px-2 border font-medium focus:outline-0"
          placeholder="Type here"
          onChange={(e) => setTitle(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button
          type="submit"
          variant="contained"
          className="font-medium capitalize transition-all duration-300 ease-linear bg-lime-500 hover:bg-lime-600"
        >
          Add
        </Button>
      </DialogActions>
    </form>
  );
};

export default AddForm;
