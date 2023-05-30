import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { DataCharactersService } from "../../services/data-characters.service";
import { Character } from "../../interfaces/character.interface";

import {
  AfterViewInit,
  ChangeDetectorRef,
  ElementRef,
  OnDestroy,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "app-description",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.css"],
})
export class SkillsComponent implements OnInit, AfterViewInit, OnDestroy {
  character: Character = {} as Character;

  @ViewChild("demoYouTubePlayer")
  demoYouTubePlayer!: ElementRef<HTMLDivElement>;
  videoWidth: number | undefined;
  videoHeight: number | undefined;

  constructor(
    private dataCharacters: DataCharactersService,

    private route: ActivatedRoute,
    private _changeDetectorRef: ChangeDetectorRef
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

  ngAfterViewInit(): void {
    this.onResize();
    window.addEventListener("resize", this.onResize);
  }

  onResize = (): void => {
    // Automatically expand the video to fit the page up to 1200px x 720px
    this.videoWidth = Math.min(
      this.demoYouTubePlayer.nativeElement.clientWidth,
      1200
    );
    this.videoHeight = this.videoWidth * 0.6;
    this._changeDetectorRef.detectChanges();
  };

  ngOnDestroy(): void {
    window.removeEventListener("resize", this.onResize);
  }
}
