import { Box } from "@mui/material";
import Card from "./Card";
import SearchBar from "./SearchBar";
import PaginationComp from "./PaginationComp";
import data from "../../data/data.json";
import { useEffect, useState } from "react";

function Homepage() {
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [filterData, setFilterData] = useState(null);

  let start = page === 1 ? 0 : (page - 1) * 6;
  let end = 6 * page;
  const initialData = () => {
    setFilterData(data.slice(start, end));
  };

  const handleChange = (event, value) => {
    setPage(value);
  };
  const handleTextChange = (event) => {
    setSearchText(event.target.value);
  };
  const handleSubmit = (event) => {
    let filteringData = data.filter((text) => {
      return (
        searchText.toLowerCase().replaceAll(/\s/g, "") ===
        text.company.toLowerCase().replaceAll(/\s/g, "")
      );
    });
    setFilterData(filteringData);
    event.preventDefault();
  };

  useEffect(() => {
    initialData();
  }, [page]);

  useEffect(() => {}, [filterData]);

  return (
    <>
      {filterData && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgb(239,244,251)",
            padding: "40px 0",
            gap: "40px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "80%",
              gap: "40px",
            }}
          >
            <SearchBar
              searchText={searchText}
              handleChange={handleTextChange}
              handleSubmit={handleSubmit}
            />
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: "40px" }}>
              {filterData.map((item) => {
                return <Card data={item} />;
              })}
            </Box>
            <PaginationComp
              page={page}
              handleChange={handleChange}
              data={data}
            />
          </Box>
        </Box>
      )}
    </>
  );
}

export default Homepage;
