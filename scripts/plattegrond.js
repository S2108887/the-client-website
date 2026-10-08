import {LeafletMap, TileLayer, Control, GeoJSON} from 'leaflet';

import veldData from '../assets/kaart/bloemenveld-frankendael.json' with { type: "json"};

let plattegrondIsGeladen = false

document.querySelector(".verkentype-formulier input[value='kaart']")
.addEventListener("input", naarKaartWeergave);

function naarKaartWeergave() {
    if (!plattegrondIsGeladen) {
        laadPlattegrond()
    }
}

function laadPlattegrond() {
    // Ga ongeveer naar de locatie van het bloemenveld.
    const kaart = new LeafletMap('plattegrond').setView([52.351, 4.93], 17)

    const dataLaag = new GeoJSON().addTo(kaart)

    dataLaag.addData(veldData.features[0])

    new TileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(kaart)

    //Plaats linksonder een schaalaanduiding.
    new Control.Scale({
        position: 'bottomleft',
        metric: true,
        imperial: false
    }).addTo(kaart)

    plattegrondIsGeladen = true;
}