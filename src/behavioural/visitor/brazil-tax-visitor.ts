import { AlcoholicDrink } from './alcoholic-drink.';
import { Cigarette } from './cigarette';
import { Food } from './food';
import { TaxaVisitorProtocol } from './tax-visitor-protocol';

export class BrazilTaxVisitor implements TaxaVisitorProtocol {
  calculeTaxesForFood(food: Food): number {
    return food.getPrice() + food.getPrice() * 0.05;
  }
  calculeTaxesForCigarette(cigarette: Cigarette): number {
    return cigarette.getPrice() + cigarette.getPrice() * 1.5;
  }
  calculeTaxesForAlcoholicDrink(alcoholicDrink: AlcoholicDrink): number {
    return alcoholicDrink.getPrice() + alcoholicDrink.getPrice() * 0.5;
  }
}
