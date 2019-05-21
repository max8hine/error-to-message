import newErrorMessage from "./newErrorMessage";
import errorAxios from "./errorAxios";
import errorFirebaseAuth from "./errorFirebaseAuth";
import errorInstance from "./errorInstance";

export const toMessage = error =>
  newErrorMessage()(errorAxios, errorFirebaseAuth, errorInstance)(error);
