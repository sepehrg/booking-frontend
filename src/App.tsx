import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/layout/layout";
import { Route, Routes } from "react-router-dom";
import HotelsList from "./components/hotelsList/hotelsList";
import { createTheme, ThemeProvider } from "@mui/material";
import Hotel from "./components/hotel/hotel";
import Manage from "./components/manage/manage";
import Rooms from "./components/rooms/rooms";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Routes>
          <Route path="/" element={<HotelsList />} />
          <Route path="/hotels" element={<HotelsList />} />
          <Route path="/hotels/:id" element={<Hotel />} />
          <Route path="/manage" element={<Manage />} />
          <Route path="/rooms/:id" element={<Rooms />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
