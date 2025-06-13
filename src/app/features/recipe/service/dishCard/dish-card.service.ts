import { Injectable } from '@angular/core';
import { COMPONENT_TYPE } from '../../../../shared/services/component/loader/component-loader.service';

@Injectable({
  providedIn: 'root'
})
export class DishCardService {

  private dishCards: DishCard[] = [
    new DishCard('Entrée', 'Petit plat mais essentiel', 'L\'entrée peut être vue comme un petit plat inutile, fastidieux et long à préparer pour un profit limité. Cependant, c\'est une mise en bouche pour un repas réussi. Un démarrage chaud ou froid et plein de saveur. Ne la négligez pas.', 'Les entrées', 'entree.jpg', 'rice_bowl', COMPONENT_TYPE.ENTREE),
    new DishCard('Plat de résistance', 'Le gros du travail', 'Le plat de résistance c\'est le moment où on ne joue plus. De la gourmandise et de la régalade au rendez-vous. Affutez les couteaux, ça va swinguer.', 'Les plats', 'plat_resistance.jpg', 'restaurant', COMPONENT_TYPE.PLAT),
    new DishCard('Dessert', 'Un peu de douceur', 'Bon maintenant qu\'on a bien mangé il s\'agirait de se faire plaisir pour finir. Du sucre, du chocolat ou des fruits ; un peu de farine, de lait et le tour est joué.', 'Les desserts', 'dessert.jpg', 'cookie', COMPONENT_TYPE.DESSERT)
  ]

  constructor() { }

  getDishCards(): DishCard[] {

    return this.dishCards;
  }
}

export class DishCard {
  public title: String
  public subTitle: String
  public content: String
  public buttonTitle: String
  public photo: String
  public icon: String
  public dishType: COMPONENT_TYPE

  constructor(title: string, subtitle: string, content: string, buttonTitle: string, photo: string, icon: string, dishType: COMPONENT_TYPE) {
    this.title = title
    this.subTitle = subtitle
    this.content = content
    this.buttonTitle = buttonTitle
    this.photo = photo
    this.icon = icon
    this.dishType = dishType
  }
}