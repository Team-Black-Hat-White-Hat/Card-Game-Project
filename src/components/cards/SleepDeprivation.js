import Card from "../Card.js";

class SleepDeprivation extends Card {
    constructor() {
        super({
            name: "Sleep Deprivation",
            type: "status",
            cost: 0,
            description: "You haven’t slept since Wednesday. Gain status effect Sleep Deprived for 3 turns: Take +1 extra damage from all sources. Some cards become stronger.",
            effect: "Gain Sleep Deprived status for 3 turns. Take +1 extra damage from all sources. Some cards become stronger.",
            image: "src/img/SleepDeprivation.png",
        });
    }

    /**
    * @param {target} player - Target of ability
    */
    play(target) {
        target.addStatus("Sleep Deprived", 3);
    }
}

customElements.define("sleep-deprivation", SleepDeprivation);

export { SleepDeprivation };
