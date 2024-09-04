import { FC } from "react";
import { IUser } from "../../models/IUser";
import { TableCell, TableRow } from "@mui/material";

interface TableRowProps {
  user: IUser;
}

const TableRowComponent: FC<TableRowProps> = ({ user }) => {
  return (
    <TableRow>
      <TableCell>{user.name}</TableCell>
      <TableCell>{user.username}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>{user.phone}</TableCell>
    </TableRow>
  );
};

export default TableRowComponent;
