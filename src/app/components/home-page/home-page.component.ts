import { Component, OnInit } from "@angular/core";

import { DataCharactersService } from "src/app/services/data-characters.service";
import { Character } from "src/app/interfaces/character.interface";

import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"],
  animations: [
    trigger("fadeInOut", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("1s", style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class HomePageComponent implements OnInit {
  characters: Character[] = [];

  constructor(private dataCharacters: DataCharactersService) {}

  ngOnInit(): void {
    this.characters = this.dataCharacters.getCharacters();
  }
}
