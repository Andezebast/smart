import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";

interface IFilterPayload {
  column: string;
  value: string;
}
interface IFilterState {
  allUsers: IUser[];
  filterUsers: IUser[];
}
const initialState: IFilterState = {
  allUsers: [],
  filterUsers: [],
};
export const FilterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setAllUsers(state, action: PayloadAction<IUser[]>) {
      state.allUsers = action.payload;
      state.filterUsers = action.payload;
    },
    setFilterUsers(state, action: PayloadAction<IFilterPayload>) {
      const { column, value } = action.payload;
      state.filterUsers = state.allUsers.filter((user) => {
        const userValue = user[column as keyof IUser] as string;
        return userValue.toLowerCase().includes(value.toLowerCase());
      });
    },
  },
});

export default FilterSlice.reducer;
