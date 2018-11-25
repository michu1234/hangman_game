import {config} from '../config'
import axios from 'axios'
let api = config.development.API_URL;

export default {
    getRandomWord() {
        const randomWord = axios.get(api).then((data) => {return data.data.results[0].location.city});
        return randomWord;
    }
}