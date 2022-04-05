import axios from "axios";

export const loginService = async (url, email, password) => {
  const res = await axios.post(url, {
    email,
    password,
  });
  try {
    if (res.status === 200 || res.status === 201) {
      return [res.data.encodedToken, res.data.foundUser];
    } else {
      throw new Error(res);
    }
  } catch (err) {
    console.log(err);
  }
};

export const signupService = async (url, email, password, firstName, lastName) => {
  const res = await axios.post(url, {
    email,
    password,
    firstName,
    lastName,
  });
  try {
    if (res.status === 200 || res.status === 201) {
      return [res.data.encodedToken, res.data.createdUser];
    } else {
      throw new Error(res);
    }
  } catch (err) {
    console.log(err);
  }
};
