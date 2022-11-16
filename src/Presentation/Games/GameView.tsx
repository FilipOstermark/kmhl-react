import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { Game } from '../../Domain/Model/Game';
import { URL_GAME } from "../../Core/Constants";

interface GameViewProps {
    game: Game
}

export default function GameView(props: GameViewProps) {
    const [mediaLink, setMediaLink] = useState("");
    const [mediaPoster, setMediaPoster] = useState("");
    const gameId = props.game.id;
    
    useEffect(() => {
        axios.get(URL_GAME + gameId + "/content").then((res) => {
            // TODO Hacky test - Do it better
            const url = res.data.media.epg[2].items[0].playbacks[3].url; 
            const poster = res.data.media.epg[2].items[0].image.cuts["960x540"].src;       
            setMediaLink(url);
            setMediaPoster(poster);
        })
    }, []);

  return (
    <div className="GameView">
        <video controls preload="none" src={mediaLink} poster={mediaPoster}/>
    </div>
  );
}
