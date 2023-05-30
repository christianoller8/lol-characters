import { Injectable } from "@angular/core";
import { Character } from "../interfaces/character.interface";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DataCharactersService {
  private characters: Character[] = [
    {
      id: 1,
      name: "Diana",
      image1: "./../../assets/diana/home-diana.jpeg",
      alias: "El desdén de la luna",
      rol: "Luchador",
      description:
        "Portadora de una espada en forma de media luna, Diana es una guerrera de los Lunari, una fe rechazada en casi todas las tierras a los pies del Monte Targon.",
      image2: "./../../assets/diana/description-diana.jpg",
      skills: {
        pasive: "Hoja luna de plata",
        imagePasive: "./../../assets/diana/pasive-diana.png",
        descriptionPasive:
          "Cada tres golpes, inflige daño mágico adicional a los enemigos cercanos. Después de lanzar un hechizo, Diana obtiene velocidad de ataque en los siguientes tres ataques.",
        skill1: "Impacto creciente",
        imageSkill1: "./../../assets/diana/skill1-diana.png",
        descriptionSkill1:
          "Libera un rayo de energía lunar en un arco que inflige daño mágico. Los enemigos golpeados se verán afectados por Luz lunar, que revela durante 3 s a los objetivos que no estén en sigilo.",
        skill2: "Cascada pálida",
        imageSkill2: "./../../assets/diana/skill2-diana.png",
        descriptionSkill2:
          "Diana crea tres esferas que orbitan a su alrededor y explotan al entrar en contacto con enemigos, lo que inflige daño en una zona. También obtiene un escudo temporal que absorbe daño. Si la tercera esfera explota, el escudo absorbe más daño.",
        skill3: "Torrente lunar",
        imageSkill3: "./../../assets/diana/skill3-diana.png",
        descriptionSkill3:
          "Diana se transforma en la encarnación de la luna más vengativa, se desliza hacia un enemigo y le inflige daño mágico.",
        ultimate: "Lluvia de luna",
        imageUltimate: "./../../assets/diana/ultimate-diana.png",
        descriptionUltimate:
          "Diana revela y atrae a todos los enemigos cercanos, y los ralentiza.",
      },
      video: "ZwsfmkWpkjQ",
      skins: {
        skin1: "Diana Valquiria Oscura",
        imageSkin1: "",
        skin2: "Diana Diosa Lunar",
        imageSkin2: "",
        skin3: "Diana Infernal",
        imageSkin3: "",
        skin4: "Diana Matadragones",
        imageSkin4: "",
      },
    },
    {
      id: 2,
      name: "Gangplank",
      image1: "./../../assets/gangplank/home-gangplank.jpeg",
      alias: "El azote de los mares",
      rol: "Luchador",
      description:
        "Tan impredecible como brutal, el destronado rey de los piratas conocido como Gangplank es temido a lo largo y ancho del mundo.",
      image2: "./../../assets/gangplank/description-gangplank.jpg",
      skills: {
        pasive: "Prueba de fuego",
        imagePasive: "",
        descriptionPasive:
          "Cada pocos segundos, los ataques cuerpo a cuerpo de Gangplank hacen arder a sus víctimas",
        skill1: "Parrrlamento",
        imageSkill1: "",
        descriptionSkill1:
          "Dispara a un objetivo y recibe oro por cada unidad enemiga asesinada.",
        skill2: "Eliminar escorbuto",
        imageSkill2: "",
        descriptionSkill2:
          "Los efectos curativos de los cítricos eliminan los efectos de control de adversario y restauran vida.",
        skill3: "Barril de pólvora",
        imageSkill3: "",
        descriptionSkill3:
          "Gangplank destapa un barril explosivo en una ubicación objetivo. Si lo rompe, el barril explota y, además de extender el daño del ataque a los enemigos de la zona, los ralentiza.",
        ultimate: "Andanada de cañón",
        imageUltimate: "",
        descriptionUltimate:
          "Gangplank ordena a su barco que dispare sobre un área. Los enemigos situados en ella quedan ralentizados y sufren daño.",
      },
      video: "ByfQAD5zrtA",
      skins: {
        skin1: "Gangplank Tremebundo",
        imageSkin1: "",
        skin2: "Gangplank Miliciano",
        imageSkin2: "",
        skin3: "Gangplank Marinero",
        imageSkin3: "",
        skin4: "Gangplank Soldado de Juguete",
        imageSkin4: "",
      },
    },
    {
      id: 3,
      name: "Jhin",
      image1: "./../../assets/jhin/home-jhin.jpeg",
      alias: "El azote de los mares",
      rol: "Luchador",
      description:
        "Tan impredecible como brutal, el destronado rey de los piratas conocido como Gangplank es temido a lo largo y ancho del mundo.",
      image2: "./../../assets/jhin/description-jhin.jpg",
      skills: {
        pasive: "Prueba de fuego",
        imagePasive: "",
        descriptionPasive:
          "Cada pocos segundos, los ataques cuerpo a cuerpo de Gangplank hacen arder a sus víctimas",
        skill1: "Parrrlamento",
        imageSkill1: "",
        descriptionSkill1:
          "Dispara a un objetivo y recibe oro por cada unidad enemiga asesinada.",
        skill2: "Eliminar escorbuto",
        imageSkill2: "",
        descriptionSkill2:
          "Los efectos curativos de los cítricos eliminan los efectos de control de adversario y restauran vida.",
        skill3: "Barril de pólvora",
        imageSkill3: "",
        descriptionSkill3:
          "Gangplank destapa un barril explosivo en una ubicación objetivo. Si lo rompe, el barril explota y, además de extender el daño del ataque a los enemigos de la zona, los ralentiza.",
        ultimate: "Andanada de cañón",
        imageUltimate: "",
        descriptionUltimate:
          "Gangplank ordena a su barco que dispare sobre un área. Los enemigos situados en ella quedan ralentizados y sufren daño.",
      },
      video: "-d8C3-Sl-6I",
      skins: {
        skin1: "Gangplank Tremebundo",
        imageSkin1: "",
        skin2: "Gangplank Miliciano",
        imageSkin2: "",
        skin3: "Gangplank Marinero",
        imageSkin3: "",
        skin4: "Gangplank Soldado de Juguete",
        imageSkin4: "",
      },
    },
    {
      id: 4,
      name: "Senna",
      image1: "./../../assets/senna/home-senna.jpeg",
      alias: "El azote de los mares",
      rol: "Luchador",
      description:
        "Tan impredecible como brutal, el destronado rey de los piratas conocido como Gangplank es temido a lo largo y ancho del mundo.",
      image2: "./../../assets/senna/description-senna.jpg",
      skills: {
        pasive: "Prueba de fuego",
        imagePasive: "",
        descriptionPasive:
          "Cada pocos segundos, los ataques cuerpo a cuerpo de Gangplank hacen arder a sus víctimas",
        skill1: "Parrrlamento",
        imageSkill1: "",
        descriptionSkill1:
          "Dispara a un objetivo y recibe oro por cada unidad enemiga asesinada.",
        skill2: "Eliminar escorbuto",
        imageSkill2: "",
        descriptionSkill2:
          "Los efectos curativos de los cítricos eliminan los efectos de control de adversario y restauran vida.",
        skill3: "Barril de pólvora",
        imageSkill3: "",
        descriptionSkill3:
          "Gangplank destapa un barril explosivo en una ubicación objetivo. Si lo rompe, el barril explota y, además de extender el daño del ataque a los enemigos de la zona, los ralentiza.",
        ultimate: "Andanada de cañón",
        imageUltimate: "",
        descriptionUltimate:
          "Gangplank ordena a su barco que dispare sobre un área. Los enemigos situados en ella quedan ralentizados y sufren daño.",
      },
      video: "FAmdeTjA4i0",
      skins: {
        skin1: "Gangplank Tremebundo",
        imageSkin1: "",
        skin2: "Gangplank Miliciano",
        imageSkin2: "",
        skin3: "Gangplank Marinero",
        imageSkin3: "",
        skin4: "Gangplank Soldado de Juguete",
        imageSkin4: "",
      },
    },
  ];
  constructor() {}

  getCharacters(): Character[] {
    return this.characters;
  }

  getCharacter(id: number): Observable<Character> {
    const character = this.characters.find((h) => h.id === id)!;
    return of(character);
  }
}
