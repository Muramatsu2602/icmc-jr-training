import React, { useState, useEffect } from 'react';
/**
 * useState -> consegue saber quando certa variavel foi alterada
 *
 */

function Header() {

  return (


    <div>

    </div>
  );
}

function FirstTable() {
  const [pokeList, setPokelist] = useState([]);

  return (
    <div>

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