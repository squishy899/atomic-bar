function saveGame(){

    localStorage.setItem(
        "wastelandSave",
        JSON.stringify({
            scrap,
            survivors,

            power,
            food,
            technology,

            scrapHeaps,
            scavengerTeams,

            generators,
            gardens,
            labs,

            heapCost,
            teamCost,

            generatorCost,
            gardenCost,
            labCost,

            lastSave: Date.now()
        })

    );
}

function loadGame(){

    let save =
        JSON.parse(
            localStorage.getItem("wastelandSave")
        );

    if(!save) return;

    scrap = save.scrap;
    survivors = save.survivors;

    power = save.power || 0;
    food = save.food || 50;
    technology = save.technology || 0;

    scrapHeaps = save.scrapHeaps;
    scavengerTeams = save.scavengerTeams;

    generators = save.generators || 0;
    gardens = save.gardens || 0;
    labs = save.labs || 0;

    heapCost = save.heapCost;
    teamCost = save.teamCost;

    generatorCost = save.generatorCost || 100;
    gardenCost = save.gardenCost || 75;
    labCost = save.labCost || 250;

    let secondsAway =
        (Date.now() - save.lastSave)/1000;

    scrap += getSPS() * secondsAway;
}

loadGame();

setInterval(saveGame,5000);

window.onbeforeunload = saveGame;