import { Camper } from "@/types/camper";
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

