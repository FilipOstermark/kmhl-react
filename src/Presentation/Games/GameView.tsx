import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Game } from '../../Domain/Model/Game';
import { URL_GAME } from "../../Core/Constants";
import bgjpg from "../Assets/Images/bg.jpg";

interface GameViewProps {
    game: Game
}

function getVideoOrPlaceholder(mediaLink: string, poster: string) {
    let effectivePoster = poster == "" ? bgjpg : poster;
    if (mediaLink != null && mediaLink != "") {
        return (
            <video controls preload="none" src={mediaLink} poster={effectivePoster} />
        );
    } else {
        return (
            <div>
                <p>Not available yet</p>
            </div>
        );
    }
}

export default function GameView(props: GameViewProps) {
    const [mediaLink, setMediaLink] = useState("");
    const [mediaPoster, setMediaPoster] = useState("");
    const gameId = props.game.id;
    
    useEffect(() => {
        axios.get(URL_GAME + gameId + "/content").then((res) => {
            // TODO Hacky test - Do it better
            console.log(res.data);
            
            try {
                const url = res.data.media.epg[2].items[0].playbacks[3].url; 
                const poster = res.data.media.epg[2].items[0].image.cuts["960x540"].src;       
                setMediaLink(url);
                setMediaPoster(poster);
            } catch {
                
            }
        })
    }, []);

  return (
    <div className="GameView">
        {getVideoOrPlaceholder(mediaLink, mediaPoster)}
    </div>
  );
}
