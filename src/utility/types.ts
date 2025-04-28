export type MovieType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [];
  genres: Genre[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  job: string;
  type: string;
  name: string;
};

export type DataType = {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: MovieType[];
  total_pages: number;
  total_results: number;
};

// In your types file, e.g., "@/utility/types.ts"
export type MovieDetailType = {
  id: number;
  original_title: string;
  backdrop_path: string;
  vote_average: number;
  overview: string;
};


export type MovieCardData = {
  results: MovieType[]; // An array of MovieType objects
};

export type GenreType = {
  id: number;
  name: string;
};

type CrewType = {
  job: string;
  id: number;
  name: string;
};

export type Genre = {
  id: number;
  name: string;
};

export type CastType = {
  id: number;
  name: string;
  department: string;
  known_for_department: string;
};


type Trailer = {
  id: string;
  type: string;
  key: string;
};
type Genres = {
  name: string;
  id: number;
  total_results: number;
};

export type MovieProductionType = {
  cast: CastType[];  // Array of cast members
  crew: CastType[];  // Array of crew members
};