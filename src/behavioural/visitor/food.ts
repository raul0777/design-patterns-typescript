import { TaxaVisitorProtocol } from './tax-visitor-protocol';
import { VisitableProduct } from './visitable-product';

export class Food extends VisitableProduct {
  constructor(protected price: number) {
    super('Food', price);
  }
  getPriceWithTaxes(visitor: TaxaVisitorProtocol): number {
    return visitor.calculeTaxesForFood(this);
  }
}
