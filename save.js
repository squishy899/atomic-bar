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

function randomEvent(){

    let roll = Math.random();

    if(roll < 0.33){

        scrap += 50;

        logEvent(
            "📦 Supply cache discovered! +50 Scrap"
        );
    }

    else if(roll < 0.66){

        food += 25;

        logEvent(
            "🚚 Survivors shared food. +25 Food"
        );
    }

    else{

        scrap = Math.max(0, scrap - 25);

        logEvent(
            "☠ Raider attack! -25 Scrap"
        );
    }
}
loadGame();

setInterval(saveGame,5000);

window.onbeforeunload = saveGame;