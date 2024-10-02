const apiKey = '80e1f64871fd44bfa8661d5a3c6e6f7d';  // Replace with your API key

// Function to search for recipes from Spoonacular API
async function searchRecipes() {
    const searchQuery = document.getElementById('query').value;
    try {
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${searchQuery}`);
        const data = await response.json();
        const recipeList = document.getElementById('results');
        recipeList.innerHTML = '';  // Clear previous results

        if (data.results.length === 0) {
            recipeList.innerHTML = '<p>No recipes found.</p>';
        } else {
            data.results.forEach(recipe => {
                const recipeItem = document.createElement('div');
                recipeItem.className = 'recipe-item card p-3 mb-3';

                const recipeTitle = document.createElement('h3');
                recipeTitle.className = 'card-title';
                recipeTitle.textContent = recipe.title;

                const recipeImage = document.createElement('img');
                recipeImage.src = recipe.image;
                recipeImage.alt = recipe.title;
                recipeImage.className = 'card-img-top';

                const recipeLink = document.createElement('button');
                recipeLink.className = 'btn btn-primary mt-3';
                recipeLink.textContent = 'View Recipe';
                recipeLink.onclick = async function () {
                    await showRecipeDetails(recipe.id);
                };

                const saveButton = document.createElement('button');
                saveButton.textContent = 'Save Recipe';
                saveButton.className = 'btn btn-secondary mt-2';
                saveButton.onclick = function () {
                    saveRecipeToLocalStorage(recipe.id, recipe.title, recipe.image);
                };

                recipeItem.appendChild(recipeImage);
                recipeItem.appendChild(recipeTitle);
                recipeItem.appendChild(recipeLink);
                recipeItem.appendChild(saveButton);

                recipeList.appendChild(recipeItem);
            });
        }
    } catch (error) {
        console.error('Error fetching recipes:', error);
    }
}

// Function to show recipe details in a modal
function showRecipeDetails(recipeId) {
    // Redirect to recipe-detail.html and pass the recipe ID as a URL parameter
    window.location.href = `recipe-detail.html?id=${recipeId}`;
    
}

// Save recipe to local storage
function saveRecipeToLocalStorage(recipeId, recipeTitle, recipeImage) {
    const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
    
    const recipeExists = savedRecipes.find(recipe => recipe.id === recipeId);
    if (recipeExists) {
        alert('Recipe already saved!');
        return;
    }

    const recipe = { id: recipeId, title: recipeTitle, image: recipeImage };
    savedRecipes.push(recipe);
    localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));

    alert('Recipe saved!');
}

// Display saved recipes from local storage
function displaySavedRecipes() {
    const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
    const savedRecipesDiv = document.getElementById('saved-recipes');
    savedRecipesDiv.innerHTML = '';  // Clear previous content

    if (savedRecipes.length === 0) {
        savedRecipesDiv.innerHTML = '<p>No saved recipes.</p>';
    } else {
        savedRecipes.forEach(recipe => {
            const recipeItem = document.createElement('div');
            recipeItem.className = 'recipe-item card p-3 mb-3';

            const recipeTitle = document.createElement('h3');
            recipeTitle.className = 'card-title';
            recipeTitle.textContent = recipe.title;

            const recipeImage = document.createElement('img');
            recipeImage.src = recipe.image;
            recipeImage.alt = recipe.title;
            recipeImage.className = 'card-img-top';

            recipeItem.appendChild(recipeImage);
            recipeItem.appendChild(recipeTitle);
            savedRecipesDiv.appendChild(recipeItem);
        });
    }
}