import { MyDatabaseFunction } from './database/my-database-function';
import { myDatabaseClassic as myDatabaseFromModuleA } from './module_a';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Roberto', age: 31 });
myDatabaseClassic.add({ name: 'Joana', age: 19 });
myDatabaseClassic.add({ name: 'Maria', age: 21 });
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseFromModuleA);
