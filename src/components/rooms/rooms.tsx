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
import hotelService from "../../services/hotel.service";
import roomService from "../../services/room.service";
import { IRoom } from "../hotelsList/hotelsList";
import { Button, Input } from "@mui/material";
import { ActionButton, ActionTableCell, Header } from "./rooms.style";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Rooms = () => {
  let { id } = useParams();
  const navigate = useNavigate();

  const [rooms, setRooms] = useState<IRoom[]>([]);
  const [hotelName, setHotelName] = useState<string>("");
  const [editItem, setEditItem] = useState<IRoom | null>(null);

  useEffect(() => {
    if (id) getData(+id);
  }, [id]);

  const getData = (id: number) =>
    hotelService.get(id).then((response) => {
      setRooms(response.data.rooms);
      setHotelName(response.data.name);
    });

  const saveItem = () => {
    if (editItem)
      roomService.update(editItem.id, editItem).then((response) => {
        if (id) getData(+id);
      });
    setEditItem(null);
  };

  const loadCellData = (
    row: IRoom,
    field: string,
    isNumber: boolean = false
  ) => {
    return (
      <>
        {editItem?.id === row.id ? (
          <Input
            type={isNumber ? "number" : "text"}
            value={editItem[field as keyof IRoom]}
            onChange={(e) =>
              setEditItem({ ...editItem, [field]: e.target.value })
            }
            style={isNumber ? { width: 50 } : {}}
          ></Input>
        ) : (
          row[field as keyof IRoom]
        )}
      </>
    );
  };

  return (
    <>
      <Header container>
        <Button onClick={() => navigate(-1)}>
          <ArrowBackIcon />
        </Button>
        <h4>{hotelName} Rooms</h4>
      </Header>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Room Name</TableCell>
              <TableCell>Adults</TableCell>
              <TableCell>Children</TableCell>
              <TableCell>Price</TableCell>
              <ActionTableCell align="right"></ActionTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rooms.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell component="th" scope="row">
                  {loadCellData(row, "name")}
                </TableCell>
                <TableCell component="th" scope="row">
                  {loadCellData(row, "adults", true)}
                </TableCell>
                <TableCell component="th" scope="row">
                  {loadCellData(row, "children", true)}
                </TableCell>
                <TableCell component="th" scope="row">
                  {loadCellData(row, "price", true)}
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

export default Rooms;
