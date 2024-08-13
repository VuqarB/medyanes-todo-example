"use client";

import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { postAPI } from "@/services/fetchApi";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";
import { FormErrorMessage } from "./ui/FormErrorMessage";

type AddFormProps = {
  handleClose: () => void;
};

type FormValues = {
  title: string;
};

const validationSchema = Yup.object({
  title: Yup.string().required("Task name is required."),
});

const AddForm = ({ handleClose }: AddFormProps) => {
  const { refresh } = useRouter();

  const formik = useFormik({
    initialValues: { title: "" },
    validationSchema: validationSchema,
    onSubmit: (
      values: FormValues,
      { resetForm }: FormikHelpers<FormValues>
    ) => {
      postAPI("/todo", { title: values.title })
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
        })
        .finally(() => {
          resetForm();
          handleClose();
        });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <DialogTitle
        id="alert-dialog-title"
        className="text-[22px] text-[#1f3347] font-bold leading-[1.38]"
      >
        Add Task
      </DialogTitle>
      <DialogContent>
        <input
          name="title"
          type="text"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`py-1 px-2 border font-medium focus:outline-0 ${
            formik.touched.title && formik.errors.title && "border-red-500"
          }`}
          placeholder="Type here"
        />
        {formik.touched.title && formik.errors.title && (
          <FormErrorMessage errorMessage={formik.errors.title} />
        )}
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
