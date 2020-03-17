import Axios from 'axios'

export const categories = [
    {category: 'Italian', calories: 0},
    {category: 'French', calories: 0},
    {category: 'Asian', calories: 0},
    {category: 'Mediterranean', calories: 0},
    {category: 'Eastern European', calories: 0},
    {category: 'Latin', calories: 0},
    {category: 'American', calories: 0},
    {category: 'Vegan', calories: 0},
]

export const ItalianRecipes = [
    { name: 'Spaghetti & Meatballs' },
    { name: 'Cheese Ravioli' },
    { name: 'Chicken Vesuvio' },
    { name: 'Veal Parmagianno' },

];
export const FrenchRecipes = [
    { name: 'french chocolate cake' },
    { name: 'Garlic Soup With Shrimp' },
    { name: 'French 75' },
    { name: 'French onion soup' },

];
export const AsianRecipes = [
    { name: 'Caramelized Asian Pears' },
    { name: 'Asian Noodle Dinner Salad' },
    { name: 'Asian Sloppy Joe Sliders' },
    { name: 'Asian Chicken Salad Lettuce Cups' },

];
export const mediterraneanRecipes = [
    { name: 'Loup De Mer (Mediterranean Seabass)' },
    { name: 'Love & Olive Oil' },
    { name: 'Autumn Bellini (Bellini Stagionale)' },
    { name: 'Mediterranean Chicken Lettuce Wrap Tacos' },

];
export const EuropeanRecipes = [
    { name: 'Classic European Nougat"' },
    { name: 'Tea Sandwiches' },
    { name: 'Jambon Beurre Sandwich' },
    { name: 'All-Butter Piecrust' },

];
export const LatinRecipes = [
    { name: 'Slow-Roasted Pork with Lime Mojo recipes' },
    { name: 'Latin Lover recipes' },
    { name: 'Latin Limeade' },
    { name: 'Latin-Style Flank Steak' },

];
export const AmericanRecipes = [
    { name: 'Cauliflower Veloute with American Caviar' },
    { name: 'The Applejack Smash' },
    { name: 'American Treacle Recipe' },
    { name: 'The American Honey Gold Medal Cocktail' },

];
export const VeganRecipes = [
    { name: 'Vegan Caramel Cheesecake In A Jar' },
    { name: 'Vegan Chocolate-Coffee Muffins Recipe' },
    { name: 'Vegan Broccoli Soup Recipe' },
    { name: 'Vegan Meatballs' },

];

export const APP_ID = '45875a4b'
export const API_KEY = 'd8babbfadb933db33efb3d454940ce07'
export const BASE_URL = '`https://api.edamam.com/search?q='

export const Q_STRING = `${BASE_URL}chicken&app_id=${APP_ID}&app_key=${API_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`

export const API_HELPER = () => {
    Axios.get('https://api.edamam.com/search?q=chicken&app_id=45875a4b&app_key=d8babbfadb933db33efb3d454940ce07')
        .then(res => {
            const response_data = res.data;

        })
};
