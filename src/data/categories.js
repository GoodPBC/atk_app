import Axios from "axios"

export const categories = [
    {category: "Italian", calories: 0},
    {category: "French", calories: 0},
    {category: "Asian", calories: 0},
    {category: "Mediterranean", calories: 0},
    {category: "Eastern European", calories: 0},
    {category: "Latin", calories: 0},
    {category: "American", calories: 0},
    {category: "Vegan", calories: 0},
]

export const APP_ID = '45875a4b'
export const API_KEY = 'd8babbfadb933db33efb3d454940ce07'
export const BASE_URL = '`https://api.edamam.com/search?q='

export const Q_STRING = `${BASE_URL}chicken&app_id=${APP_ID}&app_key=${API_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`

const API_HELPER = () => {
    Axios.get("https://api.edamam.com/search?q=chicken&app_id=45875a4b&app_key=d8babbfadb933db33efb3d454940ce07")
        .then(res => {
            const response_data = res.data;
            console.log(response_data);
        })
};

API_HELPER();