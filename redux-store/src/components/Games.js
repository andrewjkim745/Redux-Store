import React, { useState, useEffect } from 'react'
import api from '../api'
import Card from './Card'



export default function Games() {


    const [ games, setGames ] = useState('');
    const [ token, setToken ] = useState('')

    const getAuthToken = async () => {
        
        await fetch(`https://id.twitch.tv/oauth2/token?client_id=${process.env.REACT_APP_API_KEY}&client_secret=${process.env.REACT_APP_Client_Secret}&grant_type=client_credentials`, 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success', data)
            setToken(data.access_token)
        })
        .catch((error) => {
            console.error('Error', error);
        })
        
    }


    const getTopGames = async () => {

        await fetch('https://api.twitch.tv/helix/games/top', 
        {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Client-Id' : process.env.REACT_APP_API_KEY
            },
        })
        .then(response => response.json())
        .then(data => {
            console.log('Got Top Games', data)
            setGames(data)
            
        })
        .catch((error) => {
            console.error('Error', error);
        })
    }

    useEffect(() => {
        getAuthToken()
        getTopGames()
    },[])



    return (

        <div>
            <Card/>
        </div>
    )
}