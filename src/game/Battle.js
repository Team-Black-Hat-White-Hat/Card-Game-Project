import { Player } from '../components/Player.js';
import { Enemy } from '../components/Enemy.js';
import { Hand } from '../components/Hand.js';
import { Deck } from '../components/Deck.js';
import { Discard } from '../components/Discard.js';

export class Battle {
    constructor() {
        this.player = new Player(80, 3); // 80 health, 3 energy
        this.enemy = new Enemy(100); // 100 health
        this.hand = new Hand();
        this.deck = new Deck();
        this.discard = new Discard();
        
        this.initializeBattle();
    }

    initializeBattle() {
        // Create battle scene container
        const battleScene = document.createElement('div');
        battleScene.className = 'combat-scene';
        
        // Add background elements
        const background = document.createElement('div');
        background.className = 'background-elements';
        background.innerHTML = `
            <div class="sunset"></div>
            <div class="sand"></div>
            <div class="sun"></div>
        `;
        battleScene.appendChild(background);

        // Create battle area
        const battleArea = document.createElement('div');
        battleArea.className = 'battle-area';

        // Add player section
        const playerSection = document.createElement('div');
        playerSection.className = 'player';
        playerSection.appendChild(this.player);
        battleArea.appendChild(playerSection);

        // Add enemies section
        const enemiesSection = document.createElement('div');
        enemiesSection.className = 'enemies';
        enemiesSection.appendChild(this.enemy);
        battleArea.appendChild(enemiesSection);

        battleScene.appendChild(battleArea);

        // Add hand area
        const handArea = document.createElement('div');
        handArea.className = 'hand-area';
        handArea.appendChild(this.hand);
        battleScene.appendChild(handArea);

        // Add control buttons
        const controls = document.createElement('div');
        controls.className = 'battle-controls';
        controls.innerHTML = `
            <button class="draw-button">Draw</button>
            <button class="end-turn-button">End Turn</button>
            <button class="discard-button">Discard</button>
        `;
        battleScene.appendChild(controls);

        // Add to document
        document.body.appendChild(battleScene);
    }

    startBattle() {
        // Initialize player's deck and draw starting hand
        this.player.deck = this.deck;
        this.player.hand = this.hand;
        this.player.discard = this.discard;
        
        // Draw initial hand
        this.player.drawCards(5);
    }
}
