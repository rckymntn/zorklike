#!/usr/bin/env node 

import chalk from "chalk";
import chalkAnimation, { Animation } from "chalk-animation";
import inquierer from "inquirer";

import { sleep } from "./util.js";

class Main {
    
    constructor() {
        console.clear();
        this.init();
        this.main();
    }

    init() {

    }

    async main() {
        await this.title();
        await this.menu();
    }

    async title() {
        let title: Animation = chalkAnimation.glitch("Zorklike");
        await sleep();
        title.stop();
    }

    async menu() {
        await inquierer.prompt({
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
                    console.log("Play selected");
                    break;
                case "Tutorial":
                    console.log("Tutorial selected");
                    await this.tutorial();
                    await this.menu();
                    break;
                case "Credits":
                    console.log("Credits selected");
                    await this.credits();
                    await this.menu();
                    break;
                case "Quit":
                    console.log("Quit selected");
                    await this.quit();
                    break;
            }
        }).catch((error) => {
            console.log(`Error: ${error}`);
        });
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

}

new Main();