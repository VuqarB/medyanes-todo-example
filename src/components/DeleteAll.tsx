import { deleteAPI } from "@/services/fetchApi";
import { Button, DialogActions, DialogContent } from "@mui/material";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

type DeleteAllProps = {
  todoItemsCount: number;
  handleClose: () => void;
};

const DeleteAll = ({ todoItemsCount, handleClose }: DeleteAllProps) => {
  const { refresh } = useRouter();

  const deleteAllTasks = () => {
    if (todoItemsCount > 0) {
      deleteAPI("/todo", null)
        .then((res) => {
          if (res.status === "success" || res.status === 200) {
            toast.success("All tasks were deleted");
            refresh();
          } else {
            toast.error("Something went wrong");
          }
        })
        .catch((err) => {
          toast.error(err.message);
        });
    } else {
      toast.error("No task detected");
    }

    handleClose();
  };

  return (
    <>
      <DialogContent className="font-medium">
        Are you sure you want to delete all tasks?
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="error"
          className="capitalize font-medium"
          onClick={deleteAllTasks}
        >
          Delete
        </Button>
      </DialogActions>
    </>
  );
};

export default DeleteAll;
