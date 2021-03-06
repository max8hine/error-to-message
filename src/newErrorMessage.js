// const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);

export default msg => {
  let defaultMsg = "Oops, something went wrong, please try again";
  if (msg) defaultMsg = msg;

  const fallbackMessage = _err => {
    if (typeof error !== "string") {
      console.info(_err);
      return defaultMsg;
    }
    return _err;
  };

  return (...fns) => x => {
    fns.push(fallbackMessage);
    return fns.reduce((y, f) => f(y), x);
  };
};
