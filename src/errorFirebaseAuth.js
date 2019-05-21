// Firebase Auth Error
export default error => {
  if (typeof error === "object" && error instanceof Error && error.code) {
    let msg = "Oops, error!";
    const auth = {
      "email-already-in-use": `
				An account with this email address already exists.
				Try to login with this account instead.
			`,
      "user-not-found": `Could not found the user.`,
      "wrong-password": `Invalid password`
    };

    // ----
    console.info("Error code： ", error.code);
    // ---
    if (error.code === "auth/email-already-in-use")
      msg = auth["email-already-in-use"];
    else if (error.code === "auth/user-not-found") msg = auth["user-not-found"];
    else if (error.code === "auth/wrong-password") msg = auth["wrong-password"];
    else return (error.message && error.message) || "Oops, error!";
  }
  // pass error down to next function
  return error;
};
