
const baseURL = "https://swapi.dev/api";
var mainContent = document.getElementById("container");

async function createMenu(){
    const menuItems = await getDataFromUrl(baseURL);
    const navBar = document.getElementById("nav-bar")
    for(const [k,v] of Object.entries(menuItems)){
        const item = document.createElement("a")
        item.className = "nav-item";
        item.href = v;
        item.innerText = k;
        item.addEventListener("click", menuClick)
        navBar.appendChild(item);
    }
}
async function getDataFromUrl(url){
    const res = await fetch(url);
    return await res.json();
}
async function menuClick(e) {
    e.preventDefault();
    document.querySelector(".active")?.classList.remove("active");
    e.target.classList.add("active");
    mainContent.innerHTML = "";
    showLoader();
    const data = await getDataFromUrl(e.target.href);
    switch(e.target.href){
        case "https://swapi.dev/api/people/":
            showLoader();
            clickedLink(data, "people");
            break;
        case "https://swapi.dev/api/planets/": 
            showLoader();
            clickedLink(data, "planets");
            break;
        case "https://swapi.dev/api/films/":
            showLoader();
            clickedLink(data, "films");
            break;
        case "https://swapi.dev/api/species/": 
            showLoader();
            clickedLink(data, "species");
            break;
        case "https://swapi.dev/api/vehicles/": 
            showLoader();
            clickedLink(data, "vehicles")
            break;    
        case "https://swapi.dev/api/starships/":
            showLoader();
            clickedLink(data, "starships")
            break;
        default:
            console.log("Error");
            break;
    }
}
function clickedLink(data, links){
    
    switch(links){
        case "people":
            for(let i = 0; i < data.results.length; i++){
                let mainDiv = document.createElement("div");

                var filteredDiv = document.createElement("div");
                var format = document.createElement("pre");
                format.innerText = `
Name: ${data.results[i].name}
Height: ${data.results[i].height}
Mass: ${data.results[i].mass}
Hair Color: ${data.results[i].hair_color}
Skin Color: ${data.results[i].skin_color}
Birth Year: ${data.results[i].birth_year}
Gender: ${data.results[i].gender}
Homeworld: ${data.results[i].homeworld}
Created: ${data.results[i].created}
Edited: ${data.results[i].edited}
Url: ${data.results[i].url}
`;              
                
                var unfilteredDiv = document.createElement("div");
    
                var film = document.createElement("p");
                film.innerText = "Film: ";
                film.style.paddingLeft = "10px";

                var species = document.createElement("p");
                species.innerText = "Species: ";
                species.style.paddingLeft = "10px";

                var vehicles = document.createElement("p");
                vehicles.innerText = "Vehicles: ";
                vehicles.style.paddingLeft = "10px";

                var starships = document.createElement("p");
                starships.innerText = "Starships: ";
                starships.style.paddingLeft = "10px";

                var filmList = document.createElement("ul");
                var speciesList = document.createElement("ul");
                var vehiclesList = document.createElement("ul");
                var starshipsList = document.createElement("ul");
                
                for(let j = 0; j < data.results[i].films.length; j++){
                    let films = document.createElement("li");
                    films.innerText = `
                        ${typeof(data.results[i].films[j]) != "undefined" ? data.results[i].films[j] : ""}
                    `;
                    filmList.appendChild(films);
                    filmList.className = "format"
                }
                for(let j = 0; j < data.results[i].species.length; j++){
                    let species = document.createElement("li");
                    species.innerText = `
                        ${typeof(data.results[i].species[j]) != "undefined" ? data.results[i].species[j] : ""}
                    `;
                    speciesList.appendChild(species);
                    speciesList.className = "format"
                }     
                for(let j = 0; j < data.results[i].vehicles.length; j++){
                    let vehicles = document.createElement("li");
                    vehicles.innerText = `
                        ${typeof(data.results[i].vehicles[j]) != "undefined" ? data.results[i].vehicles[j] : ""}
                    `;
                    vehiclesList.appendChild(vehicles);
                    vehiclesList.className = "format"
                } 
                for(let j = 0; j < data.results[i].starships.length; j++){
                    let starships = document.createElement("li");
                    starships.innerText = `
                        ${typeof(data.results[i].starships[j]) != "undefined" ? data.results[i].starships[j] : ""}
                    `;
                    starshipsList.appendChild(species);
                    starshipsList.className = "format"
                } 
                    
                
                getUserPic(i, filteredDiv);
                filteredDiv.style.width =  "500";
                filteredDiv.style.height= "400";
                filteredDiv.id = "d" + i; 
                filteredDiv.className = "filteredGrid";
                format.className = "format";
                filteredDiv.appendChild(format);
                
                unfilteredDiv.className = "unfilteredGrid"
                unfilteredDiv.appendChild(film);
                unfilteredDiv.appendChild(filmList);
                unfilteredDiv.appendChild(species);
                unfilteredDiv.appendChild(speciesList);
                unfilteredDiv.appendChild(vehicles);
                unfilteredDiv.appendChild(vehiclesList);
                unfilteredDiv.appendChild(starships);
                unfilteredDiv.appendChild(starshipsList);
                unfilteredDiv.style.display = "none";
                unfilteredDiv.id = "md" + i;

                mainDiv.className = "mainDiv";
                mainDiv.id = "main" + i;
                mainDiv.addEventListener("click", showFiltered)
                mainDiv.appendChild(filteredDiv);
                mainDiv.appendChild(unfilteredDiv);
                hideLoader();
                mainContent.appendChild(mainDiv);
                }
                
                break;

        case "planets":
            for(let i = 0; i < data.results.length; i++){
                let mainDiv = document.createElement("div");
                var filteredDiv = document.createElement("div");
                var format = document.createElement("pre");
                format.innerText = `
Name: ${data.results[i].name}
Rotation Period: ${data.results[i].rotation_period}
Orbital Period: ${data.results[i].orbital_period}
Diameter: ${data.results[i].diameter}
Climate: ${data.results[i].climate}
Gravity: ${data.results[i].gravity}
Terrain: ${data.results[i].terrain}
Surface Water: ${data.results[i].surface_water}
Population: ${data.results[i].population} 
Created: ${data.results[i].created}
Edited: ${data.results[i].edited}
Url: ${data.results[i].url}`;
                
                var unfilteredDiv = document.createElement("div");

                var residents = document.createElement("p");
                residents.innerText = "Residents: ";
                residents.style.paddingLeft = "10px";

                var film = document.createElement("p");
                film.innerText = "Film: ";
                film.style.paddingLeft = "10px";

                var residentsList = document.createElement("ul");
                var filmList = document.createElement("ul");

                for(let j = 0; j < data.results[i].residents.length; j++){
                    let residents = document.createElement("li");
                    residents.innerText = `
                        ${typeof(data.results[i].residents[j]) != "undefined" ? data.results[i].residents[j] : ""}
                    `;
                    residentsList.appendChild(residents);
                    residentsList.className = "format"
                }
                for(let j = 0; j < data.results[i].films.length; j++){
                    let film = document.createElement("li");
                    film.innerText = `
                        ${typeof(data.results[i].films[j]) != "undefined" ? data.results[i].films[j] : ""}
                    `;
                    filmList.appendChild(film);
                    filmList.className = "format"
                }     

                format.className = "format";
                filteredDiv.id = "d" + i;
                filteredDiv.className="filteredGrid"
                filteredDiv.appendChild(format);
                
                unfilteredDiv.className = "unfilteredGrid";
                unfilteredDiv.appendChild(residents);
                unfilteredDiv.appendChild(residentsList);
                unfilteredDiv.appendChild(film);
                unfilteredDiv.appendChild(filmList);
                unfilteredDiv.style.display = "none";
                
                mainDiv.className = "mainDiv";

                mainDiv.addEventListener("click", showFiltered);
                mainDiv.appendChild(filteredDiv);
                mainDiv.appendChild(unfilteredDiv);
                hideLoader();
                mainContent.appendChild(mainDiv);
            }
            break;

        case "films":
            for(let i = 0; i < data.results.length; i++){
                let mainDiv = document.createElement("div");
                var filteredDiv = document.createElement("div");
                var format = document.createElement("pre");

                format.innerText = `
Title: ${data.results[i].title}
Episode Id: ${data.results[i].episode_id}
Opening crawl: ${data.results[i].opening_crawl}

Director: ${data.results[i].director}
Producer: ${data.results[i].producer}
Release Date: ${data.results[i].release_date}
Created: ${data.results[i].created}
Edited: ${data.results[i].edited}
Url: ${data.results[i].url}
                `;

                var unfilteredDiv = document.createElement("div");

                var characters = document.createElement("p");
                characters.innerText = "Species: ";
                characters.style.paddingLeft = "10px";

                var planets = document.createElement("p");
                planets.innerText = "Species: ";
                planets.style.paddingLeft = "10px";

                var starships = document.createElement("p");
                starships.innerText = "Species: ";
                starships.style.paddingLeft = "10px";

                var vehicles = document.createElement("p");
                vehicles.innerText = "Species: ";
                vehicles.style.paddingLeft = "10px";

                var species = document.createElement("p");
                species.innerText = "Species: ";
                species.style.paddingLeft = "10px";


                var charactersList = document.createElement("ul");
                var planetsList = document.createElement("ul");
                var starshipsList = document.createElement("ul");
                var vehiclesList = document.createElement("ul");
                var speciesList = document.createElement("ul");

                for(let j = 0; j < data.results[i].characters.length; j++){
                    let characters = document.createElement("li");
                    characters.innerText = `
                        ${typeof(data.results[i].characters[j]) != "undefined" ? data.results[i].characters[j] : ""}
                    `;
                    charactersList.appendChild(characters);
                    charactersList.className = "format"
                }

                for(let j = 0; j < data.results[i].planets.length; j++){
                    let planets = document.createElement("li");
                    planets.innerText = `
                        ${typeof(data.results[i].planets[j]) != "undefined" ? data.results[i].planets[j] : ""}
                    `;
                    planetsList.appendChild(planets);
                    planetsList.className = "format"
                }

                for(let j = 0; j < data.results[i].starships.length; j++){
                    let starships = document.createElement("li");
                    starships.innerText = `
                        ${typeof(data.results[i].starships[j]) != "undefined" ? data.results[i].starships[j] : ""}
                    `;
                    starshipsList.appendChild(starships);
                    starshipsList.className = "format"
                }

                for(let j = 0; j < data.results[i].vehicles.length; j++){
                    let vehicles = document.createElement("li");
                    vehicles.innerText = `
                        ${typeof(data.results[i].vehicles[j]) != "undefined" ? data.results[i].vehicles[j] : ""}
                    `;
                    vehiclesList.appendChild(vehicles);
                    vehiclesList.className = "format"
                }

                for(let j = 0; j < data.results[i].species.length; j++){
                    let species = document.createElement("li");
                    species.innerText = `
                        ${typeof(data.results[i].species[j]) != "undefined" ? data.results[i].species[j] : ""}
                    `;
                    speciesList.appendChild(characters);
                    speciesList.className = "format"
                }



                format.className ="format";
                filteredDiv.className = "filteredGrid";
                filteredDiv.id = "d" + i;
                filteredDiv.appendChild(format);

                unfilteredDiv.className = "unfilteredGrid";
                unfilteredDiv.appendChild(characters);
                unfilteredDiv.appendChild(charactersList);
                unfilteredDiv.appendChild(planets);
                unfilteredDiv.appendChild(planetsList);
                unfilteredDiv.appendChild(starships);
                unfilteredDiv.appendChild(starshipsList);
                unfilteredDiv.appendChild(vehicles);
                unfilteredDiv.appendChild(vehiclesList);
                unfilteredDiv.appendChild(species);
                unfilteredDiv.appendChild(speciesList);
                unfilteredDiv.style.display = "none";
                unfilteredDiv.id = "md" + i;

                mainDiv.className = "mainDiv";
                mainDiv.addEventListener('click', showFiltered);
                mainDiv.appendChild(filteredDiv);
                mainDiv.appendChild(unfilteredDiv);
                hideLoader();
                mainContent.appendChild(mainDiv);
            }
            break;

        case "species":
            for(let i = 0; i < data.results.length; i++){
                var mainDiv = document.createElement("div");
                var filteredDiv = document.createElement("div");
                var format = document.createElement("pre");
                format.innerText = `
Name: ${data.results[i].name}
Classification: ${data.results[i].classification}
Designation: ${data.results[i].designation}
Average Height: ${data.results[i].average_height}
Skin Colors: ${data.results[i].skin_colors}
Hair Colors: ${data.results[i].hair_colors}
Eye Colors: ${data.results[i].eye_colors}
Average Lifestyle: ${data.results[i].average_lifespan}
Homeworld: ${data.results[i].homeworld}
Language: ${data.results[i].language}
Created: ${data.results[i].created}
Edited: ${data.results[i].edited}
Url: ${data.results[i].url}
                `;

                var unfilteredDiv = document.createElement("div");

                var people = document.createElement("p");
                people.innerText = "People: ";
                people.style.paddingLeft = "10px";

                var film = document.createElement("p");
                film.innerText = "Film: ";
                film.style.paddingLeft = "10px";

                var peopleList = document.createElement("ul");
                var filmList = document.createElement("ul");

                for(let j = 0; j < data.results[i].people.length; j++){
                    let people = document.createElement("li");
                    people.innerText = `
                        ${typeof(data.results[i].people[j]) != "undefined" ? data.results[i].people[j] : ""}
                    `;
                    peopleList.appendChild(people);
                    peopleList.className = "format"
                }
                for(let j = 0; j < data.results[i].films.length; j++){
                    let film = document.createElement("li");
                    film.innerText = `
                        ${typeof(data.results[i].films[j]) != "undefined" ? data.results[i].films[j] : ""}
                    `;
                    filmList.appendChild(film);
                    filmList.className = "format"
                } 


                filteredDiv.id = "d" + i; 
                filteredDiv.className = "filteredGrid";
                format.className = "format";
                filteredDiv.appendChild(format);

                unfilteredDiv.className = "unfilteredGrid"
                unfilteredDiv.appendChild(peopleList);
                unfilteredDiv.appendChild(filmList);
                unfilteredDiv.style.display = "none";
                unfilteredDiv.id = "md" + i;

                mainDiv.className="mainDiv";
                mainDiv.id = "main" + i;
                mainDiv.addEventListener('click', showFiltered)
                mainDiv.appendChild(filteredDiv);
                mainDiv.appendChild(unfilteredDiv);

                hideLoader();
                mainContent.appendChild(mainDiv);
            }
            break;

        case "vehicles":
            for(let i = 0; i < data.results.length; i++){
                var mainDiv = document.createElement("div");
                var filteredDiv = document.createElement("div");
                var format = document.createElement("pre");
                format.innerText = `
Name: ${data.results[i].name}
Model: ${data.results[i].model}
Manufacturer: ${data.results[i].manufacturer}
Cost in Credit: ${data.results[i].cost_in_credits}
Length: ${data.results[i].length}
Max atmosphere speed: ${data.results[i].max_atmosphering_speed}
Crew: ${data.results[i].crew}
Passengers: ${data.results[i].passengers}
Cargo capacity: ${data.results[i].cargo_capacity}
Consumables: ${data.results[i].consumables}
Vehicle class: ${data.results[i].vehicle_class}
Created: ${data.results[i].created}
Edited: ${data.results[i].edited}
Url: ${data.results[i].url}
                `;

                var unfilteredDiv = document.createElement("div");

                var pilots = document.createElement("p");
                pilots.innerText = "Pilots: ";
                pilots.style.paddingLeft = "10px";

                var films = document.createElement("p");
                films.innerText = "Film: ";
                films.style.paddingLeft = "10px";
                
                var pilotList = document.createElement("ul");
                var filmList = document.createElement("ul");

                for(let j = 0; j < data.results[i].pilots.length; j++){
                    let pilots = document.createElement("li");
                    pilots.innerText = `
                        ${typeof(data.results[i].pilots[j]) != "undefined" ? data.results[i].pilots[j] : ""}
                    `;
                    pilotList.appendChild(pilots);
                    pilotList.className = "format"
                }
                for(let j = 0; j < data.results[i].films.length; j++){
                    let films = document.createElement("li");
                    films.innerText = `
                        ${typeof(data.results[i].films[j]) != "undefined" ? data.results[i].films[j] : ""}
                    `;
                    filmList.appendChild(films);
                    filmList.className = "format"
                }

                filteredDiv.id = "d" + i; 
                filteredDiv.className = "filteredGrid";
                format.className = "format";
                filteredDiv.appendChild(format);
                
                unfilteredDiv.className = "unfilteredGrid"
                unfilteredDiv.appendChild(pilots);
                unfilteredDiv.appendChild(pilotList);
                unfilteredDiv.appendChild(films);
                unfilteredDiv.appendChild(filmList);
                unfilteredDiv.style.display = "none";
                unfilteredDiv.id = "md" + i;

                mainDiv.className = "mainDiv";
                mainDiv.id = "main" + i;
                mainDiv.addEventListener('click', showFiltered);
                mainDiv.appendChild(filteredDiv);
                mainDiv.appendChild(unfilteredDiv);
                hideLoader();
                mainContent.appendChild(mainDiv);
             }
            break;

        case "starships":
            for(let i = 0; i < data.results.length; i++){
                var mainDiv = document.createElement("div");
                var filteredDiv = document.createElement("div");
                var format = document.createElement("pre");
                format.innerText = `
Name: ${data.results[i].name}
Model: ${data.results[i].model}
Manufacturer: ${data.results[i].manufacturer}
Cost in credit: ${data.results[i].cost_in_credits}
Length: ${data.results[i].length}
Max atmosphering speed: ${data.results[i].max_atmosphering_speed}
Crew: ${data.results[i].crew}
Passengers: ${data.results[i].passengers}
Cargo capacity: ${data.results[i].cargo_capacity}
Consumables: ${data.results[i].consumables}
Hyperdrive rating: ${data.results[i].hyperdrive_rating}
MGLT: ${data.results[i].MGLT}
Starship class: ${data.results[i].starship_class}
Created: ${data.results[i].created}
Edited: ${data.results[i].edited}
Url: ${data.results[i].url}
                `;

                var unfilteredDiv = document.createElement("div");

                var pilots = document.createElement("p");
                pilots.innerText = "Pilots: ";
                pilots.style.paddingLeft = "10px";

                var films = document.createElement("p");
                films.innerText = "Film: ";
                films.style.paddingLeft = "10px";
                
                var pilotList = document.createElement("ul");
                var filmList = document.createElement("ul");

                for(let j = 0; j < data.results[i].pilots.length; j++){
                    let pilots = document.createElement("li");
                    pilots.innerText = `
                        ${typeof(data.results[i].pilots[j]) != "undefined" ? data.results[i].pilots[j] : ""}
                    `;
                    pilotList.appendChild(pilots);
                    pilotList.className = "format"
                }
                for(let j = 0; j < data.results[i].films.length; j++){
                    let films = document.createElement("li");
                    films.innerText = `
                        ${typeof(data.results[i].films[j]) != "undefined" ? data.results[i].films[j] : ""}
                    `;
                    filmList.appendChild(films);
                    filmList.className = "format"
                }

                filteredDiv.id = "d" + i; 
                filteredDiv.className = "filteredGrid";
                format.className = "format";
                filteredDiv.id = "d" + i;
                filteredDiv.appendChild(format);
                
                unfilteredDiv.className = "unfilteredGrid"
                unfilteredDiv.appendChild(films);
                unfilteredDiv.appendChild(filmList);
                unfilteredDiv.appendChild(pilots);
                unfilteredDiv.appendChild(pilotList);
                unfilteredDiv.style.display = "none";

                mainDiv.className = "mainDiv";
                mainDiv.id = "main" + i;

                mainDiv.addEventListener('click', showFiltered);
                mainDiv.appendChild(filteredDiv);
                mainDiv.appendChild(unfilteredDiv);
                hideLoader();
                mainContent.appendChild(mainDiv);
             }
            
            break;

        default:
                break;    
    } 
}
function getUserPic(id, appendImage) {
    let source = "https://robohash.org/" + id;
    var image = document.createElement("img");
    image.src = source;
    image.style.position = "absolute";
    image.width = "100";
    image.height = "100";
    image.style.right = "0";
    appendImage.appendChild(image);
}
async function defaultPage(){
    await fetch("https://swapi.dev/api/people/").then(res => res.json())
    .then(data => {
        for(let i = 0; i < data.results.length; i++){
            let mainDiv = document.createElement("div");

            var filteredDiv = document.createElement("div");
            var format = document.createElement("pre");
            format.innerText = `
Name: ${data.results[i].name}
Height: ${data.results[i].height}
Mass: ${data.results[i].mass}
Hair Color: ${data.results[i].hair_color}
Skin Color: ${data.results[i].skin_color}
Birth Year: ${data.results[i].birth_year}
Gender: ${data.results[i].gender}
Homeworld: ${data.results[i].homeworld}
Created: ${data.results[i].created}
Edited: ${data.results[i].edited}
Url: ${data.results[i].url}
`;              
            var unfilteredDiv = document.createElement("div");

            var film = document.createElement("p");
            film.innerText = "Film: ";
            film.style.paddingLeft = "10px";

            var species = document.createElement("p");
            species.innerText = "Species: ";
            species.style.paddingLeft = "10px";

            var vehicles = document.createElement("p");
            vehicles.innerText = "Vehicles: ";
            vehicles.style.paddingLeft = "10px";

            var starships = document.createElement("p");
            starships.innerText = "Starships: ";
            starships.style.paddingLeft = "10px";

            var filmList = document.createElement("ul");
            var speciesList = document.createElement("ul");
            var vehiclesList = document.createElement("ul");
            var starshipsList = document.createElement("ul");

            /*
                const multiArrays = ["films", "species", "vehicles", "starships"];
                for(let j = 0; j< multiArrays.length;j++){
                    for(let z = 0; z < data.results[i].multiArrays[z].length; z++){
                        ...do something
                    }
                }
            */
            
            for(let j = 0; j < data.results[i].films.length; j++){
                let films = document.createElement("li");
                films.innerText = `
                    ${typeof(data.results[i].films[j]) != "undefined" ? data.results[i].films[j] : ""}
                `;
                filmList.appendChild(films);
                filmList.className = "format"
            }
            for(let j = 0; j < data.results[i].species.length; j++){
                let species = document.createElement("li");
                species.innerText = `
                    ${typeof(data.results[i].species[j]) != "undefined" ? data.results[i].species[j] : ""}
                `;
                speciesList.appendChild(species);
                speciesList.className = "format"
            }     
            for(let j = 0; j < data.results[i].vehicles.length; j++){
                let vehicles = document.createElement("li");
                vehicles.innerText = `
                    ${typeof(data.results[i].vehicles[j]) != "undefined" ? data.results[i].vehicles[j] : ""}
                `;
                vehiclesList.appendChild(vehicles);
                vehiclesList.className = "format"
            } 
            for(let j = 0; j < data.results[i].starships.length; j++){
                let starships = document.createElement("li");
                starships.innerText = `
                    ${typeof(data.results[i].starships[j]) != "undefined" ? data.results[i].starships[j] : ""}
                `;
                starshipsList.appendChild(species);
                starshipsList.className = "format"
            } 
            
            getUserPic(i, filteredDiv);
            filteredDiv.style.width =  "500";
            filteredDiv.style.height= "400";
            format.className = "format";
            filteredDiv.id = "d" + i; 
            filteredDiv.className = "filteredGrid";
            filteredDiv.appendChild(format);

            unfilteredDiv.className = "unfilteredGrid";
            unfilteredDiv.appendChild(film);
            unfilteredDiv.appendChild(filmList);
            unfilteredDiv.appendChild(species);
            unfilteredDiv.appendChild(speciesList);
            unfilteredDiv.appendChild(vehicles);
            unfilteredDiv.appendChild(vehiclesList);
            unfilteredDiv.appendChild(starships);
            unfilteredDiv.appendChild(starshipsList);
            unfilteredDiv.style.display = "none";
            unfilteredDiv.id = "md" + i;

            mainDiv.className = "mainDiv";

            mainDiv.id = "main" + i;
            mainDiv.addEventListener("click", showFiltered)
            mainDiv.appendChild(filteredDiv);
            mainDiv.appendChild(unfilteredDiv);
            hideLoader();
            mainContent.appendChild(mainDiv);
            }
    });
    
}
defaultPage();

let color1 = document.querySelectorAll("input")[0];
let color2 = document.querySelectorAll("input")[1];
let body = document.querySelector("body");

color1.addEventListener("input", () => {
    setGradientColor(body)
});
color2.addEventListener("input", () => {
    setGradientColor(body)
});
function setGradientColor(area){
    area.style.background = "linear-gradient(to right, " + color1.value + ", " 
    + color2.value +")";
}

let loader = document.getElementById("loading");

function showLoader(){
   loader.style.display="block";
}

function hideLoader(){
   loader.style.display= "none";
}

//showLoader();


createMenu();

function showFiltered(e){

    // e.target.children[1].style.display === "none" ? e.target.children[1].style.display = "block" : "";
 
     if(e.target.children[1].style.display === "none"){
         e.target.children[1].style.display = "block";
     }
     else if (e.target.children[1].style.display === "block"){
         e.target.children[1].style.display = "none";
     }
}
 