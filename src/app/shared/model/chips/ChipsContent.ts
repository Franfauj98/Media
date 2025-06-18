export class ChipsContent {
  icon: string = ''
  label: string = ''
  htmlClass: string = ''

  constructor(
    icon: string,
    label: string,
    htmlClass: string
  ) {
    this.icon = icon
    this.label = label
    this.htmlClass = htmlClass
  }
}
