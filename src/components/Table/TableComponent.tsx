import { useState } from "react";
import {
  Box,
  TableBody,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { useAppSelector } from "../../store/hook";
import TableRowComponent from "../TableRow/TableRowComponent";

type IDType = "name" | "username" | "email" | "phone";
interface IColumn {
  id: IDType;
  label: string;
  minWidth?: string;
}

const TableComponent = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const filterUsers = useAppSelector((state) => state.FilterReducer.filterUsers);
  const columns: readonly IColumn[] = [
    { id: "name", label: "Name" },
    { id: "username", label: "User Name" },
    { id: "email", label: "Email" },
    { id: "phone", label: "Phone" },
  ];
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box sx={tableContainerStyle}>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    style={{
                      width: "25%",
                      backgroundColor: "#1976d2",
                      color: "#fff",
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {filterUsers &&
                filterUsers
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((user) => <TableRowComponent key={user.id} user={user} />)}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={10}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};

const tableContainerStyle = {
  width: "100%",
};

export default TableComponent;
