import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Grid)`
  width: 100%;
`;

export const HotelItem = styled(Grid)`
  ${(props) => props.theme.breakpoints.down("md")} {
    flex-direction: column;
  }
`;

export const CaroselItem = styled(Grid)`
  width: 354px;
`;

export const HotelLink = styled(Link)`
  text-decoration: none;
`;

export const Item = styled(Grid)`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  margin: 4px;
`;

export const HotelImage = styled.img`
  width: 350px;
  border: 1px solid #ccc;
  border-radius: 10px;
  ${(props) => props.theme.breakpoints.down("md")} {
    width: 100%;
  }
`;

export const Title = styled(Grid)`
  margin-left: 20px;
`;

export const Price = styled.h6`
  color: gray;
`;
