import { AlcoholicDrink } from './alcoholic-drink.';
import { Cigarette } from './cigarette';
import { Food } from './food';

export interface TaxaVisitorProtocol {
  calculeTaxesForFood(food: Food): number;
  calculeTaxesForCigarette(cigarette: Cigarette): number;
  calculeTaxesForAlcoholicDrink(alcoholicDrink: AlcoholicDrink): number;
}
