import CharacterSheet, { Attributes, Biography, Equipment } from "./CharacterSheet";
import { ClassType } from "./Class";
import { RaceType } from "./Race";
import { writeToConsoleHistory } from "./util";

export abstract class Actor extends CharacterSheet {

    constructor(biography: Biography, attributes: Attributes, equipment: Equipment) {
        super(biography, attributes, equipment);
    }

    public attack(target: Actor): void {
        writeToConsoleHistory(`${this.biography.name} attempted to attack to ${target.biography.name}!`)
    }

    public talk(target: Actor): void {
        writeToConsoleHistory(`${this.biography.name} attempted to talk to ${target.biography.name}!`);
    }

}
