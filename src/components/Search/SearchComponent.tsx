import { Box, Button, FormControl, InputLabel, MenuItem, TextField } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import { useAppDispatch } from "../../store/hook";
import { FilterSlice } from "../../store/Filter/FilterSlice";

const SearchComponent = () => {
  const [button, setButton] = useState<boolean>(false);
  const [column, setColumn] = useState<string>("");
  const dispatch = useAppDispatch();
  const handleChange = (event: SelectChangeEvent) => {
    setColumn(event.target.value);
  };
  const handleEventInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(FilterSlice.actions.setFilterUsers({ column, value: event.target.value }));
  };
  return (
    <Box sx={searchStyle}>
      <Button variant="contained" onClick={() => setButton(!button)}>
        Search
      </Button>
      {button && (
        <Box style={{ paddingTop: "25px" }}>
          <FormControl style={{ width: "200px" }}>
            <InputLabel id="demo-simple-select-label">Column</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={column}
              label="Column"
              onChange={handleChange}
            >
              <MenuItem value="name">Name</MenuItem>
              <MenuItem value="username">User Name</MenuItem>
              <MenuItem value="email">Email</MenuItem>
              <MenuItem value="phone">Phone</MenuItem>
            </Select>
          </FormControl>
          {column !== "" && (
            <TextField
              id="outlined-basic"
              label={`Search by ${column} `}
              variant="outlined"
              onChange={handleEventInput}
              style={{ marginLeft: "25px" }}
            />
          )}
        </Box>
      )}
    </Box>
  );
};

const searchStyle = {
  paddingBottom: "25px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
};
export default SearchComponent;
