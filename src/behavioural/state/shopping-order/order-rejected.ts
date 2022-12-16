import { ShoppingOrder } from './shopping-order';
import { ShoppingOrderState } from './shopping-order-state';

export class OrderRejected implements ShoppingOrderState {
  private name = 'OrderPending';

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }

  approvePayment(): void {
    console.log('Não posso aprovar o pagamento porque o pedido foi recusado.');
  }

  rejectPayment(): void {
    console.log(
      'Não posso recusar o pagamento porque o pedido já está recusado.',
    );
  }

  waitPayment(): void {
    console.log('Não posso mover para pendente porque o pedido foi recusado.');
  }

  shipOrder(): void {
    console.log('Não posso enviar um pedido com o pagamento recusado');
  }
}
