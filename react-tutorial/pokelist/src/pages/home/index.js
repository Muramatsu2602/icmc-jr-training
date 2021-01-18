import React, { useState, useEffect } from "react";
import axios from "axios";
/**
 * useState -> consegue saber quando certa variavel foi alterada
 * useEffect -> vc passa uma funcao nele
 *  - la, quando o componente for carregado, ele vai disparar
 */

function Header() {
  return <div></div>;
}

function FirstTable(props) {
  const [pokeList, setPokelist] = useState([]);
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
      setPokelist(vetor.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [pokeListOffset]);

  return (
    <div>
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
                  <img src={pokemon.sprites.font_default} />
                </td>

                <td>
                  {props.searchPokemon(pokemon) ? (
                    <a
                      href="#"
                      onClick={() =>
                        props.pokeController.deletePokemon(pokemon)
                      }
                    >
                      Desfavoritar
                    </a>
                  ) : (
                    <a
                      href="#"
                      onClick={() => props.pokeController.savePokemon(pokemon)}
                    >
                      Favoritar
                    </a>
                  )}
                </td>
              </tr>
            );
          })}
      </table>
      <div>
        <a href="#" onClick={() => setPokeListOffset(pokeListOffset + 20)}>
          Next
        </a>
      </div>
    </div>
  );
}

function SecondTable() {
  return <div></div>;
}

function Body(props) {
  const [favPokeList, setFavPokeList] = useState([]);
  const [pokeController, setPokeController] = useState({
    savePokemon: (pokemon) => {},
    deletePokemon: (pokemon) => {},
    searchPokemon: (pokemon) => {},
  });

  useEffect(() => {
    setFavPokeList(JSON.parse(localStorage.getItem("favoritesPokemons")));
  }, []);

  return (
    <div>
      <FirstTable favPokelist={favPokeList} pokeController={pokeController} />
      <SecondTable favPokelist={favPokeList} pokeController={pokeController} />
    </div>
  );
}

function Home() {
  return (
    <div>
      <Header />
      <h2></h2>
      <Body>
        <FirstTable />
        <SecondTable />
      </Body>
    </div>
  );
}

export default Home;
