import React from "react";
import Image from "next/image";
import './gameListItem.css';
import { release } from "os";

interface Props{
    title?: string;
    desc?: string;
    releaseDate?: string;
    thumbnailURL?: string;
    URL?: string;
}

const GameListItem: React.FC<Props> = ({title, desc, releaseDate, thumbnailURL, URL}) => {
    title = title !== undefined ? title : "TBD";
    desc = desc !== undefined ? desc : "TBD";
    releaseDate = releaseDate !== undefined ? releaseDate : "TBD";
    thumbnailURL = thumbnailURL !== undefined ? thumbnailURL : "/logo.png";
    URL = URL !== undefined ? URL: "";

    releaseDate = "Release Date: " + releaseDate;
    const altText = title + " thumbnail";

    return (
        <section id="gameListItem">
            <div className="itemInfo">
                <h2><a href={URL}>{title}</a></h2>
                <h3>{releaseDate}</h3>
                <p>{desc}</p>
            </div>
            <figure className="itemPic">
                <Image
                    src={thumbnailURL}
                    alt={altText}
                    fill
                    objectFit="cover"
                    style={{borderRadius: '44px'}}
                />
            </figure>
        </section>
    )

}

export default GameListItem;