import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NWUyNWQxNzJhNGZlMTUwM2MyMmZhMWJhNDMzMGFkNyIsInN1YiI6IjY0OWZhYTIyOGMwYTQ4MDEwMTc2MDlmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nHrpKIbhhYLQ4ZTHy3VMNyp0BtLSTVflirtC5D7XPA0",
  },
};

const popular = async () => {
  const data = await axios.get(
    "https://api.themoviedb.org/3/movie/popular",
    options
  );
  return data.data.results.slice(0, 8);
};

//heroSection
export const usefetchHero = () => {
  return useQuery({
    queryKey: ["hero"],
    queryFn: popular,
  });
};

//top recommend
const recommend = async (id: number) => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/recommendations`,
    options
  );
  return data.data.results.slice(5, 8);
};

//HeroSection recommend
export const useTopRate = (id: number) => {
  return useQuery({
    queryKey: ["recommend"],
    queryFn: () => recommend(id),
  });
};

//upcoming
const popularOption = {
  method: "GET",
  params: { language: "en-US", page: "1" },
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NWUyNWQxNzJhNGZlMTUwM2MyMmZhMWJhNDMzMGFkNyIsInN1YiI6IjY0OWZhYTIyOGMwYTQ4MDEwMTc2MDlmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nHrpKIbhhYLQ4ZTHy3VMNyp0BtLSTVflirtC5D7XPA0",
  },
};

const FetchPopular = async () => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/movie/popular`,
    popularOption
  );
  return data.data.results;
};

export const usePopular = () => {
  return useQuery({
    queryKey: ["upComing"],
    queryFn: FetchPopular,
  });
};
