let winnerData = [
    [
        { playerName: "Elon", attempts: 4 },
        { playerName: "Vishnu", attempts: 4 },
        { playerName: "Vishwesh", attempts: 4 }
    ],
    [
        { playerName: "Prash", attempts: 3 },
        { playerName: "Saad", attempts: 3 },
        { playerName: "Adnan", attempts: 3 },
        { playerName: "Musk", attempts: 3 }
    ],
    [
        { playerName: "Cenfu", attempts: 1 },
    ],
    [
        { playerName: "abc", attempts: 2 },
        { playerName: "kpi", attempts: 2 },
        { playerName: "qwerty", attempts: 2 },
        { playerName: "poi", attempts: 2 },
    ],
    [
        { playerName: "sd", attempts: 8 },
        { playerName: "sdf", attempts: 8 },
        { playerName: "qwesdfrty", attempts: 8 },
        { playerName: "sdfsdf", attempts: 8 },
    ],
    [
        { playerName: "Huda", attempts: 5 },
        { playerName: "Rahmath", attempts: 5 }
    ],
    [
        { playerName: "Majid", attempts: 6 }
    ],
    [
        { playerName: "Ateeq", attempts: 1 }
    ],
];

// let newPlayer = localStorage.getItem(JSON.parse("winners"));
winnerData.push();
// console.log("First Data",winnerData);

let newWinners = [];
let temp = [];


// console.log(winnerData);//2D Array
winnerData = winnerData.flat();

winnerData.sort((a, b) => a.attempts - b.attempts);

temp[0] = winnerData[0];
let i;
for (i = 1; i < winnerData.length; i++) {
    if (winnerData[i].attempts == winnerData[i - 1].attempts) {
        temp.push(winnerData[i]);
    } else {
        newWinners.push(temp);
        temp = [];
        temp.push(winnerData[i]);
    }
}
temp.push(winnerData[i]);

console.log(newWinners);