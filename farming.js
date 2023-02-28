// Initialize variables
let gold = 0;
let plots = 9;
let plants = [];
let harvestAmount = [];
let profit = [];
let upgrade1Cost = 100;
let upgrade2Cost = 500;
let upgrade3Cost = 1000;

// Initialize plants and harvest amounts
for (let i = 0; i < plots; i++) {
    plants[i] = 0;
    harvestAmount[i] = 0;
}

// Initialize profits
profit[0] = 1;
profit[1] = 2;
profit[2] = 5;
profit[3] = 10;

// Check if there is saved game data
if (localStorage.getItem("savedGame")) {
    let saveData = JSON.parse(localStorage.getItem("savedGame"));
    gold = saveData.gold;
    plots = saveData.plots;
    plants = saveData.plants;
    harvestAmount = saveData.harvestAmount;
    profit = saveData.profit;
    upgrade1Cost = saveData.upgrade1Cost;
    upgrade2Cost = saveData.upgrade2Cost;
    upgrade3Cost = saveData.upgrade3Cost;
}

// Update the display
updateDisplay();

// Update the timer
for (let i = 0; i < plots; i++) {
    let timeLeft = getTimeLeft(i);
    if (timeLeft > 0) {
        setTimeout(updateTimer, 1000);
    }
}

// Functions
function updateDisplay() {
    // Update gold
    document.getElementById("gold").innerHTML = gold;

    // Update plots
    // document.getElementById("plots").innerHTML = plots;

    // Update plants
    for (let i = 0; i < plots; i++) {
        let plotDiv = document.getElementById("plot" + i);
        if (plants[i] === 0) {
            plotDiv.style.backgroundColor = "brown";
            plotDiv.innerHTML = "Plot";
        } else {
            plotDiv.style.backgroundColor = "green";
            plotDiv.innerHTML = "Growing";
        }
    }

    // Update upgrade costs
    document.getElementById("upgrade1Cost").innerHTML = upgrade1Cost;
    document.getElementById("upgrade2Cost").innerHTML = upgrade2Cost;
    document.getElementById("upgrade3Cost").innerHTML = upgrade3Cost;

    // Update inventory
    updateInventory();

    // Update upgrade buttons
    updateUpgradeButtons();
}

function updateTimer() {
    for (let i = 0; i < plots; i++) {
        let timeLeft = getTimeLeft(i);
        let plotTimer = document.getElementById("timer" + i);
        let harvestButton = document.getElementById("harvest" + i);
        let plotDiv = document.getElementById("plot" + i);

        if (timeLeft <= 0) {
            harvestAmount[i] = getHarvestAmount(i);
            plotTimer.style.display = "none";
            harvestButton.style.display = "block";
            plotDiv.style.backgroundColor = "green";
            plotDiv.innerHTML = "Harvest";
        } else {
            plotTimer.innerHTML = timeLeft + "s";
        }
    }

    setTimeout(updateTimer, 1000);
}

function getTimeLeft(plot) {
    let timeLeft = 0;
    let now = new Date().getTime();
    let endTime = localStorage.getItem("plot" + plot);

    if (endTime !== null) {
        timeLeft = Math.floor((parseInt(endTime) - now) / 1000);
        if (timeLeft <= 0) {
            localStorage.removeItem("plot" + plot);
        }
    }

    return timeLeft;
}
function getHarvestAmount(plot) {
    let plant = plants[plot];
    let amount = 0;

    if (plant !== 0) {
        amount = Math.floor(Math.random() * 4) + 1;
    }

    return amount;
}

function plantSeed(plot, seed) {
    if (plants[plot] !== 0) {
        alert("This plot is already being used!");
        return;
    }

    if (seed === 0) {
        alert("You need to select a seed first!");
        return;
    }

    if (gold < seed) {
        alert("You don't have enough gold to buy this seed!");
        return;
    }

    gold -= seed;
    document.getElementById("gold").innerHTML = gold;

    plants[plot] = seed;
    localStorage.setItem("plants", JSON.stringify(plants));

    let time = new Date().getTime() + 30000;
    localStorage.setItem("plot" + plot, time);

    let plotTimer = document.getElementById("timer" + plot);
    plotTimer.style.display = "block";

    setTimeout(updateTimer, 1000);

    updateDisplay();
}

function upgrade(upgrade) {
    let upgradeCost = 0;
    let upgradeText = "";

    switch (upgrade) {
        case 1:
            upgradeCost = upgrade1Cost;
            upgradeText = "You have upgraded your watering can!";
            upgrade1Cost *= 2;
            break;
        case 2:
            upgradeCost = upgrade2Cost;
            upgradeText = "You have upgraded your hoe!";
            upgrade2Cost *= 2;
            break;
        case 3:
            upgradeCost = upgrade3Cost;
            upgradeText = "You have upgraded your farm!";
            upgrade3Cost *= 2;
            plots += 3;
            plants.length = plots;
            harvestAmount.length = plots;
            for (let i = plots - 3; i < plots; i++) {
                plants[i] = 0;
                harvestAmount[i] = 0;
            }
            break;
    }

    if (gold < upgradeCost) {
        alert("You don't have enough gold to buy this upgrade!");
        return;
    }

    gold -= upgradeCost;
    document.getElementById("gold").innerHTML = gold;

    alert(upgradeText);
    updateDisplay();
}

function updateInventory() {
    let inventory = JSON.parse(localStorage.getItem("inventory"));
    let inventoryList = document.getElementById("inventoryList");
    inventoryList.innerHTML = "";

    if (inventory === null || inventory.length === 0) {
        inventoryList.innerHTML = "<li>You don't have any items in your inventory!</li>";
        return;
    }

    for (let i = 0; i < inventory.length; i++) {
        let item = inventory[i];
        let li = document.createElement("li");
        let button = document.createElement("button");
        button.setAttribute("onclick", item.button);
        button.innerHTML = "Use";
        li.innerHTML = "<b>" + item.name + "</b> - " + item.description + " ";
        li.appendChild(button);
        inventoryList.appendChild(li);
    }
}

function showMarketplace() {
    document.getElementById("marketplace-container").style.display = "block";
    document.getElementById("inventory-container").style.display = "none";
}

function showInventory() {
    document.getElementById("marketplace-container").style.display = "none";
    document.getElementById("inventory-container").style.display = "block";
}

function buyItem(item) {
    let itemCost = 0;
    let itemName = "";
    let itemDesc = "";
    let itemButton = "";

    switch (item) {
        case 1:
            itemCost =
                function updateUpgradeButtons() {
                    let upgradeButton1 = document.getElementById("upgrade1");
                    let upgradeButton2 = document.getElementById("upgrade2");
                    let upgradeButton3 = document.getElementById("upgrade3");
                }
    }
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

