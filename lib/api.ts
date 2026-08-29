import { Camper } from "@/types/camper";
import { Review } from "@/types/review";
import axios from "axios";

const api = axios.create({
    baseURL: "https://campers-api.goit.study",
})

export type CamperFiltersParams = {
    location?: string,
    form?: Camper['form'],
    engine?: Camper['engine'],
    transmission?: Camper['transmission'],
}

export type CampersResponse = {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  campers: Camper[];
};

export const getCampers = async ({
  page,
  perPage,
  location,
  form,
  engine,
  transmission,
}: CamperFiltersParams & {
  page: number;
  perPage: number;
}): Promise<CampersResponse> => {
  const { data } = await api.get<CampersResponse>('/campers', {
    params: {
      page,
      perPage,
      location,
      form,
      engine,
      transmission,
    },
  });

  return data;
};

export const getCamperById = async (camperId: string): Promise<Camper> => {
  const { data } = await api.get<Camper>(`/campers/${camperId}`);

  return data;
};

export const getCamperReviews = async (camperId: string): Promise<Review[]> => {
  const { data } = await api.get<Review[]>(`/campers/${camperId}/reviews`);

  return data;
};

export type BookingRequest = {
  name: string;
  email: string;
};

export type BookingResponse = {
  message: string;
};

export const createBookingRequest = async (
  camperId: string,
  bookingData: BookingRequest
): Promise<BookingResponse> => {
  const { data } = await api.post<BookingResponse>(
    `/campers/${camperId}/booking-requests`,
    bookingData
  );

  return data;
};