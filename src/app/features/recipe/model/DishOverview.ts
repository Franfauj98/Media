import {ChipsContent} from "../../../shared/model/chips/ChipsContent"
import {Recipe} from "./Recipe";

export class DishOverview {
  headerIcon: string = ''
  headerTitle: string = ''
  headerSubtitle: string = ''
  photo: string = ''
  photoDescription: string = ''
  chips: ChipsContent[] = []
  description: string = ''
  buttonLabel: string = ''
  recipe: Recipe = new Recipe([], [], 0, 0, 0)

  constructor(
    headerIcon: string, headerTitle: string, headerSubtitle: string, photo: string, photoDescription: string,
    chips: ChipsContent[], description: string, buttonLabel: string, recipe: Recipe
  ) {
    this.headerIcon = headerIcon
    this.headerTitle = headerTitle
    this.headerSubtitle = headerSubtitle
    this.photo = photo
    this.photoDescription = photoDescription
    this.chips = chips
    this.description = description
    this.buttonLabel = buttonLabel
    this.recipe = recipe
  }
}
