// General Exception Error
export default error => {
  if (typeof error === "object" && error instanceof Error)
    return (error.message && error.message) || "Oops, errors!";
  // pass error down to next function
  return error;
};
