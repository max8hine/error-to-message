// General Exception Error
export default error => {
  if (typeof error === "object" && error instanceof Error) {
    console.error("Exception Error at error.code: ", error);
    return (error.message && error.message) || "Oops, errors!";
  }
  // pass error down to next function
  return error;
};
