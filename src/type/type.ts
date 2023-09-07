export interface heroSection {
  id: number;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  vote_count: number;
  backdrop_path: string;
}
[];

//upcoming
export interface upComingProp {
  backdrop_path: string;
  id: string;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  vote_count: number;
}
[];

//detail
export interface detailProp {
  backdrop_path: string;
  budget: number;
  genres: [{ name: string }, { name: string }, { name: string }];
  homepage: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: [
    {
      logo_path: string;
      name: string;
      origin_country: string;
    },
    {
      logo_path: string;
      name: string;
      origin_country: string;
    },
    {
      logo_path: string;
      name: string;
      origin_country: string;
    },
    {
      logo_path: string;
      name: string;
      origin_country: string;
    }
  ];
  release_date: string;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  title: string;
  vote_average: number;
  vote_count: number;
}

//cast
export interface CastProp {
  cast_id: 1;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  order: number;
  original_name: string;
  popularity: number;
  profile_path: string;
}

//type
export interface RecommendProp {
  backdrop_path: string;
  id: number;
  title: string;
}

//people
export interface PeopleProp {
  id: number;
  profile_path: string;
  name: string;
}

//tv
export interface tv {
  backdrop_path: string;
  first_air_date: string;
  id: number;
  name: string;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

//tv detail
export interface tvDetailProp extends tv {
  homepage: string;
  last_air_date: string;
  last_episode_to_air: [
    id: number,
    name: number,
    overview: string,
    air_date: string,
    episode_number: number,
    episode_type: string,
    season_number: number,
    show_id: number,
    still_path: string
  ];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: ["string"];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  seasons: [
    {
      air_date: string;
      episode_count: number;
      id: number;
      name: string;
      overview: string;
      poster_path: string;
      season_number: number;
      vote_average: number;
    }
  ];
  genres: 
    {
      id: number;
      name: string;
    }[]
    status : string
}
