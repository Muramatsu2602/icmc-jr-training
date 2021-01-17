import React, { useState, useEffect } from 'react';
import axios from 'axios';
/**
 * useState -> consegue saber quando certa variavel foi alterada
 * useEffect -> vc passa uma funcao nele
 *  - la, quando o componente for carregado, ele vai disparar
 */

function Header() {

  return (


    <div>

    </div>
  );
}

function FirstTable() {
  const [pokeList, setPokelist] = useState([]);

  const fetchData = async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon');

    for(const pokemon of response.data) {
      
    }
  }

  useEffect(() => {

  }, []);

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
        {

        }
      </table>
    </div>
  );
}


function SecondTable() {
  return (
    <div>

    </div>
  );
}

function Home() {
  return (
    <div>
      <Header />
      <h2></h2>
      <div>
        <FirstTable />
        <SecondTable />
      </div>
    </div>
  );
}

export default Home;