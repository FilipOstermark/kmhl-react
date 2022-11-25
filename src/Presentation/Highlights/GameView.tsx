import axios from "axios";
import React, { useEffect, useState, ReactNode } from "react";
import { Game } from "../../Domain/Model/Game";
import { URL_GAME } from "../../Core/Constants";
import bgjpg from "../Assets/Images/bg.jpg";

interface GameViewProps {
    game: Game
}

function getVideoOrPlaceholder(mediaLink: string, poster: string): ReactNode {
    const effectivePoster = poster === "" ? bgjpg : poster;
    if (mediaLink != null && mediaLink !== "") {
        return (
            <video
                className="HighlightVideo"
                controls preload="none"
                src={mediaLink}
                poster={effectivePoster} />
        );
    } else {
        return (
            <div className="HighlightVideo" >
                <p>Not available yet</p>
            </div>
        );
    }
}

const GameView: React.FC<GameViewProps> = (props: GameViewProps) => {
    const [mediaLink, setMediaLink] = useState("");
    const [mediaPoster, setMediaPoster] = useState("");
    const game = props.game;
    const gameId = game.id;

    useEffect(() => {
        axios.get(`${URL_GAME}${gameId}/content`)
            .then((res) => {
                // TODO Hacky test - Do it better
                console.log(res.data);
                const url = res.data.media.epg[2].items[0].playbacks[3].url;
                const poster = res.data.media.epg[2].items[0].image.cuts["960x540"].src;
                setMediaLink(url);
                setMediaPoster(poster);
            })
            .catch(() => {
                // Ignored
                console.log("Failed to get game media");
            });
    }, []);

    return (
        <div className="GameView">
            {getVideoOrPlaceholder(mediaLink, mediaPoster)}
        </div>
    );
};

export default GameView;
