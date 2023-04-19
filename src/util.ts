
export const writeToConsoleHistory = (toWrite: string): void => {
    const consoleHistory = document.getElementById("consoleHistory") as HTMLTextAreaElement;
    consoleHistory.value += `${toWrite}\n`;
    if (toWrite.includes("clear")) {
        consoleHistory.value = "";
    }
    // Handle input
}

export const readFromConsoleInput = (): void => {
    const consoleInput = document.getElementById("consoleInput") as HTMLInputElement;
    writeToConsoleHistory(consoleInput.value);
    consoleInput.value = "";
}

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));