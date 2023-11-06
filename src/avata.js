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
    droneName.textContent = 'DJI Avata';

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
    droneImage.src = 'https://dji-official-fe.djicdn.com/dps/051d7ee4445b71b8fff0d543138f7593.jpg';
    droneImage.style.width = '60%';
    droneImage.style.display = 'block';
    droneImage.style.marginLeft = 'auto';
    droneImage.style.marginRight = 'auto';
    droneImage.style.padding = '3rem';
    droneDetails.appendChild(droneImage);

    const droneDescription = document.createElement('p');
    droneDescription.textContent = ' Le DJI Avata est un drone de pointe conçu pour la photographie aérienne et la vidéographie. Il offre une stabilisation d’image supérieure et une variété de modes de vol intelligents pour une créativité sans limites. Il est équipé d’un capteur CMOS 1/1,7 pouce avec 48 MP effectifs, un objectif avec un champ de vision de 155°, une distance focale équivalente de 12,7 mm, et une ouverture de f/2,8. Il offre également une stabilisation hybride de l’image en utilisant une nacelle mono-axe et une stabilisation électronique (RockSteady). Le DJI Avata dispose également d’un GPS intégré et d’ADS-B (technologie DJI Airsense).';
    droneDescription.style.textAlign = 'justify';
    droneDescription.style.marginLeft = '5rem';
    droneDescription.style.marginRight = '5rem';

    droneDetails.appendChild(droneDescription);

    const dronePrice = document.createElement('p');
    dronePrice.textContent = 'Prix : 579€';
    dronePrice.style.marginTop = '2rem';
    droneDetails.appendChild(dronePrice);

    const buyButton = document.createElement('button');
    buyButton.textContent = 'Acheter';
    buyButton.addEventListener('click', event => {
        event.preventDefault();
        window.open('https://store.dji.com/fr/product/dji-avata-no-rc-goggles?vid=135201&site=brandsite&from=landing_page', '_blank');
    });
    droneDetails.appendChild(buyButton);


    app.appendChild(droneDetails);
}