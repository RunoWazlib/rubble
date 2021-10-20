/**
 * A playing card.
 * @class Card
 * @param {object} properties an object containing the properties to use for this card.
 * @property name {string} the card name,
 * @property suit {suit} the card suit,
 * @property value {number} the card's value in the deck,
 * @property faceUp {boolean} whether or not the card is face up.
 */
 class Card {
    name = "";
    suit = ""
    value = 0;
    faceUp = false;

    constructor (suit, value) {
        this.name = "";
        this.suit = suit;
        this.value = value;
        this.faceUp = false;
        
        if (!this.value || typeof this.value !== 'number') {
            throw `Invalid card value requested: ${this.value}`;
        }

        if (this.value === 1) {
            this.name = 'Ace';
            this.canBeStolen = true;
        } else if (this.value === 11) {
            this.name = 'Jack';
        } else if (this.value === 12) {
            this.name = 'Queen';
        } else if (this.value === 13) {
            this.name = 'King';
        } else if (! [2, 3, 4, 5, 6, 7, 8, 9, 10].includes(this.value)) {
            throw `Invalid card value.`;
        } else {
            this.name = String(this.value);
            this.canBeStolen = true;
        }
    }
}

/**
 * Flips a card.
 */
Card.prototype.flip = function () {
    if (this.faceUp) {
        this.faceUp = false;
    } else {
        this.faceUp = true;
    }
}

/**
 * @returns A JSON formatted string representation of a card.
 */
Card.prototype.toString = function () {
    return JSON.stringify(this);
}

export default Card;
