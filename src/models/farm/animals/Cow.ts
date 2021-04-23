import { Animal } from "./Animal";
import { AnimalType } from "./AnimalType";


export class Cow extends Animal {

    constructor(name: string) {
        super();

        this.$type = AnimalType.Cow;
        this.Name = name;
    }

    Speak = () => "Mooooooooooooo!"
}
