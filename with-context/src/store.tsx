import { useMemo, useState, createContext, useContext } from "react";

export interface Pokemon {
  id: number;
  name: string;
  image: string;
}

const usePokemonController = (pokemons: Pokemon[]) => {
  const [filter, setFilter] = useState("");

  const filteredPokemon = useMemo(
    () =>
      pokemons.filter((p) =>
        p.name.toLowerCase().includes(filter.toLowerCase())
      ),
    [filter, pokemons]
  );

  return {
    filter,
    setFilter,
    pokemoms: filteredPokemon,
  };
};

const PokemonContext = createContext<ReturnType<typeof usePokemonController>>({
  filter: "",
  setFilter: () => {},
  pokemoms: [],
})

export const PokemonProvider = ({ pokemons, children }) => (
  <PokemonContext.Provider value={usePokemonController(pokemons)}>
    {children}
  </PokemonContext.Provider>
);

export const usePokemon = () => useContext(PokemonContext);