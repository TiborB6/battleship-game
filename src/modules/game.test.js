import { 
  createShip,
  createGameField,
} from "./GAME_Module"

test('test workting', () => {
  expect(1).toBe(1)
})

test('ship-test: length, position, methods', () => {
  const ship = createShip(4, [[1,1], [1, 2], [1, 3], [1, 4]]);
  ship.hit(4)
  expect(ship.isSunk()).toBe(true)
});

test('gamefield: ', () => {
  const field = createGameField() 
  const ship = createShip(4);
  ship.position = [[1,1], [1, 2], [1, 3], [1, 4]]
  expect(field.hash['1,1'].hit).toBe(false)
  expect(field.hash['1,1'].ship).toBe(null)
  field.placeShip(ship)
  field.attack([1, 1])
  expect(field.hash['1,1'].ship).toBe(ship)
  expect(field.hash['1,1'].hit).toBe(true)
})

test('player', () => {
  const player = null;
})