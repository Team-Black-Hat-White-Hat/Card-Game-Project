/**
 * @jest-environment jsdom
 */

import EnemyManager from '../src/game/EnemyManager.js';
import { Enemy } from '../src/components/Enemy.js';
import { Player } from '../src/components/Player.js';

describe('EnemyManager', () => {
  let manager;
  let player;
  let container;

  beforeEach(() => {
    document.body.innerHTML = ''; // Clear DOM
    container = document.createElement('div');
    container.id = 'enemy-zone';
    document.body.appendChild(container);

    manager = new EnemyManager(container);

    player = new Player(30, 3); // 30 HP, 3 energy
    document.body.appendChild(player);
  });

  test('spawnEnemy creates and appends an enemy with optional effect', () => {
    
    const enemy = manager.spawnEnemy('Sigmar', 10, { status: 'atk^' });
    
    expect(enemy).toBeInstanceOf(Enemy);
    expect(manager.getEnemies().length).toBe(1);
    expect(container.contains(enemy)).toBe(true);
    expect(enemy.name).toBe('Sigmar');
    expect(enemy.HP).toBe(10);
    expect(enemy.effect).toBe(status[0]);
    
  });

  test('enemyTurn deals 5 damage from each living enemy', () => {
    const enemy1 = manager.spawnEnemy('Alive1', 10);
    const enemy2 = manager.spawnEnemy('Dead1', 0); // shouldn't

    const startHP = player.state.currentHealth;
    manager.enemyTurn(player);
    expect(player.state.currentHealth).toBe(startHP - 5); //will change test to reflect custom dmg
  });

  test('removeDefeatedEnemies removes dead enemies from DOM and list', () => {
    const alive = manager.spawnEnemy('Alex', 15);
    const dead = manager.spawnEnemy('DeadAlex', 0);

    expect(manager.getEnemies().length).toBe(2);
    expect(container.contains(dead)).toBe(true);

    manager.removeDefeatedEnemies();

    expect(manager.getEnemies().length).toBe(1);
    expect(manager.getEnemies()[0]).toBe(alive);
    expect(container.contains(dead)).toBe(false);
  });

  test('isAllEnemiesDefeated returns true when all enemies have HP 0', () => {
    manager.spawnEnemy('Dead1', 0);
    manager.spawnEnemy('Dead2', 0);
    expect(manager.isAllEnemiesDefeated()).toBe(true);
  });

  test('isAllEnemiesDefeated returns false when any enemy is alive', () => {
    manager.spawnEnemy('Alive', 1);
    manager.spawnEnemy('Dead', 0);
    expect(manager.isAllEnemiesDefeated()).toBe(false);
  });

  test('getEnemies returns current enemy list', () => {
    const enemy = manager.spawnEnemy('Slime', 8);
    expect(manager.getEnemies()).toContain(enemy);
  });
});
