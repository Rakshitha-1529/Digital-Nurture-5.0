function ListofPlayers() {
    const players = [
        { name: "Mr.Jack", score: 50 },
        { name: "Mr.Michael", score: 70 },
        { name: "Mr.John", score: 40 },
        { name: "Mr.Ann", score: 61 },
        { name: "Mr.Elisabeth", score: 61 },
        { name: "Mr.Sachin", score: 95 },
        { name: "Mr.Dhoni", score: 100 },
        { name: "Mr.Virat", score: 105 },
        { name: "Mr.Jadeja", score: 64 },
        { name: "Mr.Raina", score: 75 },
        { name: "Mr.Rohit", score: 89 }
    ];

    return (
        <div>
            <h2>List Of Players</h2>

            <table border="1" cellPadding="8">
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Score</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        players.map((player, index) => (
                            <tr key={index}>
                                <td>{player.name}</td>
                                <td>{player.score}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <h2>Players with Score below 70</h2>

            <ul>
                {
                    players
                        .filter(player => player.score < 70)
                        .map((player, index) => (
                            <li key={index}>
                                {player.name} - {player.score}
                            </li>
                        ))
                }
            </ul>
        </div>
    );
}

export default ListofPlayers;