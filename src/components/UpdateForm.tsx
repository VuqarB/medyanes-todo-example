"use client";

import { putAPI } from "@/services/fetchApi";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";
import { FormErrorMessage } from "./ui/FormErrorMessage";

type UpdateFormProps = {
  id: string;
  title: string;
  handleClose: () => void;
};

type FormValues = {
  title: string;
};

const validationSchema = (oldTitle: string) =>
  Yup.object({
    title: Yup.string()
      .required("Nothing to update.")
      .notOneOf([oldTitle.trim()], "New title, please."),
  });

const UpdateForm = ({ id, title, handleClose }: UpdateFormProps) => {
  const { refresh } = useRouter();

  const formik = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema: validationSchema(title),
    onSubmit: (
      values: FormValues,
      { resetForm }: FormikHelpers<FormValues>
    ) => {
      putAPI("/todo", {
        where: { id },
        data: { title: values.title },
      })
        .then((res) => {
          if (res.status === "success" || res.status === 200) {
            toast.success("The task was edited", {
              iconTheme: {
                primary: "#ff621f",
                secondary: "#fffaee",
              },
            });
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
        Update Task
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
          className="font-medium capitalize transition-all duration-300 ease-linear bg-[#ff621f] hover:bg-[#f75f1b]"
        >
          Update
        </Button>
      </DialogActions>
    </form>
  );
};

export default UpdateForm;
