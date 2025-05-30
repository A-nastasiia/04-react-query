import axios from "axios";
import type { FetchMoviesParams, MovieResponse } from "../types/movie";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_API_KEY;

export async function fetchMovies({
  query,
  page,
}: FetchMoviesParams): Promise<MovieResponse> {
  const response = await axios.get<MovieResponse>(`${BASE_URL}/search/movie`, {
    params: { query, page },
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      Accept: "application/json",
    },
  });

  return response.data;
}