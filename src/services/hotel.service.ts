import { IHotel } from "../components/hotelsList/hotelsList";
import http from "../http-common";

class HotelService {
  getAll() {
    return http.get("/hotels");
  }

  get(id: number) {
    return http.get(`/hotels/${id}`);
  }

  update(id: number, hotel: Partial<IHotel>) {
    return http.patch(`/hotels/${id}`, hotel);
  }
}

export default new HotelService();
