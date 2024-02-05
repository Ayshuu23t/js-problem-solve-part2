function woodQuantity(chair, table, bed){
    const perChairWood = 5;
    const perTableWood = 9;
    const perBedWood = 4;

    const allChairWood = chair * perChairWood;
    const allTableWood = table * perTableWood;
    const alBedWood = bed * perBedWood;

    const totalWood = allChairWood  + allChairWood + allTableWood;
    return totalWood;
}

const quantity = woodQuantity(6, 1, 2);
console.log(quantity);