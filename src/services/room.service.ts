import { IRoom } from "../components/hotelsList/hotelsList";
import http from "../http-common";

class RoomService {
  update(id: number, room: Partial<IRoom>) {
    return http.patch(`/rooms/${id}`, room);
  }
}

export default new RoomService();
