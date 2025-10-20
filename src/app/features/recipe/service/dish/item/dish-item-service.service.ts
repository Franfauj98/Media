import {Injectable} from '@angular/core';
import {ChipsContent} from '../../../../../shared/model/chips/ChipsContent';
import {DishOverview} from '../../../model/DishOverview';
import {COMPONENT_TYPE} from '../../../../../shared/services/component/loader/component-loader.service';
import Fuse from "fuse.js";
import {Ingredient, Instruction, Recipe} from "../../../model/Recipe";

@Injectable({
  providedIn: 'root'
})
export class DishItemServiceService {

  public chipVegetatian: string = 'vegetarian'
  public chipGuilty: string = 'guilty'
  public chipYummy: string = 'yummy'

  public chipsContentMap: Map<string, ChipsContent> = new Map<string, ChipsContent>([
    [this.chipVegetatian, new ChipsContent('grain', 'Végé', 'vegetarian-chip')],
    [this.chipGuilty, new ChipsContent('fastfood', 'Guilty', 'guilty-chip')],
    [this.chipYummy, new ChipsContent('cookie', 'Yummy', 'yummy-chip')]
  ]);

  private dishesFirstMealOverview: DishOverview[] = [
    new DishOverview('rice_bowl', 'Rouleau de printemps', 'Frais et délicieux', 'rouleau_printemps.jpg', 'Photo of a spring roll',
      [this.chipsContentMap.get(this.chipVegetatian)!!, this.chipsContentMap.get(this.chipGuilty)!!, this.chipsContentMap.get(this.chipYummy)!!],
      'Enveloppé par une feuille de riz humide et garni d\'ingrédients frais le rouleau de printemps est un délice en toutes saisons.',
      'La recette !',
      new Recipe(
        [
          new Ingredient("Feuilles de riz", "8 feuilles"),
          new Ingredient("Vermicelles de riz", "100 g"),
          new Ingredient("Crevettes cuites", "12 pièces"),
          new Ingredient("Carottes", "1, râpée"),
          new Ingredient("Concombre", "0.5, coupé en fins bâtonnets"),
          new Ingredient("Feuilles de menthe", "8 à 10"),
          new Ingredient("Feuilles de laitue", "8 grandes"),
          new Ingredient("Germes de soja", "50 g"),
          new Ingredient("Sauce nuoc-mâm", "pour servir")
        ],
        [
          new Instruction(1, "Faites cuire les vermicelles de riz selon les instructions du paquet, puis égouttez et laissez refroidir."),
          new Instruction(2, "Préparez tous les ingrédients : épluchez et râpez la carotte, coupez le concombre en fins bâtonnets, préparez les feuilles de laitue et les herbes."),
          new Instruction(3, "Trempez une feuille de riz dans de l’eau tiède pendant environ 10 secondes pour la ramollir, puis posez-la sur un torchon humide."),
          new Instruction(4, "Disposez une feuille de laitue, un peu de vermicelles, quelques crevettes, carottes, concombre, germes de soja et feuilles de menthe."),
          new Instruction(5, "Repliez les bords de la feuille de riz et roulez fermement pour former un rouleau."),
          new Instruction(6, "Répétez l’opération avec les autres feuilles de riz. Servez frais avec la sauce nuoc-mâm.")
        ],
        30, // preparationTime
        5,  // cookingTime
        4,  // servings
        "Pour éviter que les rouleaux collent entre eux, badigeonnez-les légèrement d’huile ou séparez-les avec un film humide."
      )),
    new DishOverview('rice_bowl', 'Salade de riz', 'Frais et délicieux', 'rouleau_printemps.jpg', 'Photo of a spring roll',
      [this.chipsContentMap.get(this.chipVegetatian)!!, this.chipsContentMap.get(this.chipGuilty)!!],
      'Enveloppé par une feuille de riz humide et garni d\'ingrédients frais le rouleau de printemps est un délice en toutes saisons.',
      'La recette !',
      new Recipe(
        [
          new Ingredient("Riz basmati", "200 g"),
          new Ingredient("Maïs en grains", "100 g"),
          new Ingredient("Petits pois", "100 g"),
          new Ingredient("Dés de jambon", "100 g"),
          new Ingredient("Tomates cerises", "10, coupées en deux"),
          new Ingredient("Oeufs durs", "2, coupés en quartiers"),
          new Ingredient("Huile d’olive", "3 cuillères à soupe"),
          new Ingredient("Vinaigre de cidre", "1 cuillère à soupe"),
          new Ingredient("Sel et poivre", "à convenance")
        ],
        [
          new Instruction(1, "Faites cuire le riz dans de l’eau bouillante salée, égouttez et laissez refroidir."),
          new Instruction(2, "Faites cuire les petits pois 5 minutes à l’eau bouillante puis égouttez-les."),
          new Instruction(3, "Dans un grand saladier, mélangez le riz refroidi, le maïs, les petits pois, les dés de jambon et les tomates cerises."),
          new Instruction(4, "Préparez la vinaigrette en mélangeant l’huile d’olive, le vinaigre, le sel et le poivre."),
          new Instruction(5, "Versez la vinaigrette sur la salade et mélangez bien."),
          new Instruction(6, "Décorez avec les quartiers d’œufs durs juste avant de servir.")
        ],
        20, // preparationTime
        15, // cookingTime
        4,  // servings
        "Vous pouvez ajouter du thon, des cornichons ou des herbes fraîches pour varier les saveurs."
      )
    ),
    new DishOverview('rice_bowl', 'Salade de riz', 'Frais et délicieux', 'rouleau_printemps.jpg', 'Photo of a spring roll',
      [this.chipsContentMap.get(this.chipVegetatian)!!, this.chipsContentMap.get(this.chipGuilty)!!],
      'Enveloppé par une feuille de riz humide et garni d\'ingrédients frais le rouleau de printemps est un délice en toutes saisons.',
      'La recette !',
      new Recipe(
        [
          new Ingredient("Riz basmati", "200 g"),
          new Ingredient("Maïs en grains", "100 g"),
          new Ingredient("Petits pois", "100 g"),
          new Ingredient("Dés de jambon", "100 g"),
          new Ingredient("Tomates cerises", "10, coupées en deux"),
          new Ingredient("Oeufs durs", "2, coupés en quartiers"),
          new Ingredient("Huile d’olive", "3 cuillères à soupe"),
          new Ingredient("Vinaigre de cidre", "1 cuillère à soupe"),
          new Ingredient("Sel et poivre", "à convenance")
        ],
        [
          new Instruction(1, "Faites cuire le riz dans de l’eau bouillante salée, égouttez et laissez refroidir."),
          new Instruction(2, "Faites cuire les petits pois 5 minutes à l’eau bouillante puis égouttez-les."),
          new Instruction(3, "Dans un grand saladier, mélangez le riz refroidi, le maïs, les petits pois, les dés de jambon et les tomates cerises."),
          new Instruction(4, "Préparez la vinaigrette en mélangeant l’huile d’olive, le vinaigre, le sel et le poivre."),
          new Instruction(5, "Versez la vinaigrette sur la salade et mélangez bien."),
          new Instruction(6, "Décorez avec les quartiers d’œufs durs juste avant de servir.")
        ],
        20, // preparationTime
        15, // cookingTime
        4,  // servings
        "Vous pouvez ajouter du thon, des cornichons ou des herbes fraîches pour varier les saveurs."
      )
    )
  ]

  private chipsSelected: ChipsContent[] = []

  private dishesMainMealOverview: DishOverview[] = []

  private dishesDesertOverview: DishOverview[] = [
    new DishOverview(
      "🍪",
      "Cookies Cœur Coulant Spéculoos",
      "Gourmands et fondants à souhait",
      "assets/images/cookies-speculoos.jpg",
      "Cookies moelleux au cœur coulant de pâte de spéculoos, à la fois croustillants et fondants.",
      [
        new ChipsContent("🍪", "Gourmand", "chip--orange"),
        new ChipsContent("🔥", "Cœur coulant", "chip--red"),
        new ChipsContent("🎄", "Spéculoos", "chip--brown")
      ],
      "Des cookies ultra-gourmands au cœur fondant de pâte de spéculoos : croustillants à l’extérieur, fondants à l’intérieur… irrésistibles !",
      "Voir la recette",
      new Recipe(
        [
          new Ingredient("Beurre fondu", "150 g"),
          new Ingredient("Sucre vergeoise", "100 g"),
          new Ingredient("Sucre blanc", "50 g"),
          new Ingredient("Œuf entier", "1"),
          new Ingredient("Jaune d'œuf", "1"),
          new Ingredient("Pâte de spéculoos (pour la pâte)", "100 g"),
          new Ingredient("Extrait naturel de vanille", "1 cc"),
          new Ingredient("Farine", "280 g"),
          new Ingredient("Fécule de maïs", "2 cc"),
          new Ingredient("Levure chimique", "1/2 cc"),
          new Ingredient("Sel", "1 grosse pincée"),
          new Ingredient("Pépites de chocolat noir", "150 g"),
          new Ingredient("Spéculoos écrasés", "80 g"),
          new Ingredient("Pâte de spéculoos (pour le cœur coulant)", "215 à 250 g")
        ],
        [
          new Instruction(1, "Former des petites boules de pâte de spéculoos (environ 18 à 20 g) et les déposer sur une plaque recouverte de papier sulfurisé."),
          new Instruction(2, "Placer les boules de spéculoos au congélateur pendant au moins 30 minutes pour qu’elles durcissent."),
          new Instruction(3, "Faire fondre le beurre et le mélanger avec les deux sucres."),
          new Instruction(4, "Ajouter la pâte de spéculoos et l’extrait de vanille. Fouetter jusqu’à obtenir un mélange homogène."),
          new Instruction(5, "Incorporer l’œuf et le jaune d’œuf, puis mélanger."),
          new Instruction(6, "Dans un autre saladier, mélanger la farine, la fécule, la levure et le sel, puis tamiser ce mélange au-dessus de la préparation liquide."),
          new Instruction(7, "Incorporer délicatement à la maryse, puis ajouter les pépites de chocolat et les brisures de spéculoos."),
          new Instruction(8, "Prendre une cuillère à soupe de pâte, l’aplatir dans la main, déposer une boule de spéculoos congelée au centre et refermer pour former une boule."),
          new Instruction(9, "Déposer les boules sur une plaque recouverte de papier sulfurisé et replacer au congélateur au moins 30 minutes avant cuisson."),
          new Instruction(10, "Préchauffer le four à 180°C (chaleur tournante). Disposer les boules de cookies sur une plaque en les espaçant et enfourner pour 9 à 10 minutes."),
          new Instruction(11, "Les bords doivent être croustillants et légèrement craquelés, l’intérieur encore mou."),
          new Instruction(12, "Ramollir un peu de pâte de spéculoos au micro-ondes et napper les cookies encore chauds d’un filet. Planter un demi-spéculoos au centre."),
          new Instruction(13, "Laisser refroidir avant dégustation.")
        ],
        45, // préparation (inclut les temps de façonnage)
        10, // cuisson
        12, // portions (12 à 15 cookies)
        "Ces cookies se conservent 4 à 5 jours dans une boîte hermétique, ou se congèlent (cuits ou crus) pour des envies sucrées à la demande !"
      )
    )
]

  private searchFirstDish: any;

  constructor() {
    this.searchFirstDish = new Fuse(this.dishesFirstMealOverview, {keys: ['headerTitle']})
  }

  getDishesFirstMealOverview(): DishOverview[] {
    return this.dishesFirstMealOverview
  }

  getDishesMainMealOverview(): DishOverview[] {
    return this.dishesMainMealOverview
  }

  getDishesDesertOverview(): DishOverview[] {
    return this.dishesDesertOverview
  }

  getDishesOverviewByType(componentType: COMPONENT_TYPE): DishOverview[] {
    switch (componentType) {
      case COMPONENT_TYPE.ENTREE:
        return this.dishesFirstMealOverview
      case COMPONENT_TYPE.PLAT:
        return this.dishesMainMealOverview
      case COMPONENT_TYPE.DESSERT:
        return this.dishesDesertOverview
      default:
        return []
    }
  }

  searchDishesFirstMealOverview(element: string): any[] {
    return this.searchFirstDish.search(element)
  }

  setChipsSelected(chips: ChipsContent[]): void {
    this.chipsSelected = chips
  }

  getChipsSelected(): ChipsContent[] {
    return this.chipsSelected
  }

}
