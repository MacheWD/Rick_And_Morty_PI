import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import axios from "axios";

export default function Detail() {
    const { detailId } = useParams();
    const [character, setCharacter] = useState({});
    useEffect(() => {
        const URL_BASE = "https://be-a-rym.up.railway.app/api"
        const KEY = "72a38823ddeb.c5321d03f6af9a8f85e3";

        axios(`${URL_BASE}/character/${detailId}?key=${KEY}`)
            .then((response) => setCharacter(response.data))
    }, [detailId]);

    return (
        <div>
            <p>Nombre: {character.name}</p>
            <p>Estado: {character.status}</p>
            <p>Especie: {character.species}</p>
            <p>Genero: {character.gender}</p>
            <p>Origen: {character.origin?.name}</p>
            <p><img src={character.image} /></p>
        </div>
    )
}