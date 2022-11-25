import SaveData from "./savedata/savedata.json" assert {type: JSON};
import { saveSlot } from "./const";

export default class SaveManager {
    
    saveDataOne = SaveData.SaveDataOne;
    saveDataTwo = SaveData.SaveDataTwo;
    saveDataThree = SaveData.SaveDataThree;

    constructor() {

    }

    loadData(slot) {
        try {
            switch (slot) {
                case saveSlot.ONE:
                    break;
                case saveSlot.TWO:
                    break;
                case saveSlot.THREE:
                    break;
            }
        } catch {
            
        }
    }

    saveData(slot) {
        try {
            switch (slot) {
                case saveSlot.ONE:
                    break;
                case saveSlot.TWO:
                    break;
                case saveSlot.THREE:
                    break;
            }
        } catch {

        }
    }

    clearData(slot) {
        try {
            switch (slot) {
                case saveSlot.ONE:
                    break;
                case saveSlot.TWO:
                    break;
                case saveSlot.THREE:
                    break;
            }
        } catch {
            
        }
    }
}