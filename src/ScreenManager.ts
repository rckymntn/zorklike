import Player from "./Player";

export default class ScreenManager {

    readonly consoleHistory = document.getElementById("consoleHistory") as HTMLTextAreaElement;
    readonly consoleInput = document.getElementById("consoleInput") as HTMLInputElement;
    readonly characterSheet = document.getElementById("characterSheet") as HTMLTextAreaElement;

    constructor() {
        this.consoleInput.addEventListener("keypress", (keypress) => {
            if (keypress.key === "Enter") {
                this.readFromConsoleInput();
            }
        });
    }

    public writeToConsoleHistory(toWrite: string): void {
        this.consoleHistory.value += `${toWrite}\n`;
    }

    public clearConsoleHistroy(): void {
        this.consoleHistory.value = "";
    }

    public readFromConsoleInput(): void {
        this.writeToConsoleHistory(this.consoleInput.value);
        this.consoleInput.value = "";
    }

    public updateCharacterSheet(player: Player): void {
        this.characterSheet.value = `${player.biography.name}\n${player.biography.race} ${player.biography.classType}\n\n${player.attributes.toString()}`;
    }
}