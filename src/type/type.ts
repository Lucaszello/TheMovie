id: 569094;
original_language: "en";
overview: "After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.";
popularity: 2673.435;
poster_path: "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg";
release_date: "2023-05-31";
title: "Spider-Man: Across the Spider-Verse";
video: false;
vote_average: 8.5;
vote_count: 3468;
backdrop_path: "/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg";

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
  title:string;
}


//people
export interface PeopleProp {
  id: number;
  profile_path : string,
  name : string
}