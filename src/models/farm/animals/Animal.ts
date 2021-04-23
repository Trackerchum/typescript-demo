import { AnimalType } from "./AnimalType";

export abstract class Animal {
    $type: AnimalType
    Name: string;
    Voice: string;


    Speak: () => string = () => this.Voice
}
