import { Actor } from "./Actor";

export default class Room {
    actorList: Actor[];
    connectedRooms = {"north": null, "east": null, "south": null, "west": null};
    description: string;
    
    constructor() {
        this.actorList = [];
        this.connectedRooms = {"north": null, "east": null, "south": null, "west": null};
        this.description = "The starting room."
    }


}