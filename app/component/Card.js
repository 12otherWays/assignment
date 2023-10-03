import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import styled from "@emotion/styled";
import PeopleIcon from "@mui/icons-material/People";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import SpeedIcon from "@mui/icons-material/Speed";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const CardDiv = styled("div")(({ theme }) => ({
  width: "300px",
  padding: "20px",
  margin: "auto",
  borderRadius: "20px",
  gap: "10px",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "rgb(239,244,251)",
  overflow: "hidden",
  transition: "all 200ms ease-in-out",
  boxShadow:
    "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
  "&:hover": {
    transform: "scale(1.02)",
  },
}));
const DetailDiv = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: "45%",
  gap: "10px",
}));
const Heading = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  display: "flex",
  alignItems: "center",
}));
const Para = styled(Typography)(({ theme }) => ({
  fontSize: "12px",
  fontWeight: 200,
  color: "rgb(79,88,111)",
}));
const Para2 = styled(Typography)(({ theme }) => ({
  fontSize: "12px",
  fontWeight: 200,
}));

function Card({ data }) {
  return (
    <CardDiv>
      <Box
        sx={{
          position: "relative",
          height: "200px",
          width: "100%",
          borderRadius: "10px",
          backgroundImage: `url(${data.image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Heading>
          {data.company}&#160;{data.model}
        </Heading>
        <Para
          sx={{
            border: "2px dashed rgb(59,132,223)",
            borderRadius: "10px",
            padding: "1px 6px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {data.year_of_manufacturing}
        </Para>
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
        <DetailDiv>
          <PeopleIcon sx={{ fill: "rgb(59,132,223)" }} />
          <Para2>{data.no_of_seats} people</Para2>
        </DetailDiv>
        <DetailDiv>
          <LocalGasStationIcon sx={{ fill: "rgb(59,132,223)" }} />
          <Para2>{data.fuel_type}</Para2>
        </DetailDiv>
        <DetailDiv>
          <SpeedIcon sx={{ fill: "rgb(59,132,223)" }} />
          <Para2>{data.mileage}</Para2>
        </DetailDiv>
        <DetailDiv>
          <BlurOnIcon sx={{ fill: "rgb(59,132,223)" }} />
          <Para2>{data.driving_type}</Para2>
        </DetailDiv>
      </Box>
      <Divider />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Heading>
          {data.price}&#160;
          <span style={{ fontSize: "12px" }}>/&#160;month</span>
        </Heading>
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              backgroundColor: "rgba(59,132,223,0.2)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              padding: "6px",
              marginRight: "20px",
            }}
          >
            <FavoriteBorderOutlinedIcon
              sx={{ fill: "rgba(59,132,223)", fontSize: "18px" }}
            />
          </Box>
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: 200,
              backgroundColor: "rgb(59,132,223)",
              color: "white",
              borderRadius: "10px",
              padding: "6px 10px",
            }}
          >
            Rent now
          </Typography>
        </Box>
      </Box>
    </CardDiv>
  );
}

export default Card;
