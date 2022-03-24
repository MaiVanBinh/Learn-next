export type PokemonItem = {
  name: string;
  url: string;
};

export type PokemonsResult = {
  count: number;
  next: string;
  previous: string;
  results: PokemonItem[];
};
