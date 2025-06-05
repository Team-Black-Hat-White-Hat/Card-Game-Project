import { Battle } from './game/Battle.js';

// Initialize the game when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const battle = new Battle();
    battle.startBattle();
});
