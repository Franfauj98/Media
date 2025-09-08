import {ChipsContent} from "../../../shared/model/chips/ChipsContent"

export class DishOverview {
  headerIcon: string = ''
  headerTitle: string = ''
  headerSubtitle: string = ''
  photo: string = ''
  photoDescription: string = ''
  chips: ChipsContent[] = []
  description: string = ''
  buttonLabel: string = ''

  constructor(
    headerIcon: string, headerTitle: string, headerSubtitle: string, photo: string, photoDescription: string,
    chips: ChipsContent[], description: string, buttonLabel: string
  ) {
    this.headerIcon = headerIcon
    this.headerTitle = headerTitle
    this.headerSubtitle = headerSubtitle
    this.photo = photo
    this.photoDescription = photoDescription
    this.chips = chips
    this.description = description
    this.buttonLabel = buttonLabel
  }
}
