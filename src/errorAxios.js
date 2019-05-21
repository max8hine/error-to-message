export default error => {
  if (typeof error === "object" && error.response) {
    let errorMsg = "";
    if (error.response.status) console.info("Status: ", error.response.status);
    if (error.response.data) console.info("Status: ", error.response.data);
    const defaultServerErrorMsg = "Server error, please try it later.";
    // Lambda function error
    if (typeof error.response.data === "string") {
      errorMsg = error.response.data;
    } else {
      errorMsg = defaultServerErrorMsg;
    }
  }
  return error;
};
