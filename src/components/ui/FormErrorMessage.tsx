export const FormErrorMessage = ({
  errorMessage,
}: {
  errorMessage: string;
}) => {
  return <div className="text-red-500 text-sm">{errorMessage}</div>;
};
