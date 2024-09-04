import { AppDispatch } from "../store";
import { IUser } from "../../models/IUser";
import { usersSlice } from "./UsersSlice";
import axios from "axios";

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  return String(error);
}

export const fetchUsers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(usersSlice.actions.usersFetching());
    const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users");
    setTimeout(() => {
      dispatch(usersSlice.actions.usersFetchingSuccess(response.data));
    }, 1000);
  } catch (error) {
    dispatch(usersSlice.actions.usersFetchingError(getErrorMessage(error)));
  }
};
