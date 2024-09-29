//Adding Api key 
const apiID = 'ad44f422';  
const apiKey = 'ca3bff17dad4b97a41e0ee57887fd79d';  


// JavaScript Code (Fetching from Edamam API, saving favorites, etc.)

// Search form event listener
document.getElementById('recipe-search-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const ingredients = document.getElementById('ingredient-input').value;
    if (ingredients) {
        fetchRecipes(ingredients);
    }
});


// Fetch recipes from Edamam API with filters
function fetchRecipes(ingredients) {
    const diet = document.getElementById('diet-select').value;
    const health = document.getElementById('health-select').value;

    let apiUrl = `https://api.edamam.com/search?q=${ingredients}&app_id=${apiID}&app_key=${apiKey}&from=0&to=12`;

    // Add diet and health filters if selected
    if (diet) {
        apiUrl += `&diet=${diet}`;
    }
    if (health) {
        apiUrl += `&health=${health}`;
    }

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            displayRecipes(data.hits);
        })
        .catch(error => {
            console.error('Error fetching recipes:', error);
            alert(`Failed to fetch recipes: ${error.message}`);
        });
}

// Display recipes
function displayRecipes(recipes) {
    const recipeResults = document.getElementById('recipe-results');
    recipeResults.innerHTML = '';  // Clear previous results

    recipes.forEach(recipeData => {
        const recipe = recipeData.recipe;
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('col-md-4', 'mb-4');

        recipeCard.innerHTML = `
            <div class="card">
                <img src="${recipe.image}" class="card-img-top" alt="${recipe.label}">
                <div class="card-body">
                    <h5 class="card-title">${recipe.label}</h5>
                    <button class="btn btn-primary" onclick="viewRecipeDetails('${recipe.uri}')">View Recipe</button>
                    <button class="btn btn-secondary" onclick="saveFavoriteRecipe('${recipe.label}', '${recipe.url}')">Save to Favorites</button>
                </div>
            </div>
        `;

        recipeResults.appendChild(recipeCard);
    });
}


// Save favorite recipe to local storage
function saveFavoriteRecipe(label, url) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const favoriteRecipe = { label, url };

    // Check if the recipe is already saved
    if (favorites.some(recipe => recipe.label === label)) {
        alert('Recipe already saved to favorites!');
        return;
    }

    favorites.push(favoriteRecipe);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    alert('Recipe saved to favorites!');
}

// Retrieve and display favorite recipes 
function displayFavoriteRecipes() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const favoriteList = document.getElementById('favorite-recipes');

    if (favorites.length === 0) {
        favoriteList.innerHTML = '<p>No favorite recipes saved yet.</p>';
    } else {
        favorites.forEach(recipe => {
            favoriteList.innerHTML += `<p><a href="${recipe.url}" target="_blank">${recipe.label}</a></p>`;
        });
    }
}

function displayRecipes(recipes) {
    const recipeResults = document.getElementById('recipe-results');
    recipeResults.innerHTML = '';  // Clear previous results

    recipes.forEach(recipeData => {
        const recipe = recipeData.recipe;
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('col', 's12', 'm6', 'l4');

        recipeCard.innerHTML = `
            <div class="card">
                <div class="card-image">
                    <img src="${recipe.image}" alt="${recipe.label}">
                    <span class="card-title">${recipe.label}</span>
                </div>
                <div class="card-content">
                    <p>${recipe.label}</p>
                </div>
                <div class="card-action">
                    <a href="#" class="btn blue lighten-1" onclick="viewRecipeDetails('${recipe.uri}')">View Details</a>
                    <a href="#" class="btn green lighten-1" onclick="saveFavoriteRecipe('${recipe.label}', '${recipe.url}')">Save</a>
                </div>
            </div>
        `;

        recipeResults.appendChild(recipeCard);
    });
}