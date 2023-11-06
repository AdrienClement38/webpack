import { drones } from './drones.js';

document.addEventListener('DOMContentLoaded', () => {

    document.body.style.fontFamily = 'Arial, sans-serif';

    const title = document.createElement('h1');
    title.textContent = 'Site de drones';
    title.style.fontFamily = 'Arial, sans-serif';
    title.style.textAlign = 'center';
    document.body.appendChild(title);


    const app = document.createElement('div');
    document.body.appendChild(app);
    app.setAttribute("id", "app");
    app.style.display = 'flex';
    app.style.flexWrap = 'wrap';
    app.style.justifyContent = 'space-around';



    drones.forEach(drone => {
        const droneElement = document.createElement('div');
        droneElement.style.border = '1px solid grey';
        droneElement.style.margin = '10px';
        droneElement.style.borderRadius = '10px';
        droneElement.style.boxShadow = '5px 5px 10px grey';
        droneElement.addEventListener('mouseover', () => {
            droneElement.style.boxShadow = 'none';
        });
        droneElement.addEventListener('mouseout', () => {
            droneElement.style.boxShadow = '5px 5px 10px grey';
        });
        droneElement.style.padding = '10px';
        droneElement.style.width = '250px';
        droneElement.style.height = '460px';
        droneElement.style.display = 'flex';
        droneElement.style.flexDirection = 'column';
        droneElement.style.justifyContent = 'space-between';



        const droneImage = document.createElement('img');
        droneImage.src = drone.imageUrl;
        droneImage.style.width = '100%';



        const divNameDescription = document.createElement('div');
        divNameDescription.style.justifyContent = 'space-between';



        const droneName = document.createElement('h2');
        droneName.textContent = drone.name;
        droneName.style.fontFamily = 'Arial, sans-serif';
        droneName.style.color = 'grey';



        const droneDescription = document.createElement('p');
        droneDescription.textContent = drone.description;



        const droneLink = document.createElement('a');
        droneLink.href = '#';
        droneLink.textContent = 'Voir les détails';
        droneLink.style.fontFamily = 'Arial, sans-serif';
        droneLink.style.textDecoration = 'none';
        droneLink.style.color = 'grey';
        droneLink.addEventListener('click', event => {
            event.preventDefault();
            import(`./${drone.fileName}`)
            .then(module => {
                module.renderDronePage();
            })
            .catch(err => {
                console.log(`Erreur lors du chargement de la page du drone ${drone.name}`, err);
            });
        });


        
        droneElement.appendChild(droneImage);
        divNameDescription.appendChild(droneName);
        divNameDescription.appendChild(droneDescription);
        droneElement.appendChild(divNameDescription);
        droneElement.appendChild(droneLink);

        app.appendChild(droneElement);
    });
});