import React from "react";
import { IconButton, TableCell } from "@mui/material";
import FindInPageIcon from "@mui/icons-material/FindInPage";

interface UserListItemProps {
  columns: { id: string; label: string; minWidth?: number }[];
  row: any; 
  handleDetailClick: (user: any) => void; 
}

const UserListItem: React.FC<UserListItemProps> = ({ columns, row, handleDetailClick }) => (
  <>
    {columns.map((column) => (
      <TableCell key={column.id} align="left">
        {column.id === "detail" ? (
          <IconButton onClick={() => handleDetailClick(row)}>
            <FindInPageIcon />
          </IconButton>
        ) : (
          row[column.id]
        )}
      </TableCell>
    ))}
  </>
);

export default UserListItem;
