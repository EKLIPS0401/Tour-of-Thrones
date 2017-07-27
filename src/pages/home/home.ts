import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { CHARACTERS } from "./characters";

//TODO: ask me about my types ?
export class Character {
  id: number;
  name: string;
}

//TODO: ask me about my decorators
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(public navCtrl: NavController) {}

  title = "Tour of Thrones";
  characters = CHARACTERS;

  selectedChar: Character;

  onSelect(char: Character): void {
    this.selectedChar = char;
  }
}
