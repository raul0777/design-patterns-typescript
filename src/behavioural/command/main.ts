import { LightIntensityCommand } from './light-intensity-command';
import { LightPowerCommand } from './light-power-command';
import { SmartHouseApp } from './smart-house-app';
import { SmartHouseLight } from './smart-house-light';

// Receiver
const bedroomLight = new SmartHouseLight('Luz Quarto');
const bathroomLight = new SmartHouseLight('Luz Banheiro');

// Command
const bedroomLightPowerCommand = new LightPowerCommand(bedroomLight);
const bathroomLightPowerCommand = new LightPowerCommand(bathroomLight);
const bathroomIntensityCommand = new LightIntensityCommand(bathroomLight);

// Controle - Invoker
const smartHouserApp = new SmartHouseApp();
smartHouserApp.addCommand('btn-1', bedroomLightPowerCommand);
smartHouserApp.addCommand('btn-2', bathroomLightPowerCommand);
smartHouserApp.addCommand('btn-3', bathroomIntensityCommand);

smartHouserApp.executeCommand('btn-1');
smartHouserApp.undoCommand('btn-1');

smartHouserApp.executeCommand('btn-2');
smartHouserApp.undoCommand('btn-2');

for (let i = 0; i < 5; i++) {
  smartHouserApp.executeCommand('btn-3');
}

for (let i = 0; i < 10; i++) {
  smartHouserApp.undoCommand('btn-3');
}
