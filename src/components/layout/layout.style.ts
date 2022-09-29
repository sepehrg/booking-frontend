import { Grid } from "@mui/material";
import styled from "styled-components";

export const Container = styled(Grid)`
  width: 1018px;
  margin: 0 auto;
  ${(props) => props.theme.breakpoints.down("md")} {
    width: 100%;
  }
`;
