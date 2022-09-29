import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { useParams } from "react-router-dom";
import hotelService from "../../services/hotel.service";
import { IHotel } from "../hotelsList/hotelsList";
import {
  BookButton,
  HotelImage,
  Container,
  Rooms,
  Room,
  Description,
  RoomList,
  HotelInfo,
  RoomColumn,
  HotelName,
  CaroselItem,
} from "./hotel.style";

const Hotel = () => {
  let { id } = useParams();
  const [hotel, setHotel] = useState<IHotel | null>(null);

  useEffect(() => {
    if (id) hotelService.get(+id).then((response) => setHotel(response.data));
  }, [id]);

  if (!hotel) return <>Hotel not found</>;

  return (
    <>
      <HotelName>{hotel.name}</HotelName>
      <Container>
        <HotelInfo container>
          <CaroselItem item>
            <Carousel>
              {hotel.images.split(";").map((image) => (
                <Carousel.Item interval={999999} key={image}>
                  <HotelImage
                    src={`${process.env.REACT_APP_API_URL}/uploads/${image}`}
                    alt="room"
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </CaroselItem>
          <Description item>
            <Rooms>Rooms: </Rooms>
            <RoomList container>
              {hotel.rooms.map((room) => (
                <Room item key={room.id}>
                  <h6>{room.name}</h6>
                  <RoomColumn container>
                    <Grid item>
                      <p>${room.price} per night</p>
                      <p>adults: {room.adults}</p>
                      <p>children: {room.children}</p>
                    </Grid>
                    <Grid item>
                      <BookButton>Book Now</BookButton>
                    </Grid>
                  </RoomColumn>
                </Room>
              ))}
            </RoomList>
          </Description>
        </HotelInfo>
      </Container>
    </>
  );
};

export default Hotel;
