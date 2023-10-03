import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/material";

function SearchBar({ searchText, handleChange, handleSubmit }) {
  return (
    <Box
      sx={{
        backgroundColor: "rgb(239,244,251)",
        boxShadow:
          "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
        padding: "10px 20px",
        borderRadius: "20px",
      }}
    >
      <Paper
        component="form"
        sx={{
          p: "2px 6px",
          display: "flex",
          alignItems: "center",
          width: 400,
          borderRadius: "20px",
        }}
        onSubmit={handleSubmit}
      >
        <InputBase
          sx={{ ml: 4, flex: 1 }}
          placeholder="Search"
          inputProps={{ "aria-label": "search" }}
          value={searchText}
          onChange={handleChange}
        />
        <IconButton
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
          onClick={handleChange}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </Box>
  );
}

export default SearchBar;
