#!/usr/bin/env node

import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";

import Game from "./game.js";
import { sleep } from "./util.js";

class Main {

    constructor() {
        console.clear();
        this.init();
        this.main();
    }

    init() {

    }

    async title() {
        let title = chalkAnimation.glitch("Zorklike");
        await sleep();
        title.stop();
    }

    async menu() {
        await inquirer.prompt({
            name: "tutorialPrompt",
            type: "list",
            message: "Welcome to Zorklike",
            choices: [
                "Play",
                "Tutorial",
                "Credits",
                "Quit"
            ]
        }).then(async (response) => {
            switch (response.tutorialPrompt) {
                case "Play":
                    await this.play();
                    break;
                case "Tutorial":
                    await this.tutorial();
                    await this.menu();
                    break;
                case "Credits":
                    await this.credits();
                    await this.menu();
                    break;
                case "Quit":
                    await this.quit();
                    break;
            }
        }).catch((error) => {
            console.log(`Error: ${error}`);
        });
    }

    async play() {
        let game = new Game();
    }

    async tutorial() {
        console.log(`
            ${chalk.cyan("How to play")}
        `);
    }

    async credits() {
        console.log(`
            ${chalk.cyan("Credits")}
            
            Developed by rckymntn (https://github.com/rckymntn)

            Created using
                chalk
                chalk-animation
                inquierer
        `);
    }

    async quit(err = 0) {
        console.log(`
            ${chalk.cyan("Thank you for playing!")}
        `);
        process.exit(err);
    }

    async main() {
        await this.title();
        await this.menu();
    }
}

new Main();