class item {

    constructor(name, quantity) {
        this.name = name;
        this.quantity = quantity;
    }

    show() {
        return this.name + " : " + this.quantity;
    }
}


class tool {

    constructor(item, durability) {
        this.item = item;
        this.durability = durability;
    }

}

let plants = [];
let seeds = [];
let tools = [];

plants.push(new item("beets", 0));
plants.push(new item("cabbage", 0));
plants.push(new item("carrot", 0));
plants.push(new item("corn", 0));
plants.push(new item("cucumber", 0));
plants.push(new item("eggplant", 0));
plants.push(new item("onion", 0));
plants.push(new item("peas", 0));
plants.push(new item("pepper", 0));
plants.push(new item("potato", 0));
plants.push(new item("pumpkin", 0));
plants.push(new item("radish", 0));
plants.push(new item("salad", 0));
plants.push(new item("spinach", 0));
plants.push(new item("tomato", 0));
plants.push(new item("watermelon", 0));
plants.push(new item("wheat", 0));

seeds.push(new item("beets", 0));
seeds.push(new item("cabbage", 0));
seeds.push(new item("carrot", 15));
seeds.push(new item("corn", 0));
seeds.push(new item("cucumber", 0));
seeds.push(new item("eggplant", 0));
seeds.push(new item("onion", 0));
seeds.push(new item("peas", 0));
seeds.push(new item("pepper", 0));
seeds.push(new item("potato", 0));
seeds.push(new item("pumpkin", 0));
seeds.push(new item("radish", 0));
seeds.push(new item("salad", 0));
seeds.push(new item("spinach", 0));
seeds.push(new item("tomato", 0));
seeds.push(new item("watermelon", 0));
seeds.push(new item("wheat", 0));

tools.push(new tool(new item("hache", 0), 78));

console.log("dura:", tools[0].durability);
console.log("object:", tools[0].item.show());

for (let i = 0; i < plants.length; i++) {
    console.log(plants[i].show());
}

for (let i = 0; i < seeds.length; i++) {
    console.log(seeds[i].show());
}

// object = class
// attribute => variable
// method => function