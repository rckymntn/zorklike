import { ClassType } from "./Class";
import Item from "./Item";
import { RaceType } from "./Race";

export class Attributes {

    level: number;
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
    maxHitPoints: number;
    curHitPoints: number;

    constructor(level: number, strength: number, dexterity: number, constitution: number, intelligence: number, wisdom: number, charisma: number, maxHitPoints: number, curHitPoints?: number) {
        this.level = level;
        this.strength = strength;
        this.dexterity = dexterity;
        this.constitution = constitution;
        this.intelligence = intelligence;
        this.wisdom = wisdom;
        this.charisma = charisma;
        this.maxHitPoints = maxHitPoints;
        this.curHitPoints = curHitPoints ? curHitPoints : maxHitPoints;
    }

    public toString(): string {
        return `HP:\t\t${this.curHitPoints}/${this.maxHitPoints}\n\nLevel:\t\t${this.level}\nStrength:\t${this.strength}\nDexterity:\t${this.dexterity}\nConstitution:\t${this.constitution}\nIntelligence:\t${this.intelligence}\nWisdom:\t\t${this.wisdom}\nCharisma:\t${this.charisma}\n`
    }
}

export class Biography {
    name: string;
    classType: ClassType;
    race: RaceType;

    constructor(name: string = "", classType: ClassType = ClassType.Unknown, race: RaceType = RaceType.Unknown) {
        this.name = !name || name === "" ? `${race} ${classType}` : name;
        this.classType = classType;
        this.race = race;
    }
}

export class Equipment {
    //head: Item;
    //neck: Item;
    //chest: Item;
    //hands: Item;
    //legs: Item;
    //feet: Item;
    //leftRing: Item;
    //rightRing: Item;

}

export default class CharacterSheet {
    
    biography: Biography;
    attributes: Attributes;
    equipment: Equipment;
    
    constructor(biography: Biography, attributes: Attributes, equipment: Equipment) {
        this.biography = biography;
        this.attributes = attributes;
        this.equipment = equipment;
    } 
}