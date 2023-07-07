import './styles/styles.scss';
import './styles/normalize.css';
import {
  // createShip,
  // createGameField,
  createPlayer,
  createBot,
} from './modules/GAME_Module';

import {
  createDOMField,
  createMainPage,
  markShip,
  deMarkShip,
} from './modules/DOM_Module';

createMainPage();

function game() {
  const player = createPlayer();
  const bot = createBot();
  const turnArr = [player, bot];

  createDOMField(player.field);
  createDOMField(bot.field);

  function place(currentPlayer) {
    let placementArr = [[1, 1], [1, 2], [1, 3], [1, 4]];
    let oldArr = [];

    function mark(arr) {
      const selectorArr = arr.map((a) => `_${a.join('-')}`);
      markShip(selectorArr);
    }
    mark(placementArr);

    function deMark(arr) {
      const selectorArr = arr.map((a) => `_${a.join('-')}`);
      deMarkShip(selectorArr);
    }

    function check(arr) {
      const strArr = arr.map((a) => `_${a.join(',')}`);
      return strArr.every((str) => {
        if (
          currentPlayer.field.hash.hasOwnProperty.call(currentPlayer.field.hash, str)
          && currentPlayer.field.hash[str].ship === null
        ) {
          return false;
        }
        return true;
      });
    }

    document.addEventListener('keydown', (event) => {
      const tempArr = [...placementArr]; // Create a temporary array for modified coordinates
    
      switch (event.key) {
        case 'Enter':
          currentPlayer.ships.battleship.position = placementArr;
          currentPlayer.field.placeShip(currentPlayer.ships.battleship);
          break;
    
        case 'ArrowDown':
          deMark(placementArr);
          tempArr.forEach((a) => {
            a[0] += 1;
          });
          if (check(tempArr)) {
            placementArr = tempArr; // Update placementArr only if the new placement is valid
          }
          mark(placementArr);
          break;
    
        case 'ArrowUp':
          deMark(placementArr);
          tempArr.forEach((a) => {
            a[0] -= 1;
          });
          if (check(tempArr)) {
            placementArr = tempArr; // Update placementArr only if the new placement is valid
          }
          mark(placementArr);
          break;
    
        case 'ArrowLeft':
          deMark(placementArr);
          tempArr.forEach((a) => {
            a[1] -= 1;
          });
          if (check(tempArr)) {
            placementArr = tempArr; // Update placementArr only if the new placement is valid
          }
          mark(placementArr);
          break;
    
        case 'ArrowRight':
          deMark(placementArr);
          tempArr.forEach((a) => {
            a[1] += 1;
          });
          if (check(tempArr)) {
            placementArr = tempArr; // Update placementArr only if the new placement is valid
          }
          mark(placementArr);
          break;
    
        default:
          break;
      }
    });
    
  place(turnArr[0]);

  function turn() {
    //
  }
}

game();

const resetBtn = document.querySelector('.replay-btn');
resetBtn.addEventListener('click', () => {
  const content = document.querySelector('#content');
  content.innerHTML = '';
  game();
});
