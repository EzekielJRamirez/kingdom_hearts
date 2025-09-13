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
}

// Populate dropdown dynamically
function populateDropdown(dropdownId, data) {
    const dropdown = document.getElementById(dropdownId);
    dropdown.innerHTML = ""; // clear old options

    Object.keys(data).forEach(item => {
        const option = document.createElement("option");
        option.value = item;   // match exactly with object key
        option.textContent = item;
        dropdown.appendChild(option);
    });
}

// Update totals when a keyblade is selected
function updateTotals() {
    const dropdown = document.getElementById("keyblade");
    const selectedItem = dropdown.value;
    const stats = keyblades_kh1[selectedItem];

    // Update each field
    document.getElementById("strTotal").textContent = "Strength: " + stats.Attack;
    document.getElementById("magicTotal").textContent = "Magic: " + stats.Magic;
    // You can add Size/Block if you want
}

// Run on page load
window.onload = function() {
    populateDropdown("keyblade", keyblades_kh1);
    document.getElementById("keyblade").addEventListener("change", updateTotals);
}

document.getElementById("armor1dropID").addEventListener("change", updateTotals);


// gap
const kb_kh2 = {
    "Kingdom Key" : {Attack: 1, Magic:0, Size: 0},
    "Kingdom Key" : {Attack: 1, Magic:0, Size: 0}
}

const kb_kh3 = {
    "Kingdom Key" : {Attack: 1, Magic:0, Size: 0},
    "Kingdom Key" : {Attack: 1, Magic:0, Size: 0}
}



// next is armor for the 3 games