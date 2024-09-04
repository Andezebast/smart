import { useEffect } from "react";
import SearchComponent from "../components/Search/SearchComponent";
import TableComponent from "../components/Table/TableComponent";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { fetchUsers } from "../store/Users/UsersAction";
import { FilterSlice } from "../store/Filter/FilterSlice";
import { Box, Typography } from "@mui/material";

const TablePage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  const { users, error, isLoading } = useAppSelector((state) => state.UsersReducer);
  useEffect(() => {
    if (users) {
      dispatch(FilterSlice.actions.setAllUsers(users));
    }
  }, [users]);

  if (isLoading) {
    return (
      <Box sx={tableStyle} style={{ color: "#1976d2" }}>
        <Typography variant="h4">is Loading...</Typography>
      </Box>
    );
  }
  if (error) {
    return (
      <Box sx={tableStyle} style={{ color: "#f44336" }}>
        <Typography variant="h4">{error}</Typography>
      </Box>
    );
  }
  return (
    <Box sx={tablePage}>
      <SearchComponent />
      <TableComponent />
    </Box>
  );
};

const tablePage = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  maxWidth: "1400px",
  margin: "0 auto",
  padding: "100px 25px",
};
const tableStyle = {
  maxWidth: "1400px",
  margin: "0 auto",
  padding: "100px 25px",
  textAlign: "center",
};

export default TablePage;
