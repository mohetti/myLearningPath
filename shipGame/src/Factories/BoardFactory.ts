import { Ship } from './ShipFactory';

export interface ShipCoordinatesInterface {
  bigShip_1: number[][];
  bigShip_2: number[][];
  mediumShip_1: number[][];
  mediumShip_2: number[][];
  smallShip_1: number[][];
  smallShip_2: number[][];
  smallShip_3: number[][];
}
type BoardTypeSecondLayer = {
  [key: number]: Function;
};
type BoardTypeFirstLayer = {
  [key: number]: BoardTypeSecondLayer;
};

export const Board = (ShipCoordinates: ShipCoordinatesInterface) => {
  let shipCounter = 9;
  let boardCounter = 100;
  const board: BoardTypeFirstLayer = {};
  const shipCoordinates: ShipCoordinatesInterface = ShipCoordinates;
  const ships = {
    bigShip_1: Ship(4),
    bigShip_2: Ship(4),
    mediumShip_1: Ship(3),
    mediumShip_2: Ship(3),
    mediumShip_3: Ship(3),
    smallShip_1: Ship(2),
    smallShip_2: Ship(2),
    smallShip_3: Ship(2),
    smallShip_4: Ship(2),
  };

  const shipKeys = Object.keys(ships);
  shipKeys.forEach((key) => {
    shipCoordinates[key as keyof ShipCoordinatesInterface].map((x) => {
      const shipHitFnReference = {
        [x[1]]: ships[key as keyof ShipCoordinatesInterface].hit,
      };
      return (board[x[0]] = { ...board[x[0]], ...shipHitFnReference });
    });
  });

  const receiveAttack = (coord: [number, number]) => {
    const [xCoord, yCoord] = coord;
    boardCounter--;

    if (!board[xCoord] || !board[xCoord][yCoord]) {
      return { hit: false, shipSunk: false };
    }

    const shipIntact = board[xCoord][yCoord]();
    if (shipIntact) return { hit: true, shipSunk: false };

    shipCounter--;
    return { hit: true, shipSunk: true };
  };

  const emptyBoardSpaces = () => {
    return !!boardCounter;
  };

  const fleetSunk = () => {
    return !shipCounter;
  };

  return { receiveAttack, emptyBoardSpaces, fleetSunk };
};
// basically check whether hit or not in controller and
// based on outcome of isHit = receiveAttack() =>
// mark spot with CSS
// check shipCounter (define getter for it)

// if playerBoard.receiveAttack(coord) is true
// => check shipCounter
// => handle UI stuff
// => if shipCounter is 0 => end game
// => if shipCounter is not 0 =>
// check if shipCounter changed
// if shipCounter didnt change return
// if shipCounter did change =>
// find ship with coordinates to show it on screen
// function getShipCoordinates that returns all coords for specific ship. These then can be handled
// on the UI side
// if playerBoard.receiveAttack(coord) is false
// => handle UI stuff
// proceed
