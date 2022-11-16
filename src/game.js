import inquirer from "inquirer";

import Player from "./player.js";

export default class Game {

    constructor() {
        let player = new Player();
        console.log("New game");
    }

    init() {
        this.introduction();
    }

    async introduction() {
        await inquirer.prompt({
            name: "introduction",
            type: "input",
            message: "What is your name?"
        }).then(async (response) => {
            console.log(response.introduction);
        });
    }


}