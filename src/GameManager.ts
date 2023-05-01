import Goblin from "./Goblin";
import Player from "./Player";
import Room from "./Room";
import ScreenManager from "./ScreenManager";

export default class GameManager {
    screenManager: ScreenManager = new ScreenManager();
    lastInput: string = "";

    constructor() {
        this.screenManager.consoleInput.addEventListener("keypress", (keypress) => {
            if (keypress.key === "Enter") {
                this.lastInput = this.screenManager.readFromConsoleInput();
                this.tick();
            }
        });

        this.demo();
    }

    tick() {

    }

    demo() {
        let startingRoom = new Room();
        this.screenManager.writeToConsoleHistory(startingRoom.description);
        let player = new Player();
        let goblin = new Goblin();
        startingRoom.actorList.push(player, goblin);
        
        player.attack(goblin);
        goblin.attack(player);
        player.talk(goblin);
        goblin.talk(player);
        
        this.screenManager.writeToConsoleHistory("Greetings, adventurer!");
        player.updateCharacterSheet();
    }
}