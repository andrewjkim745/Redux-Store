import React, { useState, useEffect } from 'react'
import api from '../api'
import Card from './Card'



export default function Games() {


    const [ games, setGames ] = useState();


    const fetchGames = async () => {
        const result = await api.get('https://api.twitch.tv/helix/games')
        console.log(result.data)
        
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