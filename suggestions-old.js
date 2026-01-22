const inputElement = document.querySelector("#suggest-input");
const submitButton = document.querySelector("#submit-button");
const formElement = document.querySelector("#guess-form");
const guessContainer = document.querySelector(".guess-container");

inputElement.addEventListener("input", onInputChange);
formElement.addEventListener("submit", onSubmit);
inputElement.addEventListener("keydown", onKeyDown);

let monsters = [];
let dailyMonster = null;

function findMonsterImage(monsterName) {  /* array with the monster images */
    const folderPath = 'monster-icons';
    const files = [
'Seregios_Icon.webp',
'Shagaru Magala_Icon.webp',
'Shara Ishvalda_Icon.webp',
'Shen Gaoren_Icon.webp',
'Shogun Ceanataur_Icon.webp',
'Shrieking Legiana_Icon.webp',
'Snowbaron Lagombi_Icon.webp',
'Soulseer Mizutsune_Icon.webp',
'Stonefist Hermitaur_Icon.webp',
'Teostra_Icon.webp',
'Tetranadon_Icon.webp',
'Tetsucabra_Icon.webp',
'Thunderlord Zinogre_Icon.webp',
'Tigrex_Icon.webp',
'Tobi-Kadachi_Icon.webp',
'Tzitzi-Ya-Ku_Icon.webp',
'Ukanlos_Icon.webp',
'Uragaan_Icon.webp',
'Vaal Hazak_Icon.webp',
'Valstrax_Icon.webp',
'Velkhana_Icon.webp',
'Velocidrome_Icon.webp',
'Vespoid Queen_Icon.webp',
'Volvidon_Icon.webp',
'White Fatalis_Icon.webp',
'Wind Serpent Ibushi_Icon.webp',
'Zamtrios_Icon.webp',
'Zinogre_Icon.webp',
'Zorah Magdaros_Icon.webp',
'Agnaktor_Icon.webp',
'Ahtal-Ka_Icon.webp',
'Akantor_Icon.webp',
'Aknosom_Icon.webp',
'Alatreon_Icon.webp',
'Almudron_Icon.webp',
'Amatsu_Icon.webp',
'Leshen_Icon.webp',
'Anjanath_Icon.webp',
'Arzuros_Icon.webp',
'Astalos_Icon.webp',
'Banbaro_Icon.webp',
'Barioth_Icon.webp',
'Basarios_Icon.webp',
'Bazelgeuse_Icon.webp',
'Behemoth_Icon.webp',
'Beotodus_Icon.webp',
'Bishaten_Icon.webp',
'Boltreaver Astalos_Icon.webp',
'Brachydios_Icon.webp',
'Bulldrome_Icon.webp',
'Ceadeus_Icon.webp',
'Cephadrome_Icon.webp',
'Chameleos_Icon.webp',
'Chaotic Gore Magala_Icon.webp',
'Congalala_Icon.webp',
'Crimson Fatalis_Icon.webp',
'Crimson Glow Valstrax_Icon.webp',
'Dahren Mohran_Icon.webp',
'Daimyo Hermitaur_Icon.webp',
'Dalamadur_Icon.webp',
'Deadeye Yian Garuga_Icon.webp',
'Deviljho_Icon.webp',
'Diablos_Icon.webp',
'Dire Miralis_Icon.webp',
'Dodogama_Icon.webp',
'Dreadking Rathalos_Icon.webp',
'Drilltusk Tetsucabra_Icon.webp',
'Duramboros_Icon.webp',
'Elderfrost Gammoth_Icon.webp',
'Espinas_Icon.webp',
'Fatalis_Icon.webp',
'Frostfang Barioth_Icon.webp',
'Furious Rajang_Icon.webp',
'Gaismagorm_Icon.webp',
'Gammoth_Icon.webp',
'Garangolm_Icon.webp',
'Gendrome_Icon.webp',
'Gigginox_Icon.webp',
'Glavenus_Icon.webp',
'Gogmazios_Icon.webp',
'Gore Magala_Icon.webp',
'Goss Harag_Icon.webp',
'Gravios_Icon.webp',
'Great Baggi_Icon.webp',
'Great Girros_Icon.webp',
'Great Izuchi_Icon.webp',
'Great Jaggi_Icon.webp',
'Great Jagras_Icon.webp',
'Great Maccao_Icon.webp',
'Great Wroggi_Icon.webp',
'Grimclaw Tigrex_Icon.webp',
'Gypceros_Icon.webp',
'Hellblade Glavenus_Icon.webp',
'Jhen Mohran_Icon.webp',
'Jyuratodus_Icon.webp',
'Khezu_Icon.webp',
'Kirin_Icon.webp',
'Kulu-Ya-Ku_Icon.webp',
'Kulve Taroth_Icon.webp',
'Kushala Daora_Icon.webp',
'Lagiacrus_Icon.webp',
'Lagombi_Icon.webp',
'Lao-Shan Lung_Icon.webp',
'Lavasioth_Icon.webp',
'Legiana_Icon.webp',
'Lunagaron_Icon.webp',
'Lunastra_Icon.webp',
'Magnamalo_Icon.webp',
'Malfestio_Icon.webp',
'Malzeno_Icon.webp',
'Mizutsune_Icon.webp',
'Monoblos_Icon.webp',
'Najarala_Icon.webp',
'Nakarkos_Icon.webp',
'Namielle_Icon.webp',
'Nargacuga_Icon.webp',
'Narwa the Allmother_Icon.webp',
'Nergigante_Icon.webp',
'Nerscylla_Icon.webp',
'Nibelsnarf_Icon.webp',
'Nightcloak Malfestio_Icon.webp',
'Odogaron_Icon.webp',
'Paolumu_Icon.webp',
'Plesioth_Icon.webp',
'Pukei-Pukei_Icon.webp',
'Qurupeco_Icon.webp',
'Radobaan_Icon.webp',
'Raging Brachydios_Icon.webp',
'Rajang_Icon.webp',
'Rakna-Kadaki_Icon.webp',
'Rathalos_Icon.webp',
'Rathian_Icon.webp',
'Royal Ludroth_Icon.webp',
'Ruiner Nergigante_Icon.webp',
'Rusted Kushala Daora_Icon.webp',
'Rustrazor Ceanataur_Icon.webp',
'Safijiiva_Icon.webp',
'Scorned Magnamalo_Icon.webp',
'Seething Bazelgeuse_Icon.webp',
'Seltas Queen_Icon.webp',
'Seltas_Icon.webp',
'Savage Deviljho_Icon.webp',
'Iodrome_Icon.webp',
'Bloodbath Diablos_Icon.webp',
'Silverwind Nargacuga_Icon.webp',
'Redhelm Arzuros_Icon.webp',
'Kecha Wacha_Icon.webp',
'Hypnocatrice_Icon.webp',
'Yama Tsukami_Icon.webp',
'Xenojiiva_Icon.webp',
'Crystalbeard Uragaan_Icon.webp',
'Blangonga_Icon.webp',
'Yian Kut Ku_Icon.webp',
'Barroth_Icon.webp',
'Somnacanth_Icon.webp',
'Giadrome_Icon.webp',
'Dreadqueen Rathian_Icon.webp',
'Gobul_Icon.webp'

    ];

    const guessedFileName = `${monsterName}_Icon.webp`;

    if (files.includes(guessedFileName)) {
        return `${folderPath}/${guessedFileName}`;
    }

    return null; // If image not found
}

// get monster data for autocomplete and comparisons
async function getMonsterData() {
    const monsterRes = await fetch("monsters.json", {cache: "no-store"});
    const data = await monsterRes.json();
    monsters = data;

    console.log(monsters.map(monster => monster.Name));
    return monsters
}

// Fetch the daily monster from the server
async function getDailyMonster() {
    const response = await fetch("http://127.0.0.1:3000/currentMonster");
    if (!response.ok) {
        console.error("Failed to fetch the daily monster");
        return;
    }
    dailyMonster = await response.json();
    console.log("Daily Monster:", dailyMonster);

    setDailyMonsterDescription(dailyMonster.Description);
}

function setDailyMonsterDescription(description) {
    const dailyMonsterTextDiv = document.getElementById("daily-monster-text");
    if (dailyMonsterTextDiv) {
        dailyMonsterTextDiv.textContent = description;
    }
    else {
        console.error("Element Id for daily monster text not found");
    }
}



// get daily monster from server and monster data from json file
getMonsterData();
getDailyMonster();

function onInputChange() {
    removeSuggestions();
    const value = inputElement.value.toLowerCase();

    if (value.length === 0) return;

    const filteredNames = monsters
        .map(monster => monster.Name)
        .filter(monsterName => monsterName.toLowerCase().includes(value));

    createSuggestions(filteredNames);
}

function createSuggestions(list) {
    const listElement = document.createElement("ul");
    listElement.className = "suggest-list";
    listElement.id = "suggest-list";

    list.forEach((monster) => {
        const listItem = document.createElement("li");
        const monsterButton = document.createElement("button");
        monsterButton.innerHTML = monster;
        monsterButton.addEventListener("click", () => onSuggestionClick(monster));
        listItem.appendChild(monsterButton);

        listElement.appendChild(listItem);
    });

    document.querySelector("#suggest-wrapper").appendChild(listElement);
}

function removeSuggestions() {
    const listElement = document.querySelector("#suggest-list");
    if (listElement) listElement.remove();
}

function onSubmit(event) {
    event.preventDefault(); // stops page reset

    const userInput = inputElement.value;
    if (!userInput) return;

    const guessedMonster = getMonsterByName(userInput);
    if (!guessedMonster) {
        console.log("Monster not found");
        return;
    }

    compareMonsters(guessedMonster, dailyMonster);

    inputElement.value = ''; // empty input field
    removeSuggestions(); 
    removeMonster(guessedMonster.Name);
}

function onSuggestionClick(monster) {
    inputElement.value = monster;
    onSubmit(new Event('submit'));
}

function onKeyDown(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent default form submission behavior

        const suggestionList = document.querySelector("#suggest-list");
        if (suggestionList && suggestionList.firstChild) {
            const topSuggestion = suggestionList.firstChild.textContent;
            inputElement.value = topSuggestion;
            onSubmit(new Event('submit'));
        }
    }
}

function removeMonster(monsterName) {
    monsters = monsters.filter(monster => monster.Name !== monsterName);
}

function getMonsterByName(name) {
    return monsters.find(monster => monster.Name.toLowerCase() === name.toLowerCase());
}

function compareMonsters(guessed, daily) {
    const individualGuessDiv = document.createElement('div');
    individualGuessDiv.className = 'individual-guess';
    const imageContainer = document.createElement('div');
    imageContainer.className = 'image-container';
    
  

    if (guessed.Name === daily.Name) {

        const inputWrapper = document.querySelector('.input-wrapper');
        const winScreen = document.querySelector('.win-screen');
        const dailyMonsterBox = document.querySelector('.daily-monster-box');

        if (inputWrapper) {
            inputWrapper.style.visibility = 'hidden';
        }
        if (winScreen) {
            winScreen.classList.remove('fade-out')
            winScreen.classList.add('visible');

            setTimeout(function() {
            winScreen.classList.add('fade-out');

            setTimeout(function() {
                winScreen.classList.remove('visible');
                winScreen.classList.remove('fade-out');
                winScreen.style.visibility = 'hidden';
            }, 1000);
        }, 5000);
    }
     if (dailyMonsterBox) {
         setTimeout(function() {
             dailyMonsterBox.style.visibility = 'visible';
         }, 5000);
     } else {
         console.error("Element id not found for monster info")
     }
}
        

    /* Monster Image hopefully */

    const imageFilePath = findMonsterImage(guessed.Name);
    if (imageFilePath) {
        const imgElement = document.createElement('img');
        imgElement.className = 'monster-image';
        imgElement.src = imageFilePath;
        imgElement.alt = guessed.Name;
        imageContainer.appendChild(imgElement);

        const nameOverlay = document.createElement('div');
        nameOverlay.className = 'name-overlay';
        nameOverlay.textContent = guessed.Name;
        imageContainer.appendChild(nameOverlay);
        
    }
    individualGuessDiv.appendChild(imageContainer);

    addComparisonResult(individualGuessDiv, "First Appearance", guessed["First Appearance"], daily["First Appearance"]);
    addComparisonResult(individualGuessDiv, "Element", guessed.Element, daily.Element, true);
    addComparisonResult(individualGuessDiv, "Ailments", guessed.Ailments, daily.Ailments, true);
    addComparisonResult(individualGuessDiv, "Monster Class", guessed["Monster Class"], daily["Monster Class"]);
    addComparisonResult(individualGuessDiv, "Has Subspecies?", guessed["Has Subspecies?"], daily["Has Subspecies?"], false, true);
    addComparisonResult(individualGuessDiv, "Total Appearances", guessed["Total Appearances"], daily["Total Appearances"], false, true);

    const guessHeader = guessContainer.querySelector('.guess-header');
    if (guessHeader) {
        guessContainer.insertBefore(individualGuessDiv, guessHeader.nextSibling);
    } else {
        guessContainer.insertBefore(individualGuessDiv, guessContainer.firstChild);
    }
}

function addComparisonResult(parentDiv, fieldName, guessedValue, dailyValue, isArray = false, isNumeric = false) {
    let divClass = 'wrong-guess';
    let displayValue = guessedValue;

    if (isArray) {
        const guessedArray = Array.isArray(guessedValue) ? guessedValue : [guessedValue];
        const dailyArray = Array.isArray(dailyValue) ? dailyValue : [dailyValue];

        const exactMatch = guessedArray.every(val => dailyArray.includes(val)) && dailyArray.every(val => guessedArray.includes(val));
        const partialMatch = guessedArray.some(val => dailyArray.includes(val)) && !exactMatch;

        if (exactMatch) {
            divClass = 'correct-guess';
        } else if (partialMatch) {
            divClass = 'partial-guess';
        }
        displayValue = guessedArray.join(', ');
    } else if (isNumeric) {
        if (guessedValue === dailyValue) {
            divClass = 'correct-guess';
        } else if (guessedValue < dailyValue) {
            divClass = 'wrong-up';
        } else {
            divClass = 'wrong-down';
        }
    } else {
        if (guessedValue === dailyValue) {
            divClass = 'correct-guess';
        }
    }

    const resultDiv = document.createElement('div');
    resultDiv.className = divClass;

    const guessTextDiv = document.createElement('div');
    guessTextDiv.className = 'guess-text';
    guessTextDiv.textContent = displayValue;

    resultDiv.appendChild(guessTextDiv);

    parentDiv.appendChild(resultDiv);

    return resultDiv;
}


const guessedMonsterName = "Gammoth"; // Example guessed monster name
const imageFilePath = findMonsterImage(guessedMonsterName);

if (imageFilePath) {
    console.log(`Found image for ${guessedMonsterName}: ${imageFilePath}`);
    // test stuff for images
} else {
    console.log(`Image not found for ${guessedMonsterName}`);
}

