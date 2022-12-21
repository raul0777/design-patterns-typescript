import { TaxaVisitorProtocol } from './tax-visitor-protocol';
import { VisitableProduct } from './visitable-product';

export class Cigarette extends VisitableProduct {
  constructor(protected price: number) {
    super('Cigarette', price);
  }
  getPriceWithTaxes(visitor: TaxaVisitorProtocol): number {
    return visitor.calculeTaxesForCigarette(this);
  }
}
