export { seeds, plants };

let beetsSeed: 0,
    cabbageSeed: 0,
    carrotSeed: 0,
    cornSeed: 0,
    cucumberSeed: 0,
    eggplantSeed: 0,
    onionSeed: 0,
    peasSeed: 0,
    pepperSeed: 0,
    potatoSeed: 0,
    pumpkinSeed: 0,
    radishSeed: 0,
    saladSeed: 0,
    spinachSeed: 0,
    tomatoSeed: 0,
    watermelonSeed: 0,
    wheatSeed: 0
};

let plants = {
    beets: 0,
    cabbage: 0,
    carrot: 0,
    corn: 0,
    cucumber: 0,
    eggplant: 0,
    onion: 0,
    peas: 0,
    pepper: 0,
    potato: 0,
    pumpkin: 0,
    radish: 0,
    salad: 0,
    spinach: 0,
    tomato: 0,
    watermelon: 0,
    wheat: 0
};


const STORAGE_KEY = "farming-game-storage";

export function saveGame(gameData) {
  const dataString = JSON.stringify(gameData);
  localStorage.setItem(STORAGE_KEY, dataString);
}

export function loadGame() {
  const dataString = localStorage.getItem(STORAGE_KEY);
  if (dataString) {
    return JSON.parse(dataString);
  } else {
    return null;
  }
}


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
    localStorage.setItem('seeds', JSON.stringify(seeds));
    localStorage.setItem('plants', JSON.stringify(plants));
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
        case 'beets':
            plants.beets += amount;
            document.getElementById('beets').innerHTML = plants.beets;
            break;
        case 'cabbage':
            plants.cabbage += amount;
            document.getElementById('cabbage').innerHTML = plants.cabbage;
            break;
        case 'carrot':
            plants.carrot += amount;
            document.getElementById('carrot').innerHTML = plants.carrot;
            break;
        case 'corn':
            plants.corn += amount;
            document.getElementById('corn').innerHTML = plants.corn;
            break;
        case 'cucumber':
            plants.cucumber += amount;
            document.getElementById('cucumber').innerHTML = plants.cucumber;
            break;
        case 'eggplant':
            plants.eggplant += amount;
            document.getElementById('eggplant').innerHTML = plants.eggplant;
            break;
        case 'onion':
            plants.onion += amount;
            document.getElementById('onion').innerHTML = plants.onion;
            break;
        case 'peas':
            plants.peas += amount;
            document.getElementById('peas').innerHTML = plants.peas;
            break;
        case 'pepper':
            plants.pepper += amount;
            document.getElementById('pepper').innerHTML = plants.pepper;
            break;
        case 'potato':
            plants.potato += amount;
            document.getElementById('potato').innerHTML = plants.potato;
            break;
        case 'pumpkin':
            plants.pumpkin += amount;
            document.getElementById('pumpkin').innerHTML = plants.pumpkin;
            break;
        case 'radish':
            plants.radish += amount;
            document.getElementById('radish').innerHTML = plants.radish;
            break;
        case 'salad':
            plants.salad += amount;
            document.getElementById('salad').innerHTML = plants.salad;
            break;
        case 'spinach':
            plants.spinach += amount;
            document.getElementById('spinach').innerHTML = plants.spinach;
            break;
        case 'tomato':
            plants.tomato += amount;
            document.getElementById('tomato').innerHTML = plants.tomato;
            break;
        case 'watermelon':
            plants.watermelon += amount;
            document.getElementById('watermelon').innerHTML = plants.watermelon;
            break;
        case 'wheat':
            plants.wheat += amount;
            document.getElementById('wheat').innerHTML = plants.wheat;
            break;
    }
    saveInventory();
}

function loadInventory() {
    if (localStorage.getItem('seeds')) {
        seeds = JSON.parse(localStorage.getItem('seeds'));
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
    }
    if (localStorage.getItem('plants')) {
        plants = JSON.parse(localStorage.getItem('plants'));
        document.getElementById('beets').innerHTML = plants.beets;
        document.getElementById('cabbage').innerHTML = plants.cabbage;
        document.getElementById('carrot').innerHTML = plants.carrot;
        document.getElementById('corn').innerHTML = plants.corn;
        document.getElementById('cucumber').innerHTML = plants.cucumber;
        document.getElementById('eggplant').innerHTML = plants.eggplant;
        document.getElementById('onion').innerHTML = plants.onion;
        document.getElementById('peas').innerHTML = plants.peas;
        document.getElementById('pepper').innerHTML = plants.pepper;
        document.getElementById('potato').innerHTML = plants.potato;
        document.getElementById('pumpkin').innerHTML = plants.pumpkin;
        document.getElementById('radish').innerHTML = plants.radish;
        document.getElementById('salad').innerHTML = plants.salad;
        document.getElementById('spinach').innerHTML = plants.spinach;
        document.getElementById('tomato').innerHTML = plants.tomato;
        document.getElementById('watermelon').innerHTML = plants.watermelon;
        document.getElementById('wheat').innerHTML = plants.wheat;
    }
}


document.addEventListener('DOMContentLoaded', loadInventory);

document.getElementById('beetsSeedButton').addEventListener('click', function () {
    addToInventory('beetsSeed', 1);
});
document.getElementById('cabbageSeedButton').addEventListener('click', function () {
    addToInventory('cabbageSeed', 1);
});
document.getElementById('carrotSeedButton').addEventListener('click', function () {
    addToInventory('carrotSeed', 1);
});
document.getElementById('cornSeedButton').addEventListener('click', function () {
    addToInventory('cornSeed', 1);
});
document.getElementById('cucumberSeedButton').addEventListener('click', function () {
    addToInventory('cucumberSeed', 1);
});
document.getElementById('eggplantSeedButton').addEventListener('click', function () {
    addToInventory('eggplantSeed', 1);
});
document.getElementById('onionSeedButton').addEventListener('click', function () {
    addToInventory('onionSeed', 1);
});
document.getElementById('peasSeedButton').addEventListener('click', function () {
    addToInventory('peasSeed', 1);
});
document.getElementById('pepperSeedButton').addEventListener('click', function () {
    addToInventory('pepperSeed', 1);
});
document.getElementById('potatoSeedButton').addEventListener('click', function () {
    addToInventory('potatoSeed', 1);
});
document.getElementById('pumpkinSeedButton').addEventListener('click', function () {
    addToInventory('pumpkinSeed', 1);
});
document.getElementById('radishSeedButton').addEventListener('click', function () {
    addToInventory('radishSeed', 1);
});
document.getElementById('saladSeedButton').addEventListener('click', function () {
    addToInventory('saladSeed', 1);
});
document.getElementById('spinachSeedButton').addEventListener('click', function () {
    addToInventory('spinachSeed', 1);
});
document.getElementById('tomatoSeedButton').addEventListener('click', function () {
    addToInventory('tomatoSeed', 1);
});
document.getElementById('watermelonSeedButton').addEventListener('click', function () {
    addToInventory('watermelonSeed', 1);
});
document.getElementById('wheatSeedButton').addEventListener('click', function () {
    addToInventory('wheatSeed', 1);
});

document.getElementById('beetsHarvestButton').addEventListener('click', function () {
    if (plants.beets > 0) {
        plants.beets--;
        document.getElementById('beets').innerHTML = plants.beets;
        addToInventory('beetsSeed', 2);
    }
});
document.getElementById('cabbageHarvestButton').addEventListener('click', function () {
    if (plants.cabbage > 0) {
        plants.cabbage--;
        document.getElementById('cabbage').innerHTML = plants.cabbage;
        addToInventory('cabbageSeed', 2);
    }
});
document.getElementById('carrotHarvestButton').addEventListener('click', function () {
    if (plants.carrot > 0) {
        plants.carrot--;
        document.getElementById('carrot').innerHTML = plants.carrot;
        addToInventory('carrotSeed', 2);
    }
});
document.getElementById('cornHarvestButton').addEventListener('click', function () {
    if (plants.corn > 0) {
        plants.corn--;
        document.getElementById('corn').innerHTML = plants.corn;
        addToInventory('cornSeed', 2);
    }
});
document.getElementById('cucumberHarvestButton').addEventListener('click', function () {
    if (plants.cucumber > 0) {
        plants.cucumber--;
        document.getElementById('cucumber').innerHTML = plants.cucumber;
        addToInventory('cucumberSeed', 2);
    }
});
document.getElementById('eggplantHarvestButton').addEventListener('click', function () {
    if (plants.eggplant > 0) {
        plants.eggplant--;
        document.getElementById('eggplant').innerHTML = plants.eggplant;
        addToInventory('eggplantSeed', 2);
    }
});
document.getElementById('onionHarvestButton').addEventListener('click', function () {
    if (plants.onion > 0) {
        plants.onion--;
        document.getElementById('onion').innerHTML = plants.onion;
        addToInventory('onionSeed', 2);
    }
});
document.getElementById('peasHarvestButton').addEventListener('click', function () {
    if (plants.peas > 0) {
        plants.peas--;
        document.getElementById('peas').innerHTML = plants.peas;
        addToInventory('peasSeed', 2);
    }
});
document.getElementById('pepperHarvestButton').addEventListener('click', function () {
    if (plants.pepper > 0) {
        plants.pepper--;
        document.getElementById('pepper').innerHTML = plants.pepper;
        addToInventory('pepperSeed', 2);
    }
});
document.getElementById('potatoHarvestButton').addEventListener('click', function () {
    if (plants.potato > 0) {
        plants.potato--;
        document.getElementById('potato').innerHTML = plants.potato;
        addToInventory('potatoSeed', 2);
    }
});
document.getElementById('pumpkinHarvestButton').addEventListener('click', function () {
    if (plants.pumpkin > 0) {
        plants.pumpkin--;
        document.getElementById('pumpkin').innerHTML = plants.pumpkin;
        addToInventory('pumpkinSeed', 2);
    }
});
document.getElementById('radishHarvestButton').addEventListener('click', function () {
    if (plants.radish > 0) {
        plants.radish--;
        document.getElementById('radish').innerHTML = plants.radish;
        addToInventory('radishSeed', 2);
    }
});
document.getElementById('saladHarvestButton').addEventListener('click', function () {
    if (plants.salad > 0) {
        plants.salad--;
        document.getElementById('salad').innerHTML = plants.salad;
        addToInventory('saladSeed', 2);
    }
});
document.getElementById('spinachHarvestButton').addEventListener('click', function () {
    if (plants.spinach > 0) {
        plants.spinach--;
        document.getElementById('spinach').innerHTML = plants.spinach;
        addToInventory('spinachSeed', 2);
    }
});
document.getElementById('tomatoHarvestButton').addEventListener('click', function () {
    if (plants.tomato > 0) {
        plants.tomato--;
        document.getElementById('tomato').innerHTML = plants.tomato;
        addToInventory('tomatoSeed', 2);
    }
});
document.getElementById('watermelonHarvestButton').addEventListener('click', function () {
    if (plants.watermelon > 0) {
        plants.watermelon--;
        document.getElementById('watermelon').innerHTML = plants.watermelon;
        addToInventory('watermelonSeed', 2);
    }
});
document.getElementById('wheatHarvestButton').addEventListener('click', function () {
    if (plants.wheat > 0) {
        plants.wheat--;
        document.getElementById('wheat').innerHTML = plants.wheat;
        addToInventory('wheatSeed', 2);
    }
});
export { seeds, plants };
export { saveInventory, addToInventory };

