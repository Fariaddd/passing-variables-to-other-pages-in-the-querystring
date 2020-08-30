const resultsContainer = document.querySelector(".results");

const url = "https://api.rawg.io/api/games";

async function fetchGames() {

    try {
        const response = await fetch(url);
        const json = await response.json();

        console.log(json);

        resultsContainer.innerHTML = "";

        const games = json.results;

        games.forEach(function(game) {
            resultsContainer.innerHTML += `<a href="details.html?id=${game.id}" class="card">
                                                <div class="image" style="background-image: url(${game.background_image});"></div>
                                                <div class="details">
                                                    <h4 class="name">${game.name}</h4>                                                                                                                                                        
                                                </div>
                                            </a>`;
        });
      
    }
    catch(error) {
        console.log(error);
        resultsContainer.innerHTML = message("error", error);
    }
    
}

fetchGames();
