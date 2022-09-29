import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import hotelService from "../../services/hotel.service";
import { IHotel } from "../hotelsList/hotelsList";
import { Input } from "@mui/material";
import { ActionButton, ActionTableCell, Header } from "./manage.style";
import { useNavigate } from "react-router-dom";

const Manage = () => {
  const navigate = useNavigate();
  const [hotels, setHotels] = useState<IHotel[]>([]);
  const [editItem, setEditItem] = useState<IHotel | null>(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = () =>
    hotelService.getAll().then((response) => setHotels(response.data));

  const saveItem = () => {
    if (editItem)
      hotelService
        .update(editItem.id, { name: editItem.name })
        .then((response) => getData());
    setEditItem(null);
  };

  const loadCellData = (row: IHotel, field: string) => {
    return (
      <>
        {editItem?.id === row.id ? (
          <Input
            value={editItem[field as keyof IHotel]}
            onChange={(e) =>
              setEditItem({ ...editItem, [field]: e.target.value })
            }
          ></Input>
        ) : (
          row[field as keyof IHotel]
        )}
      </>
    );
  };

  return (
    <>
      <Header container>
        <h4>Hotels</h4>
      </Header>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Hotel Name</TableCell>
              <ActionTableCell>Rooms</ActionTableCell>
              <ActionTableCell align="right"></ActionTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {hotels.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {loadCellData(row, "name")}
                </TableCell>
                <TableCell component="th" scope="row">
                  <ActionButton onClick={() => navigate(`/rooms/${row.id}`)}>
                    <MeetingRoomIcon />
                  </ActionButton>
                </TableCell>
                <ActionTableCell align="right">
                  {editItem?.id === row.id ? (
                    <>
                      <ActionButton onClick={saveItem}>
                        <SaveIcon />
                      </ActionButton>
                      <ActionButton onClick={() => setEditItem(null)}>
                        <CancelIcon />
                      </ActionButton>
                    </>
                  ) : (
                    <ActionButton onClick={() => setEditItem(row)}>
                      <EditIcon />
                    </ActionButton>
                  )}
                </ActionTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Manage;
