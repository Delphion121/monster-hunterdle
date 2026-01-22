const fs = require('fs');

fs.readFile('monsters.json', 'utf8', (err, data) => {
    if (err) {
        console.error("Could not read the file:", err);
        return;
    }

    try {
        const monsters = JSON.parse(data);

        const updatedMonsters = monsters.map(monster => {
            if (!Array.isArray(monster.Element)) {
                monster.Element = [monster.Element];
            }
            return monster;
        });

        fs.writeFile('monsters.json', JSON.stringify(updatedMonsters, null, 2), (err) => {
            if (err) {
                console.error("Could not write to the file:", err);
                return;
            }
            console.log("Successfully updated monsters.json");
        });
    } catch (err) {
        console.error("Error parsing JSON data:", err);
    }
});
