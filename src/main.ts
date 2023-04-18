import Goblin from "./Goblin";
import Player from "./Player";
import { readFromConsoleInput, writeToConsoleHistory } from "./util";

function main(): void {

    const consoleInput = document.getElementById("consoleInput");
    if (consoleInput) {
        consoleInput.addEventListener("keypress", (keypress) => {
            if (keypress.key === "Enter") {
                readFromConsoleInput();
            }
        });
    }

    const consoleHistory = document.getElementById("consoleHistory");
    if (consoleHistory) {
        consoleHistory.scrollTop = consoleHistory.scrollHeight;
    }
    

    let player = new Player();
    let goblin = new Goblin();
    
    player.attack(goblin);
    goblin.attack(player);
    player.talk(goblin);
    goblin.talk(player);
    
    writeToConsoleHistory("Greetings, adventurer!");
    player.updateCharacterSheet();
}

window.onload = main;