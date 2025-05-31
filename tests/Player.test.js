import {Player} from '../src/components/Player.js';
import {CrashOut} from "../src/components/cards/CrashOut.js";
import {EarlySubmission} from "../src/components/cards/EarlySubmission.js";
import Hand from "../src/components/Hand.js";
import Discard from "../src/components/Discard.js";
import Deck from "../src/components/Deck.js";

describe('Player class', () => {
    let player;
    let dummyCard;

    beforeEach(() => {
        dummyCard = new CrashOut();
        player = new Player(
          100,   // maxHealth
          3,     // maxEnergy
          new Deck(), // deck
          new Hand(),    // hand
          new Discard(),    // discard
        );
        player.deck.addCard(dummyCard)
    });

    test('initialization sets correct values', () => {
        expect(player.state.maxHealth).toBe(100);
        expect(player.state.currentHealth).toBe(100);
        expect(player.state.maxEnergy).toBe(3);
        expect(player.state.currentEnergy).toBe(3);
        expect(player.state.block).toBe(0);
        expect(player.isDead).toBe(false);
        expect(player.deck.deckSize()).toBe(1);
        expect(player.hand.hand.length).toBe(0);
        expect(player.discard.discard.length).toBe(0);
        expect(player.state.effect.length).toBe(0);
    });

    test('takeDamage reduces health correctly without block', () => {
        player.takeDamage(30);
        expect(player.state.currentHealth).toBe(70);
    });

    test('takeDamage is reduced by block', () => {
        player.gainBlock(20);
        player.takeDamage(15);
        expect(player.state.block).toBe(5);
        expect(player.state.currentHealth).toBe(100);
    });

    test('takeDamage with block overflow deals correct damage', () => {
        player.gainBlock(10);
        player.takeDamage(15);
        expect(player.state.block).toBe(0);
        expect(player.state.currentHealth).toBe(95);
    });

    test('heal should not exceed maxHealth', () => {
        player.takeDamage(50);
        player.heal(100);
        expect(player.state.currentHealth).toBe(100);
    });

    test('spendEnergy returns true and decreases energy if enough', () => {
        const result = player.spendEnergy(2);
        expect(result).toBe(true);
        expect(player.state.currentEnergy).toBe(1);
    });

    test('spendEnergy returns false if not enough energy', () => {
        const result = player.spendEnergy(5);
        expect(result).toBe(false);
        expect(player.state.currentEnergy).toBe(3);
    });

    test('resetEnergy resets energy to maxEnergy', () => {
        player.spendEnergy(2);
        player.resetEnergy();
        expect(player.state.currentEnergy).toBe(player.state.maxEnergy);
    });

    test('moveTempDiscardToDiscard moves cards to discard', () => {
        const card = new EarlySubmission();
        player.tempDiscard.push(card);
        player.moveTempDiscardToDiscard();
        expect(player.discard.getCard).toContain(card);
        expect(player.tempDiscard.length).toBe(0);
    });

    test('Move discard to deck',()=>{
        const card = new EarlySubmission();
        player.discard.addCard(card);
        const tempDiscard = [...player.discard.discard];
        tempDiscard.push(dummyCard);
        player.shuffleDiscardIntoDeck();
        expect(player.deck.getCard).toEqual(expect.arrayContaining(tempDiscard));

    })
});
