const games = [
    { title: "GTA San Andreas", genre: "Ação/Mundo Aberto", year: 2004 },
    { title: "God of War II", genre: "Ação/Hack n Slash", year: 2007 },
    { title: "Resident Evil 4", genre: "Survival Horror", year: 2005 },
    { title: "Shadow of the Colossus", genre: "Aventura", year: 2005 },
    { title: "Need for Speed Most Wanted", genre: "Corrida", year: 2005 },
    { title: "Metal Gear Solid 3", genre: "Infiltração", year: 2004 },
    { title: "Dragon Ball Z: Budokai Tenkaichi 3", genre: "Luta", year: 2007 },
    { title: "Silent Hill 2", genre: "Terror Psicológico", year: 2001 }
];

const grid = document.getElementById('game-grid');

function displayGames(gameList) {
    grid.innerHTML = "";
    gameList.forEach(game => {
        const card = `
            <div class="game-card">
                <h3>${game.title}</h3>
                <p>Gênero: ${game.genre}</p>
                <p>Lançamento: ${game.year}</p>
                <span class="badge">PS2 Original</span>
            </div>
        `;
        grid.innerHTML += card;
    });
}

function searchGame() {
    const input = document.getElementById('search-bar').value.toLowerCase();
    const filteredGames = games.filter(game => 
        game.title.toLowerCase().includes(input)
    );
    displayGames(filteredGames);
}

// Inicializa
displayGames(games);