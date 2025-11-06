import React from "react";
import Image from "next/image";
import styles from "./gameListItem.module.css"

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
        <section className={styles.gameListItem}>
            <div className={styles.itemInfo}>
                <h2 className={styles.h2}><a href={URL}>{title}</a></h2>
                <h3 className={styles.h3}>{releaseDate}</h3>
                <p className={styles.p}>{desc}</p>
            </div>
            <figure className={styles.itemPic}>
                <Image
                    src={"/delightedgameswebsite" + thumbnailURL}
                    alt={altText}
                    fill
                    objectFit="cover"
                    style={{borderRadius: '44px'}}
                    unoptimized
                />
            </figure>
        </section>
    )

}

export default GameListItem;