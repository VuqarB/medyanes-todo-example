"use client";

import { Button } from "@mui/material";
import { FormEvent, useState } from "react";
import { postAPI } from "@/services/fetchApi";
import toast from "react-hot-toast";

type AddFormProps = {
  handleClose: () => void;
};

const AddForm = ({ handleClose }: AddFormProps) => {
  const [title, setTitle] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    postAPI("/todo", { title: title })
      .then((res) => {
        if (res.status === "success" || res.status === 200) {
          toast.success("A new task added")
        } else {
          toast.error("Something went wrong")
        }
      })
      .catch((err) => {
        toast.error(err.message)
      });

    setTitle("");
    handleClose();
  };

  return (
    <form className="flex-center gap-4" onSubmit={onSubmit}>
      <input
        value={title}
        type="text"
        className="py-1 px-2 border font-medium focus:outline-0"
        placeholder="Type here"
        onChange={(e) => setTitle(e.target.value)}
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
