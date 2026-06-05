function saveGame(){

    localStorage.setItem(
        "wastelandSave",
        JSON.stringify({
            scrap,
            survivors,
            scrapHeaps,
            scavengerTeams,
            heapCost,
            teamCost,
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

    scrapHeaps = save.scrapHeaps;
    scavengerTeams = save.scavengerTeams;

    heapCost = save.heapCost;
    teamCost = save.teamCost;

    let secondsAway =
        (Date.now() - save.lastSave)/1000;

    scrap += getSPS() * secondsAway;
}

loadGame();

setInterval(saveGame,5000);

window.onbeforeunload = saveGame;