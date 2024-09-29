import { heroes } from "../data/heroes";

import { heroes2 } from "../data/heroes";

import { villanos } from "../data/villanos";

// import malditos from "./data/malditos";

import malditos, { trillanos, owners } from "../data/malditos";

import {
  malditosBastardos,
  trillanosBastardos,
  ownersBastardos,
} from "../data/bastardos";

const imprimepantalla1 = () => {
  console.log("Heroes:", heroes);

  console.log("Heroes2:", heroes2);

  console.log("Villanos:", villanos);

  console.log("Malditos:", malditos);

  console.log("Trillanos:", trillanos);

  console.log("Owner:", owners);

  console.log("MalditosBastardos:", malditosBastardos);

  console.log("TrillanosBastardos:", trillanosBastardos);

  console.log("OwnerBastardos:", ownersBastardos);
};

// imprimepantalla1();

export const getHeroebyId = (id) => {
  return heroes.find((heroe) => {
    if (heroe.id === id) {
      return true;
    } else {
      return false;
    }
  });
};

const getHeroebyId2 = (id) =>
  heroes.find((heroe) => {
    if (heroe.id === id) {
      return true;
    } else {
      return false;
    }
  });

const getHeroebyId3 = (id) => {
  return heroes.find((heroe) => heroe.id === id);
};

const getHeroebyId4 = (id) => heroes.find((heroe) => heroe.id === id);

const getHerosbyOwners = (owner) =>
  heroes.find((heroe) => heroe.owner === owner);

export const getHerosbyOwners2 = (owner) =>
  heroes.filter((heroe) => heroe.owner === owner);

const imprimepantalla2 = () => {
  console.log(getHeroebyId(2));
  console.log(getHeroebyId2(3));
  console.log(getHeroebyId3(4));
  console.log(getHeroebyId4(5));

  console.log(getHerosbyOwners("DC"));

  console.log("getHeroesbyOwner with Find: ", getHerosbyOwners("DC"));
  console.log("getHeroesbyOwner with Filter: ", getHerosbyOwners2("DC"));
};

// imprimepantalla2();
