import { Box, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";

function PaginationComp({ page, handleChange, data }) {
  return (
    <Box
      sx={{
        backgroundColor: "rgb(239,244,251)",
        boxShadow:
          "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
        padding: "10px 20px",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography>6 out of {data.length} </Typography>

      <Pagination
        count={10}
        page={page}
        onChange={handleChange}
        sx={{ "&:active": { color: "green" } }}
      />
    </Box>
  );
}

export default PaginationComp;
