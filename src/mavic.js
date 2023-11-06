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
    droneName.textContent = 'DJI Mavic Air 2';

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
    droneImage.src = 'https://blog.studiosport.fr/wp-content/uploads/2020/05/dji-mavic-air-2.jpg';
    droneImage.style.width = '60%';
    droneImage.style.display = 'block';
    droneImage.style.marginLeft = 'auto';
    droneImage.style.marginRight = 'auto';
    droneImage.style.justifyContent = 'center';
    droneImage.style.padding = '3rem';
    droneDetails.appendChild(droneImage);

    const droneDescription = document.createElement('p');
    droneDescription.textContent = 'Le DJI Mavic Air 2 est un drone compact et puissant, parfait pour les aventuriers et les vidéastes. Il est équipé d’un capteur d’image 1/2 pouce, capable de prendre des photos de 48 MP et des vidéos 4K/60 ips. Il offre une variété de modes de prise de vue, y compris la photo, la vidéo et le panorama HDR. Il dispose également de la fonction Hyperlapse 8K et QuickShots pour des prises de vue cinématographiques. Le Mavic Air 2 a une durée de vol maximale de 34 minutes et une autonomie maximale de la batterie de la radiocommande de 240 minutes. Il utilise le système de transmission vidéo OcuSync 2.0 pour une portée de 10 km.';
    droneDescription.style.marginLeft = '5rem';
    droneDescription.style.marginRight = '5rem';
    
    droneDetails.appendChild(droneDescription);

    const dronePrice = document.createElement('p');
    dronePrice.textContent = 'Prix : 799€';
    droneDetails.appendChild(dronePrice);

    const buyButton = document.createElement('button');
    buyButton.textContent = 'Acheter';
    buyButton.addEventListener('click', event => {
        event.preventDefault();
        window.open('https://store.dji.com/fr/product/dji-air-2s?vid=104122', '_blank'); 
    });
    droneDetails.appendChild(buyButton);

    app.appendChild(droneDetails);
}