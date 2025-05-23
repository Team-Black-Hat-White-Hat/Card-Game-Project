import Card from "../componenets/Card";

class EarlySubmission extends Card {
    constructor() {
        super({
        name: "Early Submission",
        type: "buff",
        cost: 0,
        desciption: "You actually turned something in early. Historic moment.",
        effect: "Next trun: gain +1 energy.",
        image: "src/img/EarlySubmission.png",
        });
    }

    /**
   * @param {Object} player - The player receiving the effect.
   */
  play(player) {
    player.applyEffect("Energy Boost", { energyGainNextTurn: 1 });
  }
}

export default EarlySubmission;
