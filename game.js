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
}

function getPPS(){
    return generators * 2; 
    }
    
function getFPS(){
        return garden * 1.5}
        }
        
function getTPS(){
    return labs * .5}
    }
}
function gameLoop(){

    scrap += getSPS() * 0.1;
    power += getPPS() * 0.1;
    food += getFPS() * 0.1;
    technology += getTPS() * 0.1;
    
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
        
    document.getElementById("power").innerText =
    Math.floor(power);

    document.getElementById("food").innerText =
    Math.floor(food);

    document.getElementById("technology").innerText =
    Math.floor(technology);

    document.getElementById("generators").innerText =
    generators;

    document.getElementById("gardens").innerText =
    gardens;

    document.getElementById("labs").innerText =
    labs;

    document.getElementById("generatorCost").innerText =
    generatorCost;

    document.getElementById("gardenCost").innerText =
    gardenCost;

    document.getElementById("labCost").innerText =
    labCost;
}
function logEvent(text){

    let log =
        document.getElementById("eventLog");

    let entry =
        document.createElement("div");

    entry.textContent = text;

    log.prepend(entry);
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

setInterval(gameLoop,100);
setInterval(randomEvent,60000);
