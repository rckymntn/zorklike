import inquirer from "inquirer";

import Player from "./player.js";

export default class Game {

    constructor() {
        this.player = new Player();
        console.log("New game");
        this.init();
    }

    init() {
        this.introduction();
    }

    async introduction() {
        await this.whatIsYourName();
        await this.whatIsYourQuest();
    }

    async whatIsYourName() {
        await inquirer.prompt({
            name: "whatIsYourName",
            type: "input",
            message: "What is your name?"
        }).then(async (response) => {
            console.log(response.whatIsYourName);
            this.player.name = response.whatIsYourName;
        }).catch((error) => {
            console.log(`Error: ${error}`);
        });
    }

    async whatIsYourQuest() {
        await inquirer.prompt({
            name: "whatIsYourQuest",
            type: "input",
            message: "What is your quest?"
        }).then(async (response) => {
            console.log(response.whatIsYourQuest);
        }).catch((error) => {
            console.log(`Error: ${error}`);
        });
    }


}