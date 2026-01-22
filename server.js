// Import required modules
const express = require('express');
const fs = require('fs');
const cron = require('node-cron');
const cors = require('cors');

// Create Express app
const app = express();
const port = 3000; // Set your desired port
app.use(cors());

// Read monster data from JSON file
const monstersData = JSON.parse(fs.readFileSync('monsters.json'));
const armorMonsterNames = JSON.parse(fs.readFileSync('monsterArmor.json'));


// Function to select a random monster
function selectRandomMonster(monsters) {
    const randomIndex = Math.floor(Math.random() * monsters.length);
    return monsters[randomIndex];
}

function selectRandomArmorMonster() {
    const randomName = selectRandomMonster(armorMonsterNames);
    return monstersData.find(monster => monster.Name === randomName);
}

let currentMonster = selectRandomMonster(monstersData); // Initialize with a random monster
let currentArmorMonster = selectRandomArmorMonster();

// Endpoint to get the current monster
app.get('/currentMonster', (req, res) => {
    res.json(currentMonster);
});

app.get('/currentArmorMonster', (req, res) => {
    res.json(currentArmorMonster);
});

// Schedule daily monster selection at 00:00 UTC - '0 0 * * *'
cron.schedule('0 0 * * *', () => {
    currentMonster = selectRandomMonster(monstersData);
    // currentArmorMonster = selectRandomArmorMonster();
    console.log('New monster selected:', currentMonster.Name);
    // console.log('Armor Monster:', currentArmorMonster.Name);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
