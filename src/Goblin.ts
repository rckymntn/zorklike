import { Actor } from "./Actor";
import { Biography, Attributes, Equipment } from "./CharacterSheet";
import { ClassType } from "./Class";
import { RaceType } from "./Race";

export default class Goblin extends Actor {

    constructor(biography?: Biography, attributes?: Attributes, equipment?: Equipment) {
        
        super(
            new Biography("", ClassType.Fighter, RaceType.Goblin), 
            new Attributes(1, 5, 5, 5, 5, 5, 5, 5),
            new Equipment()
        );
    }

}