import GameListItem from '@/components/gameListItem/gameListItem';
import './games.css';

export default async function GamesLayout() {
    return (
        <main>
            <h1 id="title">Our Games</h1>
            <hr></hr>
            <GameListItem backgroundURL='/AdobeStock-GalaxyBackground1.jpeg' />
        </main>
    )
}