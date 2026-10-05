let plattegrondIsGeladen = false;

document.querySelector(".verkentype-formulier input[value='kaart']")
.addEventListener("input", naarKaartWeergave);

function naarKaartWeergave() {
    if (!plattegrondIsGeladen) {
        laadPlattegrond();
    }
}

function laadPlattegrond() {
    // Ga ongeveer naar de locatie van het bloemenveld.
    var map = L.map('plattegrond').setView([52.351, 4.93], 17);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
    }).addTo(map);

    //Plaats linksonder een schaalaanduiding.
    L.control.scale({ imperial: false, metric: true }).addTo(map);

    plattegrondIsGeladen = true;
}