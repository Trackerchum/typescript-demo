import { Animal } from "./Animal";
import { AnimalType } from "./AnimalType";


export class Sheep extends Animal {

    constructor(name: string) {
        super();

        this.$type = AnimalType.Sheep;
        this.Name = name;
        this.Voice = "Baaaaaaaaaaaaaa"
    }

    MakeWool = () => {

    }
}
