import React, { useState, useEffect } from 'react'
import api from '../api'
import Card from './Card'



export default function Games() {


    const [ games, setGames ] = useState();


    const fetchGames = async () => {
        await fetch('https://id.twitch.tv/oauth2/token?client_id=q3lgkkz9q9vcl8wva8h3nrnxjsp8kk&client_secret=o6djya7f2hlo7c7pwipp5cgycskdzf&grant_type=client_credentials', 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success', data)
        })
        .catch((error) => {
            console.error('Error', error);
        })
    }

    useEffect(() => {
        fetchGames()
    },[])



    return (

        <div>
            <Card/>
        </div>
    )
}