const game = {
    team1: 'Bayern Munich',
    team2: 'Barcelona FC',
    players: [
        [
            'Neuer',
            'Rafinha',
            'Boateng',
            'Benatia',
            'Bernat',
            'Alonso',
            'Lahm',
            'Alcantara',
            'Schweinsteiger',
            'Muller',
            'Lewandowski'
        ],
        [
            'Ter Stegen',
            'Alves',
            'Pique',
            'Mascherano',
            'Alba',
            'Rakitic',
            'Busquets',
            'Iniesta',
            'Messi',
            'Suarez',
            'Neymar'
        ]
    ],
    score: '0:3',
    scored: ['Messi', 'Messi', 'Neymar'],
    scorers: {
        Messi: 2,
        Neymar: 1
    },
    date: '07/05/2015',
    odds: {
        team1: 6.33,
        x: 3.25,
        team2: 1.5
    }
}

//1. in ra cầu thủ ghi bàn và số bàn ghi
for(const [i, player] of game.scored.entries())
console.log(`Bàn thắng ${i + 1}: ${player}`);

//2.tính tỉ lệ kết quả trận đấu
const odds = Object.values(game.odds);
let average = 0;
for(const odd of odds) average += odd;
average /= odds.length;
console.log(`Tỉ lệ trận đấu là: ${average}`);

//3. in ra tỉ lệ
for(const [team, odds] of Object.entries(game.odds)){
    const teamStr = team === 'x' ? 'hoà' :`thắng của ${game[team]}`;
    console.log(`Tỉ lệ ${teamStr} là: ${odds}`);
}
