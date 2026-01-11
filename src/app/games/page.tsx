'use client';

import GameListItem from '@/components/gameListItem/gameListItem';
import styles from './games.module.css';

export default function GamesLayout() {
    return (
        <main>
            <h1 className={styles.title}>Our Games</h1>
            <hr className={styles.hr}></hr>
            <GameListItem 
                title="Landed"
                desc="Our first major project. Landed invites you to navigate a world on the brink of demise—where every choice shapes the fate of those around you." 
                thumbnailURL='Landed Updated Logo.png' 
                URL='/games'/>
        </main>
    )
}