// Define the cost of each seed
const seedCost = {
    beetsSeed: 10,
    cabbageSeed: 15,
    carrotSeed: 20,
    cornSeed: 25,
    cucumberSeed: 30,
    eggplantSeed: 35,
    onionSeed: 40,
    potatoSeed: 45,
};

// Define the selling price of each plant
const plantPrice = {
    beets: 20,
    cabbage: 25,
    carrot: 30,
    corn: 35,
    cucumber: 40,
    eggplant: 45,
    onion: 50,
    potato: 55,
};

// Get the seed cost for the given plant
function getSeedCost(plant) {
    return seedCost[plant];
}

// Get the selling price for the given plant
function getPlantPrice(plant) {
    return plantPrice[plant];
}

// Buy seeds from the marketplace
function buySeed(plant) {
    let cost = getSeedCost(plant);

    if (gold < cost) {
        alert("You don't have enough gold to buy this seed!");
        return;
    }

    gold -= cost;
    document.getElementById("gold").innerHTML = gold;
    addToInventory(plants[plant], 1);

    // Update the seed cost displayed on the marketplace
    let seedCostElement = document.getElementById(`seedCost${plant}`);
    seedCost[plant] *= 2;
    seedCostElement.innerHTML = seedCost[plant];

    // Update the inventory displayed on the marketplace
    let seedInventoryElement = document.getElementById(`${plants[plant]}Seed`);
    seedInventoryElement.innerHTML = seeds[plants[plant]] + "";

    // Update the inventory displayed in the game
    let inventoryElement = document.getElementById("seed");
    inventoryElement.innerHTML = seed + "";
}

// Sell plants to the marketplace
function sellPlant(plant) {
    let price = getPlantPrice(plant);

    if (inventory[plant] < 1) {
        alert("You don't have any " + plant + " to sell!");
        return;
    }

    inventory[plant] -= 1;
    gold += price;
    document.getElementById("gold").innerHTML = gold;

    // Update the inventory displayed on the marketplace
    let plantInventoryElement = document.getElementById(`${plant}Inventory`);
    plantInventoryElement.innerHTML = inventory[plant] + "";

    // Update the inventory displayed in the game
    let inventoryElement = document.getElementById("inventory");
    inventoryElement.innerHTML = inventory[plant] + "";
}


