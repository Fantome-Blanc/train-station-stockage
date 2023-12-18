function addItem(){

    let name = "mon train",
        quantite = 10;
        type = "Vapeur";
        type_bonus = "Fret";
        fret_bonus = 500;
        set = true;
        name_set = "Mon train à vapeur";
        bonus_set = 30;

    let grid = document.querySelector('.interface-grille');

    let newItem = document.createElement('div');
    newItem.classList.add('interface-grille-item');
    
    let nameItem = document.createElement('span');
    nameItem.classList.add('interface-grille-item-name');
    nameItem.textContent = name;
    newItem.appendChild(nameItem);

    let pictureBoxItem = document.createElement('div');
    pictureBoxItem.classList.add('interface-grille-item-img-box');
    newItem.appendChild(pictureBoxItem);

    let quantiteItem = document.createElement('span');
    quantiteItem.classList.add('interface-grille-item-img-box-count');
    quantiteItem.textContent = quantite;
    pictureBoxItem.appendChild(quantiteItem);

    let typeItem = document.createElement('span');
    typeItem.classList.add('interface-grille-item-img-box-type');
    typeItem.textContent = type;
    pictureBoxItem.appendChild(typeItem);

    let imageItem = document.createElement('img');
    imageItem.classList.add('interface-grille-item-img');
    imageItem.src = "./assets/images/" + name + ".png";
    pictureBoxItem.appendChild(imageItem);
    
    if(fret_bonus !== null){
        let bonusFretItem = document.createElement('div');
        bonusFretItem.classList.add('interface-grille-item-info-fret')
        newItem.appendChild(bonusFretItem);

        let typeBonus = document.createElement('span')
        typeBonus.textContent = "Fret :"

        let countBonus = document.createElement('span')
        countBonus.textContent = "+" + fret_bonus + "%";

        bonusFretItem.appendChild(typeBonus);
        bonusFretItem.appendChild(countBonus);
    }

    if(set == true){
        let setItem = document.createElement('div');
        setItem.classList.add('interface-grille-item-info-set')
        newItem.appendChild(setItem);

        let bonusSetItem = document.createElement('span');
        bonusSetItem.textContent = name_set + " (+" + bonus_set + "%)";
        setItem.appendChild(bonusSetItem);
    }


    grid.appendChild(newItem)
}












const data = require('./data.json');

function addItemRemove() {
    const itemsToRemove = document.querySelectorAll('.interface-grille-item');
    itemsToRemove.forEach(item => item.remove());

    const itemsBois = data['wagons cargo'].bois;

    itemsBois.forEach(item => {
        console.log("Nom =", item.name);
    });
}