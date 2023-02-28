import { seeds } from './items.js';
import { plants } from './storage.js';

let gold = 0;
let seed = 0;
let growingSeed = 0; // 0 for no seed growing, 1-8 for seed being grown
let growTime = [0, 120, 300, 480, 600, 900, 900, 300, 180]; // grow time in seconds
let seedCost = [0, 12, 50, 75, 350, 400, 5, 1]; // seed cost in gold
let profit = [0, 3, 0.6, 0.6, 0.6, 0.6, 0.85, 0.6]; // profit multiplier
let timeLeft = 0;
let harvestAmount = [0, 1, 1, 1, 1, 1, 1, 10]; // amount of produce that can be harvested

let images = [
    [], // empty
    [], // beet
    [], // cabbage
    [], // carrot
    [], // corn
    [], // cucumber
    [], // eggplant
    [], // onion
    []  // potato
];

let imageIndex = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function buySeed(plant) {
    let cost = seedCost[plant];

    if (gold < cost) {
        alert("You don't have enough gold to buy this seed!");
        return;
    }

    gold -= cost;
    document.getElementById("gold").innerHTML = gold;
    seed++;

    document.getElementById("seed").innerHTML = seed;
}

function plantSeed(plot) {
    if (growingSeed !== 0) {
        return;
    }

    if (seed <= 0) {
        alert("You don't have any seeds!");
        return;
    }

    seed--;
    document.getElementById("seed").innerHTML = seed;

    growingSeed = plot;
    timeLeft = growTime[growingSeed];
    let plotTimer = document.getElementById("plotTimer" + growingSeed);
    let harvestButton = document.getElementById("harvestButton" + growingSeed);
    let plotDiv = document.getElementById("plot" + growingSeed);
    plotTimer.innerHTML = timeLeft + "s";
    plotTimer.style.display = "block";
    harvestButton.style.display = "none";
    plotDiv.style.backgroundColor = "brown";
    plotDiv.innerHTML = "Plot";

    updateTimer();
}

function updateTimer() {
    if (growingSeed === 0) {
        return;
    }

    let plotTimer = document.getElementById("plotTimer" + growingSeed);
    let harvestButton = document.getElementById("harvestButton" + growingSeed);
    let plotDiv = document.getElementById("plot" + growingSeed);

    timeLeft--;

    if (timeLeft <= 0) {
        switch (growingSeed) {
            case 1:
                harvest(1);
                break;
            case 2:
                harvest(2);
                break;
            case 3:
                harvest(3);
                break;
            case 4:
                harvest(4);
                break;
            case 5:
                harvest(5);
                break;
            case 6:
                harvest(6);
                break;
            case 7:
                harvest(7);
                break;
            case 8:
                harvest(8);
                break;
        }

        growingSeed = 0;
        plotTimer.style.display

function buyUpgrade(upgrade) {
    let upgradeCost = 0;
    let upgradeName = "";
    let upgradeDesc = "";
    let upgradeButton = "";
    switch (upgrade) {
        case 1:
            upgradeCost = 100;
            upgradeName = "Better Seeds";
            upgradeDesc = "Seeds now yield 50% more produce.";
            upgradeButton = "buyUpgrade(1)";
            break;
        case 2:
            upgradeCost = 500;
            upgradeName = "Fertilizer";
            upgradeDesc = "Crops now grow 25% faster.";
            upgradeButton = "buyUpgrade(2)";
            break;
        case 3:
            upgradeCost = 1000;
            upgradeName = "Irrigation";
            upgradeDesc = "Crops no longer need to be watered.";
            upgradeButton = "buyUpgrade(3)";
            break;
    }

    if (gold < upgradeCost) {
        alert("You don't have enough gold to buy this upgrade!");
        return;
    }

    gold -= upgradeCost;
    document.getElementById("gold").innerHTML = gold;

    switch (upgrade) {
        case 1:
            profit[1] = 4.5;
            profit[2] = 0.9;
            profit[3] = 0.9;
            profit[4] = 0.9;
            profit[5] = 0.9;
            profit[6] = 1.275;
            profit[7] = 0.9;
            profit[8] = 0.9;
            document.getElementById("seedCost1").innerHTML = seedCost[1] * 2;
            document.getElementById("seedCost2").innerHTML = seedCost[2] * 2;
            document.getElementById("seedCost3").innerHTML = seedCost[3] * 2;
            document.getElementById("seedCost4").innerHTML = seedCost[4] * 2;
            document.getElementById("seedCost5").innerHTML = seedCost[5] * 2;
            document.getElementById("seedCost6").innerHTML = seedCost[6] * 2;
            document.getElementById("seedCost7").innerHTML = seedCost[7] * 2;
            document.getElementById("seedCost8").innerHTML = seedCost[8] * 2;
            document.getElementById("upgrade1").style.display = "none";
            break;
        case 2:
            for (let i = 1; i <= 8; i++) {
                growTime[i] = Math.round(growTime[i] * 0.75);
            }
            document.getElementById("upgrade2").style.display = "none";
            break;
        case 3:
            for (let i = 1; i <= 8; i++) {
                let plotDiv = document.getElementById("plot" + i);
                plotDiv.style.backgroundColor = "green";
            }
            document.getElementById("upgrade3").style.display = "none";
            for (let i = 1; i <= 8; i++) {
                let plotTimer = document.getElementById("plotTimer" + i);
                let harvestButton = document.getElementById("harvestButton" + i);
                let plotDiv = document.getElementById("plot" + i);

                if (plotTimer.style.display !== "none") {
                    plotTimer.style.display = "none";
                    harvestButton.style.display = "block";
                    plotDiv.style.backgroundColor = "green";
                    plotDiv.innerHTML = "Harvest";
                }
            }
            break;
    }

    function updateUpgradeButtons() {
let upgradeButton1 = document.getElementById("upgrade1");
let upgradeButton2 = document.getElementById("upgrade2");
let upgradeButton3 = document.getElementById("upgrade3");
        if (gold >= 100 && upgradeButton1.style.display === "none") {
    upgradeButton1.style.display = "block";
}

if (gold >= 500 && upgradeButton2.style.display === "none") {
    upgradeButton2.style.display = "block";
}

if (gold >= 1000 && upgradeButton3.style.display === "none") {
    upgradeButton3.style.display = "block";
}
        }

function showMarketplace() {
document.getElementById("marketplace").style.display = "block";
document.getElementById("inventory").style.display = "none";
}

function showInventory() {
document.getElementById("marketplace").style.display = "none";
document.getElementById("inventory").style.display = "block";
}

function buyItem(item) {
let itemCost = 0;
let itemName = "";
let itemDesc = "";
let itemButton = "";
switch (item) {
case 1:
itemCost = 10;
itemName = "Watering Can";
itemDesc = "This item allows you to water your plants to speed up growth.";
itemButton = "useItem(1)";
break;
case 2:
itemCost = 50;
itemName = "Hoe";
itemDesc = "This item allows you to till unused plots for planting.";
itemButton = "useItem(2)";
break;
}
if (gold < itemCost) {
    alert("You don't have enough gold to buy this item!");
    return;
}

gold -= itemCost;
document.getElementById("gold").innerHTML = gold;

let newItem = {name: itemName, description: itemDesc, button: itemButton};
let inventory = JSON.parse(localStorage.getItem("inventory"));

if (inventory === null) {
    inventory = [];
}

inventory.push(newItem);
localStorage.setItem("inventory", JSON.stringify(inventory));

updateInventory();
}

function useItem(item) {
let inventory = JSON.parse(localStorage.getItem("inventory"));
let itemName = "";
switch (item) {
case 1:
itemName = "Watering Can";
break;
case 2:
itemName = "Hoe";
break;
}
for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === itemName) {
        inventory.splice(i, 1);
        localStorage.setItem("inventory", JSON.stringify(inventory));
        break;
    }
}

updateInventory();
            growingSeed = 0;
        plotTimer.style.display = "none";
        harvestButton.style.display = "block";
        plotDiv.style.backgroundColor = "green";
        plotDiv.innerHTML = "Harvest";
    } else {
        plotTimer.innerHTML = timeLeft + "s";
    }

    setTimeout(updateTimer, 1000);
}

function harvest(plot) {
    let amount = harvestAmount[plot];
    let plant = plants[plot];

    plants[plot] = 0;
    let plotDiv = document.getElementById("plot" + plot);
    plotDiv.style.backgroundColor = "brown";
    plotDiv.innerHTML = "Plot";

    let profitAmount = amount * plant * profit[plant];
    gold += profitAmount;
    document.getElementById("gold").innerHTML = gold;

    let message = "You harvested " + amount + " " + plants[plant] + " for " + profitAmount + " gold.";
    alert(message);
}

function updateUpgradeButtons() {
    let upgradeButton1 = document.getElementById("upgrade1");
    let upgradeButton2 = document.getElementById("upgrade2");
    let upgradeButton3 = document.getElementById("upgrade3");

    if (gold >= 100 && upgradeButton1.style.display === "none") {
        upgradeButton1.style.display = "block";
    }

    if (gold >= 500 && upgradeButton2.style.display === "none") {
        upgradeButton2.style.display = "block";
    }

    if (gold >= 1000 && upgradeButton3.style.display === "none") {
        upgradeButton3.style.display = "block";
    }
}

function showMarketplace() {
    document.getElementById("marketplace").style.display = "block";
    document.getElementById("inventory").style.display = "none";
}

function showInventory() {
    document.getElementById("marketplace").style.display = "none";
    document.getElementById("inventory").style.display = "block";
}

function buyItem(item) {
    let itemCost = 0;
    let itemName = "";
    let itemDesc = "";
    let itemButton = "";

    switch (item) {
        case 1:
            itemCost = 10;
            itemName = "Watering Can";
            itemDesc = "This item allows you to water your plants to speed up growth.";
            itemButton = "useItem(1)";
            break;
        case 2:
            itemCost = 50;
            itemName = "Hoe";
            itemDesc = "This item allows you to till unused plots for planting.";
            itemButton = "useItem(2)";
            break;
    }

    if (gold < itemCost) {
        alert("You don't have enough gold to buy this item!");
        return;
    }

    gold -= itemCost;
    document.getElementById("gold").innerHTML = gold;

    let newItem = { name: itemName, description: itemDesc, button: itemButton };
    let inventory = JSON.parse(localStorage.getItem("inventory"));

    if (inventory === null) {
        inventory = [];
    }

    inventory.push(newItem);
    localStorage.setItem("inventory", JSON.stringify(inventory));

    updateInventory();
}

function useItem(item) {
    let inventory = JSON.parse(localStorage.getItem("inventory"));
    let itemName = "";

    switch (item) {
        case 1:
            itemName = "Watering Can";
            break;
        case 2:
            itemName = "Hoe";
            break;
    }

    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].name === itemName) {
            inventory.splice(i, 1);
            localStorage.setItem("inventory", JSON.stringify(inventory));
            break;
        }
    }

    updateInventory();
}

            
           function updateUpgradeButtons() {
    let upgradeButton1 = document.getElementById("upgrade1");
    let upgradeButton2 = document.getElementById("upgrade2");
    let upgradeButton3 = document.getElementById("upgrade3");

    if (gold >= 100 && upgradeButton1.style.display === "none") {
        upgradeButton1.style.display = "block";
    }

    if (gold >= 500 && upgradeButton2.style.display === "none") {
        upgradeButton2.style.display = "block";
    }

    if (gold >= 1000 && upgradeButton3.style.display === "none") {
        upgradeButton3.style.display = "block";
    }
}

function showMarketplace() {
    document.getElementById("marketplace").style.display = "block";
    document.getElementById("inventory").style.display = "none";
}

function showInventory() {
    document.getElementById("marketplace").style.display = "none";
    document.getElementById("inventory").style.display = "block";
}

function buyItem(item) {
    let itemCost = 0;
    let itemName = "";
    let itemDesc = "";
    let itemButton = "";

    switch (item) {
        case 1:
            itemCost = 10;
            itemName = "Watering Can";
            itemDesc = "This item allows you to water your plants to speed up growth.";
            itemButton = "useItem(1)";
            break;
        case 2:
            itemCost = 50;
            itemName = "Hoe";
            itemDesc = "This item allows you to till unused plots for planting.";
            itemButton = "useItem(2)";
            break;
    }

    if (gold < itemCost) {
        alert("You don't have enough gold to buy this item!");
        return;
    }

    gold -= itemCost;
    document.getElementById("gold").innerHTML = gold;

    let newItem = { name: itemName, description: itemDesc, button: itemButton };
    let inventory = JSON.parse(localStorage.getItem("inventory"));

    if (inventory === null) {
        inventory = [];
    }

    inventory.push(newItem);
    localStorage.setItem("inventory", JSON.stringify(inventory));

    updateInventory();
}

function useItem(item) {
    let inventory = JSON.parse(localStorage.getItem("inventory"));
    let itemName = "";

    switch (item) {
        case 1:
            itemName = "Watering Can";
            break;
        case 2:
            itemName = "Hoe";
            break;
    }

    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].name === itemName) {
            inventory.splice(i, 1);
            localStorage.setItem("inventory", JSON.stringify(inventory));
            break;
        }
    }

    updateInventory();
}

function updateInventory() {
    let inventory = JSON.parse(localStorage.getItem("inventory"));
    let inventoryDiv = document.getElementById("inventoryItems");

    inventoryDiv.innerHTML = "";

    if (inventory === null || inventory.length === 0) {
        inventoryDiv.innerHTML = "Your inventory is empty.";
        return;
    }

    for (let i = 0; i < inventory.length; i++) {
        let item = document.createElement("div");
        let itemName = document.createElement("h3");
        let itemDesc = document.createElement("p");
        let itemButton = document.createElement("button");

        itemName.innerHTML = inventory[i].name;
        itemDesc.innerHTML = inventory[i].description;
        itemButton.setAttribute("onclick", inventory[i].button);
        itemButton.innerHTML = "Use";

        item.appendChild(itemName);
        item.appendChild(itemDesc);
        item.appendChild(itemButton);

        inventoryDiv.appendChild(item);
    }
}

updateUpgradeButtons();
update

           



