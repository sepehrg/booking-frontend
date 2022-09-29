import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import hotelService from "../../services/hotel.service";
import {
  HotelItem,
  HotelImage,
  HotelLink,
  Item,
  Price,
  Title,
  CaroselItem,
} from "./hotelsList.style";

export interface IHotel {
  id: number;
  name: string;
  images: string;
  rooms: IRoom[];
}

export interface IRoom {
  id: number;
  name: string;
  price: number;
  adults: number;
  children: number;
}

const HotelsList = () => {
  const [hotels, setHotels] = useState<IHotel[]>([]);

  useEffect(() => {
    hotelService.getAll().then((response) => setHotels(response.data));
  }, []);

  return (
    <>
      <h3>List of hotels</h3>

      <HotelItem container>
        {hotels.map((hotel) => (
          <Item item key={hotel.id}>
            <HotelItem container>
              <CaroselItem item>
                <Carousel>
                  {hotel.images.split(";").map((image) => (
                    <Carousel.Item interval={999999} key={image}>
                      <HotelLink to={`/hotels/${hotel.id}`}>
                        <HotelImage
                          src={`${process.env.REACT_APP_API_URL}/uploads/${image}`}
                          alt="room"
                        />
                      </HotelLink>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </CaroselItem>
              <Title item>
                <HotelLink to={`/hotels/${hotel.id}`}>
                  <h4>{hotel.name}</h4>
                </HotelLink>
                <Price>From ${hotel.rooms[0].price}</Price>
              </Title>
            </HotelItem>
          </Item>
        ))}
      </HotelItem>
    </>
  );
};

export default HotelsList;
