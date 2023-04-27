import Goblin from "./Goblin";
import Player from "./Player";
import Room from "./Room";
import ScreenManager from "./ScreenManager";

function main(): void {
    const screenManager = new ScreenManager();

    let startingRoom = new Room();
    screenManager.writeToConsoleHistory(startingRoom.description);
    let player = new Player();
    let goblin = new Goblin();
    startingRoom.actorList.push(player, goblin);
    
    player.attack(goblin);
    goblin.attack(player);
    player.talk(goblin);
    goblin.talk(player);
    
    screenManager.writeToConsoleHistory("Greetings, adventurer!");
    player.updateCharacterSheet();

}

window.onload = main;