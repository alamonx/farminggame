export { seeds, plants };

import { seeds, plants } from './storage.js';





document.getElementById('beetsSeed').innerHTML = seeds.beetsSeed;
document.getElementById('cabbageSeed').innerHTML = seeds.cabbageSeed;
document.getElementById('carrotSeed').innerHTML = seeds.carrotSeed;
document.getElementById('cornSeed').innerHTML = seeds.cornSeed;
document.getElementById('cucumberSeed').innerHTML = seeds.cucumberSeed;
document.getElementById('eggplantSeed').innerHTML = seeds.eggplantSeed;
document.getElementById('onionSeed').innerHTML = seeds.onionSeed;
document.getElementById('peasSeed').innerHTML = seeds.peasSeed;
document.getElementById('pepperSeed').innerHTML = seeds.pepperSeed;
document.getElementById('potatoSeed').innerHTML = seeds.potatoSeed;
document.getElementById('pumpkinSeed').innerHTML = seeds.pumpkinSeed;
document.getElementById('radishSeed').innerHTML = seeds.radishSeed;
document.getElementById('saladSeed').innerHTML = seeds.saladSeed;
document.getElementById('spinachSeed').innerHTML = seeds.spinachSeed;
document.getElementById('tomatoSeed').innerHTML = seeds.tomatoSeed;
document.getElementById('watermelonSeed').innerHTML = seeds.watermelonSeed;
document.getElementById('wheatSeed').innerHTML = seeds.wheatSeed;

function saveInventory() {

}

function addToInventory(type, amount) {
    switch (type) {
        case 'beetsSeed':
            seeds.beetsSeed += amount;
            document.getElementById('beetsSeed').innerHTML = seeds.beetsSeed;
            break;
        case 'cabbageSeed':
            seeds.cabbageSeed += amount;
            document.getElementById('cabbageSeed').innerHTML = seeds.cabbageSeed;
            break;
        case 'carrotSeed':
            seeds.carrotSeed += amount;
            document.getElementById('carrotSeed').innerHTML = seeds.carrotSeed;
            break;
        case 'cornSeed':
            seeds.cornSeed += amount;
            document.getElementById('cornSeed').innerHTML = seeds.cornSeed;
            break;
        case 'cucumberSeed':
            seeds.cucumberSeed += amount;
            document.getElementById('cucumberSeed').innerHTML = seeds.cucumberSeed;
            break;
        case 'eggplantSeed':
            seeds.eggplantSeed += amount;
            document.getElementById('eggplantSeed').innerHTML = seeds.eggplantSeed;
            break;
        case 'onionSeed':
            seeds.onionSeed += amount;
            document.getElementById('onionSeed').innerHTML = seeds.onionSeed;
            break;
        case 'peasSeed':
            seeds.peasSeed += amount;
            document.getElementById('peasSeed').innerHTML = seeds.peasSeed;
            break;
        case 'pepperSeed':
            seeds.pepperSeed += amount;
            document.getElementById('pepperSeed').innerHTML = seeds.pepperSeed;
            break;
        case 'potatoSeed':
            seeds.potatoSeed += amount;
            document.getElementById('potatoSeed').innerHTML = seeds.potatoSeed;
            break;
        case 'pumpkinSeed':
            seeds.pumpkinSeed += amount;
            document.getElementById('pumpkinSeed').innerHTML = seeds.pumpkinSeed;
            break;
        case 'radishSeed':
            seeds.radishSeed += amount;
            document.getElementById('radishSeed').innerHTML = seeds.radishSeed;
            break;
        case 'saladSeed':
            seeds.saladSeed += amount;
            document.getElementById('saladSeed').innerHTML = seeds.saladSeed;
            break;
        case 'spinachSeed':
            seeds.spinachSeed += amount;
            document.getElementById('spinachSeed').innerHTML = seeds.spinachSeed;
            break;
        case 'tomatoSeed':
            seeds.tomatoSeed += amount;
            document.getElementById('tomatoSeed').innerHTML = seeds.tomatoSeed;
            break;
        case 'watermelonSeed':
            seeds.watermelonSeed += amount;
            document.getElementById('watermelonSeed').innerHTML = seeds.watermelonSeed;
            break;
        case 'wheatSeed':
            seeds.wheatSeed += amount;
            document.getElementById('wheatSeed').innerHTML = seeds.wheatSeed;
            break;
    }
    saveInventory();
}
