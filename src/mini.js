export function renderDronePage() {
    const app = document.getElementById('app');
    app.innerHTML = '';

    const backButton = document.createElement('button');
    backButton.textContent = 'Retour à la liste des drones';
    backButton.addEventListener('click', event => {
        event.preventDefault();
        window.location.reload();
    });

    const droneDetails = document.createElement('div');

    const droneName = document.createElement('h2');
    droneName.textContent = 'DJI Mini 4 pro';

    const divTitleBackButton = document.createElement('div');
    divTitleBackButton.style.padding = '1rem';
    divTitleBackButton.style.display = 'flex';
    divTitleBackButton.style.flexDirection = 'row';
    divTitleBackButton.style.alignItems = 'center';
    divTitleBackButton.style.justifyContent = 'space-between';


    divTitleBackButton.appendChild(droneName);
    divTitleBackButton.appendChild(backButton);

    droneDetails.appendChild(divTitleBackButton);


    const droneImage = document.createElement('img');
    droneImage.src = 'https://static.fnac-static.com/multimedia/Images/FR/MDM/c0/b1/52/22196672/1520-7/tsp20231006000431/Drone-Dji-Mini-4-Pro-avec-radiocommande-Blanc.jpg';
    droneImage.style.width = '60%';
    droneImage.style.display = 'block';
    droneImage.style.marginLeft = 'auto';
    droneImage.style.marginRight = 'auto';
    droneImage.style.padding = '3rem';
    droneDetails.appendChild(droneImage);

    const droneDescription = document.createElement('p');
    droneDescription.textContent = 'Le DJI Mini 4 Pro est un drone ultra-léger qui offre une qualité d’image professionnelle. Il est doté de fonctions telles que la prise de vue en verticale réelle HDR 4K/60 ips, la détection d’obstacles omnidirectionnelle, ActiveTrack 360°, la transmission vidéo FHD sur 20 km, et bien d’autres fonctions exceptionnelles. Il est le choix idéal pour les débutants et les voyageurs grâce à sa facilité d’utilisation et sa portabilité.';
    droneDescription.style.marginLeft = '5rem';
    droneDescription.style.marginRight = '5rem';
    
    droneDetails.appendChild(droneDescription);

    const dronePrice = document.createElement('p');
    dronePrice.textContent = 'Prix : 999';
    droneDetails.appendChild(dronePrice);

    const buyButton = document.createElement('button');
    buyButton.textContent = 'Acheter';
    buyButton.addEventListener('click', event => {
        event.preventDefault();
        window.open('https://store.dji.com/fr/product/dji-mini-4-pro?vid=148611&from=store-nav', '_blank'); 
    });
    droneDetails.appendChild(buyButton);

    app.appendChild(droneDetails);
}
