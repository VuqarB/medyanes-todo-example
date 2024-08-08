import { deleteAPI } from "@/services/fetchApi";
import { Button, DialogActions, DialogContent } from "@mui/material";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

type DeleteProps = {
  id: string;
  handleClose: () => void;
};

const Delete = ({ id, handleClose }: DeleteProps) => {
  const { refresh } = useRouter();

  const deleteTask = () => {
    deleteAPI("/todo", { id })
      .then((res) => {
        if (res.status === "success" || res.status === 200) {
          toast.success("The task was deleted");
          refresh();
        } else {
          toast.error("Something went wrong");
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });

    handleClose();
  };

  return (
    <>
      <DialogContent className="font-medium">
        Are you sure you want to delete this task?
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="error"
          className="capitalize font-medium"
          onClick={deleteTask}
        >
          Delete
        </Button>
      </DialogActions>
    </>
  );
};

export default Delete;
