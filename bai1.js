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
    date: '07/05/2015',
    odds: {
        team1: 6.33,
        x: 3.25,
        team2: 1.5
    }
}

//1. Tạo mảng cầu thủ
const [player1, player2] = game.players;
console.log(player1,player2);
//2. 

const [gk, ...fieldPlayers] = player1;
const [gk2, ...fieldPlayers2] = player2;
console.log(gk, fieldPlayers);
console.log(gk2, fieldPlayers2);

//3.lấy tất cả cầu thủ trên sân
const allPlayers = [...player1, ...player2];
console.log(allPlayers);

//4.thay người
const players1Final = [...player1,'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

//5.Hiển thị tỉ lệ kết quả trận đấu
const {odds: {team1, x: draw, team2}} = game;
console.log(team1,draw,team2);

//6. Cầu thủ ghi bàn
const printGoals = function(...players){
    console.log(players);
    console.log(`Có ${players.length} bàn thắng đã được ghi`);

}
printGoals(...game.scored);

//7.In ra đội chiến thắng
team1 < team2 && console.log('Team 1 có nhiều khả năng thắng hơn');
team1 > team2 && console.log('Team 2 có nhiều khả năng thắng hơn');
