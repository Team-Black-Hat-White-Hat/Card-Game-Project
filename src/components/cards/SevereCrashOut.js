import Card from "../components/Card";
class SevereCrashOut extends Card {
    constructor() {
        super({
            name: "Severe Crash Out",
            type: "attack",
            cost: 1,
            description: "You spent 6 hours trying to automate something which would have taken 6 minutes to do by hand and now you’re genuinely considering switching your major.",
            image: "src/img/SevereCrashOut.png",
        });
    }
    /**
    * @param {Object} enemy - The target enemy.
     */
    play(enemy) {
        enemy.takeDamage(5);
    }
}
export default SevereCrashOut;