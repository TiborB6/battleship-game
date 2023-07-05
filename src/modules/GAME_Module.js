// Function for a ship objects

function createShip(length) {
  return {
    health: length,
    position: null,

    hit(v) {
      this.health -= v;
    },

    isSunk() {
      return this.health <= 0;
    },
  };
}

function createGameField() {
  const hash = {};
  // Creates a field grid as a hashmap with hit and ship propersties for later property tracking
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      hash[[i + 1, j + 1]] = {
        hit: false,
        ship: null,
      };
    }
  }

  return {
    hash, // Gamefield

    // places ship on the grid
    placeShip(ship) {
      ship.position.forEach((coords) => {
        this.hash[coords].ship = ship; // assign the ship to the field
      });
    },

    attack(coords) {
      this.hash[coords].hit = true; // sets the field as hit
      if (this.hash[coords].ship != null) {
        this.hash[coords].ship.hit(1); // Gives a hit to a ship if its sunk
      }
      return this.hash[coords].ship.isSunk();
    },
  };
}

function createPlayer() {
  return {
    field: createGameField(),
    ships: {
      carrier: createShip(5),
      battleship: createShip(4),
      destroyer: createShip(3),
      submarine: createShip(3),
      partol: createShip(2),
    },
  };
}

function createBot() {
  return {
    field: createGameField(),
    ships: {
      carrier: createShip(5),
      battleship: createShip(4),
      destroyer: createShip(3),
      submarine: createShip(3),
      partol: createShip(2),
    },
  };
}

export {
  createShip,
  createGameField,
  createPlayer,
  createBot,
};
