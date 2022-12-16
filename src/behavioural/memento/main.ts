import { ImageEditor } from './image-editor';
import { ImageEditorBackupManager } from './image-editor-backup-manager';

const imageEditor = new ImageEditor('/media/image.png', 'png');
const backupManager = new ImageEditorBackupManager(imageEditor);

backupManager.backup();
imageEditor.convertFormaTo('gif');

backupManager.backup();
imageEditor.convertFormaTo('bmp');

backupManager.backup();
imageEditor.convertFormaTo('jpg');

console.log(imageEditor); //jpg

backupManager.undo();
console.log(imageEditor); // bmp

backupManager.undo();
console.log(imageEditor); //gif

backupManager.undo();
console.log(imageEditor); //png

backupManager.undo(); // no mementos
console.log(imageEditor); //png
