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
    droneName.textContent = 'DJI Tello';

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
    droneImage.src = 'https://i.ytimg.com/vi/WtvwdB-lyNY/maxresdefault.jpg';
    droneImage.style.width = '60%';
    droneImage.style.display = 'block';
    droneImage.style.marginLeft = 'auto';
    droneImage.style.marginRight = 'auto';
    droneImage.style.padding = '3rem';
    droneDetails.appendChild(droneImage);

    const droneDescription = document.createElement('p');
    droneDescription.textContent = 'Le DJI Tello est un mini-drone léger et abordable, idéal pour voler en intérieur et parfaitement adapté aux débutants. Il est équipé d’une caméra montée sur le nez capable de capturer des photos de 5MP et de diffuser des vidéos HD 720p. Le Tello est propulsé par Intel et contient pas moins de 14 processeurs, offrant un panel de fonctionnalités uniques pour ce type de mini drone, y compris la stabilisation électronique de l’image, le système anti-collisions, le système de positionnement optique, et une gestion du niveau de batterie. Il a une durée de vol de 13 minutes.';
    droneDescription.style.marginLeft = '5rem';
    droneDescription.style.marginRight = '5rem';
    
    droneDetails.appendChild(droneDescription);

    const dronePrice = document.createElement('p');
    dronePrice.textContent = 'Prix : 115€';
    droneDetails.appendChild(dronePrice);

    const buyButton = document.createElement('button');
    buyButton.textContent = 'Acheter';
    buyButton.addEventListener('click', event => {
        event.preventDefault();
        window.open('https://store.dji.com/fr/product/tello?vid=38421', '_blank'); 
    });
    droneDetails.appendChild(buyButton);

    app.appendChild(droneDetails);
}

