import { usePokemon } from "../../src/store";
import styles from "../../styles/Home.module.css";

const Pokemons = () => {
  const { filter, setFilter, pokemoms } = usePokemon();

  return (
    <>
      <div>
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className={styles.search}
        />
      </div>
      <div className={styles.container}>
        {pokemoms.slice(0, 20).map((p) => (
          <div key={p.id} className={styles.image}>
            <img
              alt={p.name}
              src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${p.image}`}
            />
            <h2>{p.name}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default Pokemons;
