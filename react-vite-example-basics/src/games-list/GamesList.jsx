import GameCard from "../game-card/GameCard";

function GamesList (props) {
    const games = props.games;


    let gamesJsx = games.map(game => (
        <div className="col-lg-3">
            <GameCard game = {game}></GameCard>
        </div>
        )
    );


    return (
        <>
        <div className="row">
            {gamesJsx}
         </div>  
        </>
    );
}

export default GamesList;