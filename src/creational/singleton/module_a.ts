import { MyDatabaseFunction } from './database/my-database-function';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Raul', age: 31 });
myDatabaseClassic.add({ name: 'Maria', age: 30 });
myDatabaseClassic.add({ name: 'Eduarda', age: 21 });
myDatabaseClassic.show();

export { myDatabaseClassic };
