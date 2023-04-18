import { Actor } from "./Actor";
import { Attributes, Biography, Equipment } from "./CharacterSheet";
import { ClassType } from "./Class";
import { RaceType } from "./Race";

export default class Player extends Actor {
    
    constructor(biography?: Biography, attributes?: Attributes, equipment?: Equipment) {
        
        super(
            new Biography("Player", ClassType.Fighter, RaceType.Human), 
            new Attributes(1, 10, 10, 10, 10, 10, 10, 10),
            new Equipment()
        );
    }

    public updateCharacterSheet(): void {
        const characterSheet = document.getElementById("characterSheet") as HTMLTextAreaElement;
        characterSheet.value = `${this.biography.name}\n${this.biography.race} ${this.biography.classType}\n\n${this.attributes.toString()}`
    }

}