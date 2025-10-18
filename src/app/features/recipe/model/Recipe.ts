export class Recipe {

  ingredient: Ingredient[] = []
  instructions: Instruction[] = []
  preparationTime: number = 0
  cookingTime: number = 0
  servings: number = 0
  tip: string = ''

  constructor(
    ingredient: Ingredient[], instructions: Instruction[],
    preparationTime: number, cookingTime: number, servings: number,
    tip: string = ''
  ) {
    this.ingredient = ingredient
    this.instructions = instructions
    this.preparationTime = preparationTime
    this.cookingTime = cookingTime
    this.servings = servings
    this.tip = tip
  }
}

export class Ingredient {
  name: string = ''
  quantity: string = ''

  constructor(name: string, quantity: string) {
    this.name = name
    this.quantity = quantity
  }
}

export class Instruction {
  stepNumber: number = 0
  description: string = ''

  constructor(stepNumber: number, description: string) {
    this.stepNumber = stepNumber
    this.description = description
  }
}
