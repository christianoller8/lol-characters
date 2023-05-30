export interface Character {
  [key: number]: any;
  id: number;
  name: string;
  image1: string;
  alias: string;
  rol: string;
  description: string;
  image2: string;
  skills: {
    pasive: string;
    imagePasive: string;
    descriptionPasive: string;
    skill1: string;
    imageSkill1: string;
    descriptionSkill1: string;
    skill2: string;
    imageSkill2: string;
    descriptionSkill2: string;
    skill3: string;
    imageSkill3: string;
    descriptionSkill3: string;
    ultimate: string;
    imageUltimate: string;
    descriptionUltimate: string;
  };
  video: string;
  skins: {
    skin1: string;
    imageSkin1: string;
    skin2: string;
    imageSkin2: string;
    skin3: string;
    imageSkin3: string;
    skin4: string;
    imageSkin4: string;
  };
}
