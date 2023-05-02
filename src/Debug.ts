export default class Debug {
    debugMode: boolean;

    constructor(debugMode?: boolean) {
        this.debugMode = debugMode || false;
    }

    debugLog(toLog: string) {
        if (this.debugMode) {
            console.log(toLog);
        }
    }

    applyRandomBorder() {
        

    }

    private getRandomHexColor(): string {
        let chars: string = "01234567890ABCDEF";
        let randomColor: string = "";
        for (let i = 0; i < 6; i++) {
            randomColor += chars[Math.floor(Math.random() * chars.length)];
        }
        return randomColor;
    }
}