import React from "react";
import './gameListItem.css';
import { release } from "os";

interface Props{
    title?: string;
    desc?: string;
    releaseDate?: string;
    thumbnailURL?: string;
    backgroundURL?: string;
}

const GameListItem: React.FC<Props> = ({title, desc, releaseDate, thumbnailURL, backgroundURL}) => {
    title = title !== undefined ? title : "TBD";
    desc = desc !== undefined ? desc : "TBD";
    releaseDate = releaseDate !== undefined ? releaseDate : "TBD";
    thumbnailURL = thumbnailURL !== undefined ? thumbnailURL : "/logo.png";
    backgroundURL = backgroundURL !== undefined ? backgroundURL : "/AdobeStock-GalaxyBackground1.jpeg";

    return (    
        <div style={{backgroundImage: backgroundURL}}>
            <h1>{title}</h1>
            <h2>{releaseDate}</h2>
            <p>{desc}</p>
        </div>
    )

}

export default GameListItem;