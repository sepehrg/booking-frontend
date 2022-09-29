import { Button, Grid } from "@mui/material";
import styled from "styled-components";

export const HotelName = styled.h4`
  padding-left: 20px;
`;

export const HotelInfo = styled(Grid)`
  ${(props) => props.theme.breakpoints.down("md")} {
    flex-direction: column;
  }
`;

export const CaroselItem = styled(Grid)`
  width: 558px;
  ${(props) => props.theme.breakpoints.down("md")} {
    width: 100%;
  }
`;

export const Container = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  margin: 4px;
`;

export const HotelImage = styled.img`
  width: 550px;
  border: 1px solid #ccc;
  border-radius: 10px;
  ${(props) => props.theme.breakpoints.down("md")} {
    width: 100%;
  }
`;

export const Description = styled(Grid)`
  margin: 0 20px;
  ${(props) => props.theme.breakpoints.down("md")} {
    margin: 20px 0;
  }
`;

export const Rooms = styled.h6`
  color: gray;
`;

export const RoomList = styled(Grid)`
  flex-direction: column;
`;

export const Room = styled(Grid)`
  width: 250px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 5px;
  margin: 4px;
  ${(props) => props.theme.breakpoints.down("md")} {
    width: 100%;
  }
`;

export const RoomColumn = styled(Grid)`
  flex-direction: column;
  align-items: start;
  ${(props) => props.theme.breakpoints.down("md")} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
  }
`;

export const BookButton = styled(Button)`
  color: white;
  background-color: #7baaa6;
  :hover {
    background-color: #a0c8c5;
  }
`;
