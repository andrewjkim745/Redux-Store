import axios from 'axios'


let API_KEY = "q3lgkkz9q9vcl8wva8h3nrnxjsp8kk"
let api = axios.create({
    headers: {
        "client_id": API_KEY,
        "client_secret": 'cevhox0l53oru1h4jhxnh2a3061wph',
        "redirect_uri": 'http://localhost',
    }
})


export default api 