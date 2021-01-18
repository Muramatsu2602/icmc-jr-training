import axios from "axios";
import React, { useState, useEffect } from "react";

import "./styles.css";

function Header() {
  return (
    <div className="header">
      <h1 className="title">PokeList</h1>
    </div>
  );
}

/**
 * This will display all pokemons from PokeApi in a simple HTML <table>
 * @param {*} props
 */
function FirstTable(props) {
  const [pokeList, setPokeList] = useState([]);
  const [pokeListOffset, setPokeListOffset] = useState(0);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/?offset=${pokeListOffset}&limit=20`
      );
      let vetor = [];
      for (const pokemon of response.data.results) {
        const _response = await axios.get(pokemon.url);
        vetor.push(_response.data);
      }
      setPokeList(vetor);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, [pokeListOffset]);

  return (
    <div className="firstTable">
      <table>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Weight</th>
          <th>Image</th>
          <th>Fav</th>
        </tr>
        {pokeList.length > 0 &&
          pokeList.map((pokemon) => {
            return (
              <tr>
                <td>{pokemon.name}</td>
                <td>
                  {pokemon.types.map((type) => {
                    return type.type.name + " ";
                  })}
                </td>
                <td>{pokemon.weight}</td>
                <td>
                  <img src={pokemon.sprites.front_default} />
                </td>
                <td>
                  {props.pokeController.searchPokemon(pokemon) ? (
                    <a
                      href="#"
                      onClick={() =>
                        props.pokeController.deletePokemon(pokemon)
                      }
                    >
                      Unfav
                    </a>
                  ) : (
                    <a
                      href="#"
                      onClick={() => props.pokeController.savePokemon(pokemon)}
                    >
                      Fav
                    </a>
                  )}
                </td>
              </tr>
            );
          })}
      </table>
      <div>
        <a href="#" onClick={() => setPokeListOffset(pokeListOffset + 20)}>
          Próxima
        </a>
      </div>
    </div>
  );
}

/**
 * This element displays all the starred (favoritados) pokemons from FirstTable.
 * @param {*} props
 */
function SecondTable(props) {
  return (
    <div className="secondTable">
      <table>
        <tr>
          <th>Name</th>
          <th>Image</th>
          <th>Unfav</th>
        </tr>
        {props.favPokeList.length > 0 &&
          props.favPokeList.map((pokemon) => {
            return (
              <tr>
                <td>{pokemon.name}</td>
                <td>
                  <img src={pokemon.sprites.front_default} />
                </td>
                <td>
                  <a
                    href="#"
                    onClick={() => props.pokeController.deletePokemon(pokemon)}
                  >
                    Unfav
                  </a>
                </td>
              </tr>
            );
          })}
      </table>
    </div>
  );
}

/**
 * handles all the CRUD functions regarding the functionality of the site
 * @param {*} props
 */
function Body(props) {
  const [favPokeList, setFavPokeList] = useState([]);
  const [pokeController, setPokeController] = useState({
    /**
     * Saves the chosen element as a favourite in local Storage
     * @param {*} pokemon
     */
    savePokemon: (pokemon) => {
      // let vetor = favPokeList.slice();
      let vetor =
        localStorage.getItem("favoritesPokemons") != null
          ? JSON.parse(localStorage.getItem("favoritesPokemons")).list
          : [];
      vetor.push(pokemon);
      setFavPokeList(vetor);
      localStorage.setItem(
        "favoritesPokemons",
        JSON.stringify({ list: vetor })
      ); // pode ser aqui
    },
    /**
     * Deletes untoggles o pokemon thus makes it not favourite
     * @param {*} pokemon
     */
    deletePokemon: (pokemon) => {
      // let vetor = favPokeList.filter(_pokemon => _pokemon.name != pokemon.name);
      let vetor =
        localStorage.getItem("favoritesPokemons") != null
          ? JSON.parse(localStorage.getItem("favoritesPokemons")).list
          : [];
      vetor = vetor.filter((_pokemon) => _pokemon.name != pokemon.name);
      setFavPokeList(vetor);
      localStorage.setItem(
        "favoritesPokemons",
        JSON.stringify({ list: vetor })
      );
    },
    /**
     * simple search function for all pokemons saved as favourites
     * @param {*} pokemon
     */
    searchPokemon: (pokemon) => {
      const vetor =
        localStorage.getItem("favoritesPokemons") != null
          ? JSON.parse(localStorage.getItem("favoritesPokemons")).list
          : [];
      for (const _pokemon of vetor) {
        if (pokemon.name == _pokemon.name) return true;
      }
      return false;
    },
  });

  useEffect(() => {
    const list =
      localStorage.getItem("favoritesPokemons") != null
        ? JSON.parse(localStorage.getItem("favoritesPokemons")).list
        : [];
    setFavPokeList(list);
  }, []);

  return (
    <div className="body">
      <FirstTable favPokeList={favPokeList} pokeController={pokeController} />
      <SecondTable favPokeList={favPokeList} pokeController={pokeController} />
    </div>
  );
}

function Home() {
  return (
    <div>
      <Header />
      <h2 className="subtitle">Sua lista de pokemons</h2>
      <div>
        <Body className="corpo" />
      </div>
    </div>
  );
}

export default Home;
