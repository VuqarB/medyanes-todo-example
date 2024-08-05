import { Button } from "@mui/material";

type UpdateFormProps = {
  handleClose: () => void;
};

const UpdateForm = ({ handleClose }: UpdateFormProps) => {
  return (
    <form className="flex-center gap-4">
      <input
        type="text"
        className="py-1 px-2 border font-medium focus:outline-0"
        placeholder="Type here"
      />
      <Button
        variant="contained"
        className="font-medium capitalize transition-all duration-300 ease-linear bg-[#333] hover:bg-[#555]"
        onClick={handleClose}
      >
        Submit
      </Button>
    </form>
  );
};

export default UpdateForm;
