let btnScenery = document.getElementById('btnScenery');
let btbNearby = document.getElementById('btnNearby');
let btnTrekking= document.getElementById('btnTrekking');

let SceneryBox = document.getElementById('scenery');
let NearbyBox = document.getElementById('nearby');
let TrekkingBox = document.getElementById('trekking');

btnScenery.addEventListener('click',()=>{
    SceneryBox.style.display ='block';
    TrekkingBox.style.display='none';
    NearbyBox.style.display='none';
    btnScenery.style.background="cyan"
    btnTrekking.style.background="white"
    
    btnNearby.style.background="white";
});

btnNearby.addEventListener('click',()=>{
    SceneryBox.style.display ='none';
    TrekkingBox.style.display='none';
    NearbyBox.style.display='block';
    btnScenery.style.background="white";
    btnTrekking.style.background="white";
    btnNearby.style.background="cyan";
});

btnTrekking.addEventListener('click',()=>{
    SceneryBox.style.display ='none';
    TrekkingBox.style.display='block';
    NearbyBox.style.display='none';
    btnScenery.style.background="white";
    btnTrekking.style.background="cyan";
    btnNearby.style.background="white";
});