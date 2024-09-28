
let totalCalories = 0;

const calorieDatabase = {
    'apple': 52,  // calories per 100g
    'banana': 89,
    'chicken breast': 165,
    'broccoli': 34,
    'carrot': 41,
    'spinach': 23,
    'quinoa': 120,
    'brown rice': 111,
    'tofu': 76,
    'salmon': 206,
    'sweet potato': 86,
    'cucumber': 16,
    'tomato': 18,
    'avocado': 160,
    'grapes': 69,
    'kiwi': 61,
    'blueberries': 57,
    'strawberries': 32,
    'peanut butter': 588,
    'almonds': 579,
    'walnuts': 654,
    'oats': 389,
    'eggs': 155,
    'Greek yogurt': 59,
    'cottage cheese': 98,
    'hummus': 166,
    'bell pepper': 20,
    'zucchini': 17,
    'cauliflower': 25,
    'mushrooms': 22,
    'chickpeas': 164,
    'lentils': 116,
    'pasta (whole grain)': 124,
    'barley': 123,
    'flaxseeds': 534,
    'chia seeds': 486,
    'coconut milk': 230,
    'cabbage': 25,
    'kale': 49,
    'green beans': 31,
    'peas': 81,
    'pumpkin seeds': 559,
    'chicken thigh': 209,
    'turkey breast': 135,
    'lean beef': 250,
    'pork tenderloin': 143,
    'shrimp': 99,
    'tuna': 132,
    'cod': 105,
    'sardines': 208,
    'cooked lentils': 116,
    'tempeh': 193,
    'edamame': 121,
    'bison': 143,
    'seitan': 370,
    'venison': 158,
    'mackerel': 205,
    'halibut': 140,
    'cooked quinoa': 120,
    'cooked chickpeas': 164,
    'Greek yogurt (non-fat)': 59,
    'protein powder': 375,
    //Add more ingredients and their calorie values here
};

function addIngredient() {
const ingredient = document.getElementById('ingredient').value.toLowerCase();
const quantity = document.getElementById('quantity').value;

if (calorieDatabase[ingredient]) {
const calories = (calorieDatabase[ingredient] / 100) * quantity;
totalCalories += calories;

const ingredientList = document.getElementById('ingredientList');
ingredientList.innerHTML += `<p>${quantity}g of ${ingredient}: ${calories.toFixed(2)} calories</p>`;

document.getElementById('totalCalories').innerText = `Total Calories: ${totalCalories.toFixed(2)}`;
} else {
        alert('Ingredient not found in the database.');
    }
}