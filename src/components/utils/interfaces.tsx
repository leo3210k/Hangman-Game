interface Word {
  word: string;
  category: string;
}

interface HangmanWords {
  movies: string[];
  tv_shows: string[];
  countries: string[];
  capital_cities: string[];
  animals: string[];
  sports: string[];
}

interface HangmanData {
  words: HangmanWords;
}
