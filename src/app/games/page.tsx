import GameListItem from '@/components/gameListItem/gameListItem';
import './games.css';

export default async function GamesLayout() {
    return (
        <main>
            <h1 id="title">Our Games</h1>
            <hr></hr>
            <GameListItem 
                title="Landed"
                desc="Our first major project. Landed invites you to navigate a world on the brink of demise—where every choice shapes the fate of those around you." 
                thumbnailURL='/Landed Updated Logo.png' 
                URL='/landed'/>
        </main>
    )
}