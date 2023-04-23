import Player from "./Player";

export const writeToConsoleHistory = (toWrite: string): void => {
    const consoleHistory = document.getElementById("consoleHistory") as HTMLTextAreaElement;
    consoleHistory.value += `${toWrite}\n`;
    // Handle input
}

export const readFromConsoleInput = (): void => {
    const consoleInput = document.getElementById("consoleInput") as HTMLInputElement;
    writeToConsoleHistory(consoleInput.value);
    consoleInput.value = "";
}

export const updateCharacterSheet = (player: Player): void => {
    const characterSheet = document.getElementById("characterSheet") as HTMLTextAreaElement;
    characterSheet.value = `${player.biography.name}\n${player.biography.race} ${player.biography.classType}\n\n${player.attributes.toString()}`
}

export const clearConsoleHistory = (): void => {
    const consoleHistory = document.getElementById("consoleHistory") as HTMLTextAreaElement;
    consoleHistory.value = "";
}

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));