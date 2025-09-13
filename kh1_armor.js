// I want keyblades, staves, shields, armor for first game in one file.
// each game should get its own file to keep organized but I will handle that in next step


// in kindgom hearts there is a size stat that does nothing. there is also a shield/parry stat that tells the weapon how effective it is to block certain attacks.
const keyblades_kh1 = {
    "Kingdom Key" : {Attack: 3, Magic:0, Size: 0, Block: 1},
    "Jungle King" : {Attack: 5, Magic:0, Size: 0, Block: 1},
    "Three Wishes" : {Attack: 6, Magic:0, Size: 0, Block: 1},
    "Crabclaw" : {Attack: 6, Magic:1, Size: 0, Block: 1},
    "Pumpkinhead" : {Attack: 7, Magic:0, Size: 0, Block: 1},
    "Fairy Harp" : {Attack: 8, Magic:1, Size: 0, Block: 1},
    "Wishing Star" : {Attack: 5, Magic:0, Size: 0, Block: 1},
    "Spellbinder" : {Attack: 4, Magic:2, Size: 0, Block: 1},
    "Metal Chocobo" : {Attack: 9, Magic:-1, Size: 0, Block: 1},
    "Olympia" : {Attack: 10, Magic:0, Size: 0, Block: 1}
};

document.getElementById("armor1dropID").addEventListener("change", updateTotals);


// gap
const kb_kh2 = {
    "Kingdom Key" : {Attack: 1, Magic:0, Size: 0},
    "Kingdom Key" : {Attack: 1, Magic:0, Size: 0}
};

const kb_kh3 = {
    "Kingdom Key" : {Attack: 1, Magic:0, Size: 0},
    "Kingdom Key" : {Attack: 1, Magic:0, Size: 0}
};



// next is armor for the 3 games