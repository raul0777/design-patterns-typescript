import { AlcoholicDrink } from './alcoholic-drink.';
import { Cigarette } from './cigarette';
import { Food } from './food';
import { TaxaVisitorProtocol } from './tax-visitor-protocol';

export class USTaxVisitor implements TaxaVisitorProtocol {
  calculeTaxesForFood(food: Food): number {
    return food.getPrice() + food.getPrice() * 0.15;
  }
  calculeTaxesForCigarette(cigarette: Cigarette): number {
    return cigarette.getPrice() + cigarette.getPrice() * 2;
  }
  calculeTaxesForAlcoholicDrink(alcoholicDrink: AlcoholicDrink): number {
    return alcoholicDrink.getPrice() + alcoholicDrink.getPrice() * 1;
  }
}
