import { Ship } from '../Factories/ShipFactory';
import { Board, ShipCoordinatesInterface } from '../Factories/BoardFactory';
import { shipCoordinates } from './variables';

const playerBoard = Board(shipCoordinates);

test('Return false, if ship length = 0 and hence be sunk. Otherwise return true', () => {
  let bigShip = Ship(4);
  let singleShip = Ship(1);
  expect(bigShip.hit()).toBe(true);
  expect(singleShip.hit()).toBe(false);
});

test('Expect receiveAttack to return true if it hits a ship. Otherwise return false', () => {
  expect(playerBoard.receiveAttack([9, 8])).toStrictEqual({
    hit: true,
    shipSunk: false,
  });
  expect(playerBoard.receiveAttack([9, 9])).toStrictEqual({
    hit: true,
    shipSunk: true,
  });
  expect(playerBoard.receiveAttack([9, 7])).toStrictEqual({
    hit: false,
    shipSunk: false,
  });
});

test('Expect emptyBoardSpaces in Board Factory to return true if boardCells are left to play', () => {
  const playerBoard = Board(shipCoordinates);
  expect(playerBoard.emptyBoardSpaces()).toBe(true);
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      playerBoard.receiveAttack([i, j]);
    }
  }
  expect(playerBoard.emptyBoardSpaces()).toBe(false);
});

test('Expect fleetSunk to return true if all ships from one party are sunk', () => {
  const playerBoard = Board(shipCoordinates);
  expect(playerBoard.fleetSunk()).toBe(false);

  const shipNames = Object.keys(shipCoordinates);
  shipNames.map((x) => {
    shipCoordinates[x as keyof ShipCoordinatesInterface].map((y) => {
      playerBoard.receiveAttack([y[0], y[1]]);
    });
  });
  expect(playerBoard.fleetSunk()).toBe(true);
});
