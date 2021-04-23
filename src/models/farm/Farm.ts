import { Animal } from "./animals/Animal";
import { AnimalType } from "./animals/AnimalType";
import { Sheep } from "./animals/Sheep";

export class Farm {
    Animals: Animal[];

    constructor(animals?: Animal[]) {
        this.Animals = animals || [];
    }

    AllSpeak = () => {
        this.Animals.forEach((animal) => {
            animal.Speak()
            if (animal.$type === AnimalType.Sheep) {
                // Here we are casting animal as type Sheep. Only to be done when we know this is the type, otherwise can introduce runtime errors
                (animal as Sheep).MakeWool()
            }
        })
    }
}
