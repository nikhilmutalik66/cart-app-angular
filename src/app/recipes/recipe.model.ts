export class RecipeModel {
  public name : string;
  public discreption : string;
  public imagePath : string;


  constructor(name: string, discreption: string, imagePath: string) {
    this.name = name;
    this.discreption = discreption;
    this.imagePath = imagePath;
  }

}
