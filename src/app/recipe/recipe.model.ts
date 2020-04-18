interface RecipeJson {
  name: string;
  ingredients: string[];
  dateAdded: string;
}

export class Recipe {
  constructor(
    public name: string,
    public ingredients = new Array<string>(),
    public dateAdded = new Date()
  ) {}
  static fromJSON(json: RecipeJson): Recipe {
    const rec = new Recipe(
      json.name,
      json.ingredients,
      new Date(json.dateAdded)
    );
    return rec;
  }
}
