/* eslint-disable react-hooks/rules-of-hooks */
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

//Option2
const Option2 = {
  method: "GET",
  params: { language: "en-US", page: "1" },
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NWUyNWQxNzJhNGZlMTUwM2MyMmZhMWJhNDMzMGFkNyIsInN1YiI6IjY0OWZhYTIyOGMwYTQ4MDEwMTc2MDlmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nHrpKIbhhYLQ4ZTHy3VMNyp0BtLSTVflirtC5D7XPA0",
  },
};

const popular = async () => {
  const data = await axios.get(
    "https://api.themoviedb.org/3/movie/popular",
    Option2
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



const FetchPopular = async () => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/movie/popular`,
    Option2
  );
  return data.data.results;
};

export const usePopular = () => {
  return useQuery({
    queryKey: ["popular"],
    queryFn: FetchPopular,
  });
};

const detail = async (id: number) => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}  `,
    options
  );
  return data.data;
};

export const useDetail = (id: number) => {
  return useQuery({
    queryKey: ["detail", { id }],
    queryFn: () => detail(id),
  });
};

//movie
const video = async (id: number , path : string) => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/${path}/${id}/videos `,
    options
  );
  return data.data.results;
};

export const useVideo = (id: number,path : string) => {
  return useQuery({
    queryKey: ["video"],
    queryFn: () => video(id,path),
  });
};

//upComing
const upComing = async () => {
  const data = await axios.get(
    "https://api.themoviedb.org/3/movie/upcoming",
    Option2
  );
  return data.data.results;
};

export const useUpcoming = () => {
  return useQuery({
    queryKey: ["upcoming"],
    queryFn: upComing,
  });
};

//credits
const credits = async (id: number) => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits`,
    Option2
  );
  return data.data;
};

export const useCredits = (id: number) => {
  return useQuery({
    queryKey: ["credits", { id }],
    queryFn: () => credits(id),
  });
};

//Recommendation
const Recommend = async (id: number) => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/recommendations`,
    options
  );
  return data.data.results;
};

//HeroSection recommend
export const useRecommend = (id: number) => {
  return useQuery({
    queryKey: ["recommend", { id }],
    queryFn: () => Recommend(id),
  });
};

//search people & tv & movie
export const Search = async (
  path: string,
  query: string | undefined
) => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/search/${path}?query=${query}`,
    Option2
  );
  return data.data.results;
};

export const useSearch = (path: string, query: string | undefined) => {
  return useQuery({
    queryKey: ["search",query],
    queryFn: () => Search(path, query),
  });
};


//people
const People = async () => {
  const data = await axios.get('https://api.themoviedb.org/3/person/popular',Option2);
  return data.data.results
}

export const usePeople = ()  => {
  return useQuery({
    queryKey : ['people'],
    queryFn : People
  })
}


//tvshow
const Tv = async (str : string) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/trending/tv/${str}`,
    Option2
  );
  return data.results
}

export const useTv = (str : string) => {
  return useQuery({
    queryKey : ["Tv"],
    queryFn : () =>  Tv(str)
  })
}


//tv Airing today
export const Air = async () => {
  const { data } = await axios.get(
    "https://api.themoviedb.org/3/tv/airing_today",Option2
  );
  return data.results
}

export const useAir = () => {
  return useQuery({
    queryKey : ['air'],
    queryFn : Air
  })
}

const TvDetail = async (id : number )  => {
  const data = await axios.get(`https://api.themoviedb.org/3/tv/${id}`,Option2);
  return data.data
};


export const useTvDetail = (id : number) => {
  return useQuery({
    queryKey : ["tv-detail",id],
    queryFn  : () => TvDetail(id)
  })
}