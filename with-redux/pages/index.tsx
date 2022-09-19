import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import getStore, {
  getPokemon,
  selectFilteredPokemon,
  selectSearch,
  setSearch,
  store,
} from "../src/store";
import styles from "../styles/Home.module.css";

export default function Home() {
  const dispatch = useDispatch();

  const pokemon = useSelector(selectFilteredPokemon);
  const search = useSelector(selectSearch);

  return (
    <div className={styles.main}>
      <Head>
        <title>Pokemon</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/about">About</Link>
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => {
            dispatch(setSearch(e.target.value));
          }}
          className={styles.search}
        />
      </div>
      <div className={styles.container}>
        {pokemon.slice(0, 20).map((p) => (
          <div key={p.id} className={styles.image}>
            <img
              alt={p.name}
              src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${p.image}`}
            />
            <h2>{p.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const store = getStore();
  await store.dispatch(getPokemon());

  return {
    props: {
      initialState: store.getState(),
    },
  };
};
