import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataCharactersService } from "../../services/data-characters.service";
import { Character } from "../../interfaces/character.interface";

@Component({
  selector: "app-description",
  templateUrl: "./description.component.html",
  styleUrls: ["./description.component.css"],
})
export class DescriptionComponent implements OnInit {
  character: Character = {} as Character;

  constructor(
    private dataCharacters: DataCharactersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getCharacter();
  }

  getCharacter(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.dataCharacters
      .getCharacter(id)
      .subscribe((character) => (this.character = character));
  }
}
