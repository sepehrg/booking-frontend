import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { Container } from "./layout.style";

interface LayoutProps {
  children: React.ReactElement;
}

const Layout = (props: LayoutProps) => {
  return (
    <>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/" className="navbar-brand">
          Booking.com
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/hotels"} className="nav-link">
              Hotels
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/manage"} className="nav-link">
              Manage
            </Link>
          </li>
        </div>
      </nav>

      <Container
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item sm={12}>
          {props.children}
        </Grid>
      </Container>
    </>
  );
};

export default Layout;
