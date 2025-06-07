import { CrashOut } from '../src/components/cards/CrashOut.js';
import Hand from "../src/components/Hand.js";
import { moveCard } from "../src/game/CardManager.js";
import Discard from "../src/components/Discard.js";
import Deck from "../src/components/Deck.js";
import { Player } from "../src/components/Player.js";
import { Powell } from "../src/components/Powell.js";
import { Battle } from "../src/game/Battle.js";
import { battleUI } from './battleUI.js';

window.addEventListener("DOMContentLoaded", init);

function init() {
  initializeGame();
}

export function initializeGame() {
  renderUI('startScreen');
}

export function renderUI(state) {
  if (state == 'startScreen') {
    const body = document.querySelector('body');
    const startButton = document.createElement('button');
    startButton.innerText = 'start battle';
    body.appendChild(startButton);
    startButton.addEventListener('click', () => {
      body.removeChild(startButton);
      renderUI('cutscene');
    });
  }
  else if (state == 'cutscene') {
    const body = document.querySelector('body');
    const cButton1 = document.createElement('button');
    const cButton2 = document.createElement('button');
    cButton1.innerText = 'cutscene1';
    cButton2.innerText = 'cutscene2';

    body.appendChild(cButton1);

    cButton1.addEventListener('click', () => {
      body.removeChild(cButton1);
      body.appendChild(cButton2);
    });
    cButton2.addEventListener('click', () => {
      renderUI('startGame');
      requestAnimationFrame(() => {
        const deck = new Deck([new CrashOut(), new CrashOut(), new CrashOut(), new CrashOut(), new CrashOut(), new CrashOut(), new CrashOut(), new CrashOut()]);
        const player = new Player(100, 3, deck, new Hand(), new Discard());
        const powell = new Powell(player);
        const battle = new Battle(player, powell);
        battle.startBattle();
      })
    });
  }
  else if (state == 'startGame') {
    const body = document.querySelector('body');
    body.innerHTML = battleUI;
    return;
  }
  else if (state == 'winScreen') {
    const body = document.querySelector('body');
    body.innerHTML = 'WOW you won!';
  }
  else if (state == 'goScreen') {
    const body = document.querySelector('body');
    body.innerHTML = 'WOW you lost!';
  }
  return;
}