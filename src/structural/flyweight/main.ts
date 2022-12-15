import { deliveryContext } from './delivery/delivery-context';
import { DeliveryFactory } from './delivery/delivery-factory';

const factory = new DeliveryFactory();
deliveryContext(factory, 'Raul', '20B', 'Av Brasil', 'SP');
deliveryContext(factory, 'Helena', '20B', 'Av Brasil', 'SP');
deliveryContext(factory, 'Joana', '502', 'Av Brasil', 'SP');
deliveryContext(factory, 'Eliana', '2', 'Rua A', 'BH');
deliveryContext(factory, 'Romeu', '501', 'Rua B', 'RJ');

console.log();
console.log(factory.getLocations());
