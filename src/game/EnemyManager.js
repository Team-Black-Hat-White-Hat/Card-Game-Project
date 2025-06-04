import {Enemy} from '../components/Enemy.js';
/**
 * Enemy manager for the game
 * Manages spawning, removing etc. enemies. Delegates behavior of
 * a specific enemy instance to enemy.js
 */

/**
 * Creates an enemy container for management of enemies
 */
export class EnemyManager {
  constructor(container = document.body) {
    /** @type {Enemy[]} */
    this.enemies = [];

    /** @type {HTMLElement} */
    this.container = container;
  }

  /**
   * Spawns an enemy and adds to the manager.
   * @param {string} name -name of enemy    
   * @param {number} maxHealth -max health of enemy
   * @param {object} effect - placeholder for now unitl hardcoded effects are in place
   * @returns {Enemy}
   */
  spawnEnemy(name, maxHealth, effect = {}) {
    const newEnemy = new Enemy({ name, HP: maxHealth, Img: './assets/enemy.png' });
    newEnemy.applyEffect(effect);
    this.container.appendChild(newEnemy); // 
    this.enemies.push(newEnemy);
    return newEnemy;
  }

  /**
   * Executes a turn for each alive enemy.
   * Each enemy attacks a player (to be passed in later logic).
   * This is a placeholder for now until we have specific attack stats for specific enemies
   */
  enemyTurn(player) {
    this.enemies.forEach(enemy => {
      if (enemy.HP > 0) {
        enemy.attack(player, 5); // a random amt of dmg for now
      }
    });
  }

  /**
   * Removes the defeated enemies from memory and dom
   */
  removeDefeatedEnemies() {
    this.enemies = this.enemies.filter(enemy => {
      if (enemy.HP <= 0) {
        enemy.remove(); // remove from DOM
        return false;   // filter them out from array
      }
      return true;
    });
  }

  /**
   * Checks if all enemies are defeated.
   * @returns {boolean}
   */
  isAllEnemiesDefeated() {
    return this.enemies.every(enemy => enemy.HP <= 0);
  }

  /**
   * For unit tests or debugging
   * @returns {Enemy[]}
   */
  getEnemies() {
    return this.enemies;
  }
}

export default EnemyManager;
