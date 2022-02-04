import axios from 'axios'


let API_KEY = "q3lgkkz9q9vcl8wva8h3nrnxjsp8kk"
let api = axios.create({
    headers: {
        "client_id": API_KEY,
        'client_secret': '5hevvlfgnmvs1mf1ep6rhorq1p2kdp',
        'grant_type': 'client_credentials'        
    }
})
// let api = axios.create({
//     headers: {
//         "Client-Id": API_KEY,
//         'Authorization': 'Bearer i7ziwa6hm3qlvbpcd0bmzuu9sxfggm',

//     }
// })


export default api 