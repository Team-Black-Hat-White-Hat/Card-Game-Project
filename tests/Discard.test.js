/**
 * @jest-environment jsdom
 */

import Discard from '../src/components/Discard.js';
import Card from '../src/components/Card.js';
import * as CardManager from '../src/components/CardManager.js';

jest.spyOn(CardManager, 'shuffle').mockImplementation(arr => arr); // no-op shuffle

// ✅ Mock Deck class
class MockDeck extends HTMLElement {
  #cards = [];
  addCard(card) {
    this.#cards.push(card);
  }
  deckSize() {
    return this.#cards.length;
  }
}
customElements.define('player-deck', MockDeck);

describe('Discard tests with Card and mocked Deck', () => {
  let discard, card1, card2;

  beforeEach(() => {
    document.body.innerHTML = '<discard-pile></discard-pile>';
    discard = document.querySelector('discard-pile');

    card1 = new Card({
      name: 'Free Boba',
      type: 'special',
      cost: 1,
      description: 'A free drink!',
      effect: 'Refresh',
      image: 'boba.png'
    });

    card2 = new Card({
      name: 'Early Submission',
      type: 'special',
      cost: 0,
      description: 'Extra points!',
      effect: 'Win',
      image: 'early.png'
    });
  });

  test('addCard adds a valid card and returns 0', () => {
    expect(discard.addCard(card1)).toBe(0);
    expect(discard.discard).toContain(card1);
  });

  test('addCard returns -1 for invalid input', () => {
    expect(discard.addCard("fake")).toBe(-1);
    expect(discard.discard.length).toBe(0);
  });

  test('removeCard removes a card and returns index', () => {
    discard.addCard(card1);
    discard.addCard(card2);
    const index = discard.removeCard(card1);
    expect(index).toBe(0);
    expect(discard.discard).not.toContain(card1);
  });

  test('removeCard returns -1 for missing or invalid card', () => {
    expect(discard.removeCard(card1)).toBe(-1);
  });

  test('clear() empties the discard pile', () => {
    discard.addCard(card1);
    discard.clear();
    expect(discard.discard.length).toBe(0);
  });

  test('shuffleDiscardIntoDeck moves cards and clears discard', () => {
    const deck = new MockDeck();
    discard.addCard(card1);
    discard.addCard(card2);

    expect(deck.deckSize()).toBe(0);

    const result = discard.shuffleDiscardIntoDeck(deck);
    expect(result).toBe(0);
    expect(deck.deckSize()).toBe(2);
    expect(discard.discard.length).toBe(0);
  });

  test('shuffleDiscardIntoDeck returns -1 for invalid deck', () => {
    discard.addCard(card1);
    const result = discard.shuffleDiscardIntoDeck({});
    expect(result).toBe(-1);
    expect(discard.discard.length).toBe(1);
  });
});
