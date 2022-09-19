import Pokemons from "../components/pokemons";
import { Pokemon, PokemonProvider } from "../src/store";
import styles from "../styles/Home.module.css";

export default function Home({ pokemons }: { pokemons: Pokemon[] }) {
  return (
    <PokemonProvider pokemons={pokemons}>
      <div className={styles.container}>
        <Pokemons></Pokemons>
      </div>
    </PokemonProvider>
  );
}

export const getServerSideProps = async () => {
  const resp = await fetch(
    "https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json"
  );

  return {
    props: {
      pokemons: await resp.json(),
    },
  };
};
