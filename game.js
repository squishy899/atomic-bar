let scrap = 0;
let survivors = 1;

let scrapHeaps = 0;
let scavengerTeams = 0;

let heapCost = 10;
let teamCost = 50;

let power = 0;
let food = 50;
let technology = 0;

let generators = 0;
let gardens = 0;
let labs = 0;

let generatorCost = 100;
let gardenCost = 75;
let labCost = 250;

function manualScavenge() {
    scrap += 1;
}

function buyHeap() {

    if(scrap >= heapCost){

        scrap -= heapCost;

        scrapHeaps++;

        heapCost = Math.floor(heapCost * 1.15);
    }
}

function buyTeam() {

    if(scrap >= teamCost){

        scrap -= teamCost;

        scavengerTeams++;

        teamCost = Math.floor(teamCost * 1.20);
    }
}
function buyGenerator(){

    if(scrap >= generatorCost){

        scrap -= generatorCost;

        generators++;

        generatorCost =
            Math.floor(generatorCost * 1.20);
    }
}
function buyGarden(){

    if(scrap >= gardenCost){

        scrap -= gardenCost;

        gardens++;

        gardenCost =
            Math.floor(gardenCost * 1.15);
    }
}
function buyLab(){

    if(scrap >= labCost){

        scrap -= labCost;

        labs++;

        labCost =
            Math.floor(labCost * 1.25);
    }
}
function getSPS(){

    return (
        scrapHeaps * 1 +
        scavengerTeams * 5
    );
}

function gameLoop(){

    scrap += getSPS()/10;
let power = 0;
let food = 50;
let technology = 0;

let generators = 0;
let gardens = 0;
let labs = 0;
    updateUI();
}

function updateUI(){

    document.getElementById("scrap").innerText =
        Math.floor(scrap);

    document.getElementById("survivors").innerText =
        survivors;

    document.getElementById("sps").innerText =
        getSPS().toFixed(1);

    document.getElementById("heaps").innerText =
        scrapHeaps;

    document.getElementById("teams").innerText =
        scavengerTeams;

    document.getElementById("heapCost").innerText =
        heapCost;

    document.getElementById("teamCost").innerText =
        teamCost;
}

setInterval(gameLoop,100);