const dataArray = [
  [
    1,
    true,
    true,
    false,
    false,
    false,
    false,
    true,
    true,
    true,
    true,
    false,
    false,
    "Veterans Northeast Outreach Center",
    42.77247,
    -71.09032
  ],
  [
    2,
    false,
    false,
    true,
    true,
    false,
    false,
    false,
    false,
    false,
    true,
    false,
    false,
    "Wounded Warrior Project"
  ],
  [
    3,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    false,
    true,
    false,
    false,
    "Statewide Advocacy for Veterans Empowerment",
    42.35286,
    -71.06223
  ],
  [
    4,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
    false,
    false,
    true,
    false,
    "Veterans Inc",
    42.27399,
    -71.80075
  ],
  [
    5,
    false,
    true,
    false,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    "Massachusetts Bay Veterans Center", 42.405900, -71.131290)
  ]
];

const scoreArray = [6, 2, 6];

let uniqueHash = {};
let outputArray = [];
let x = "";

for (i = 1; i <= 3; i++) {
  if (scoreArray[i - 1] > 0) {
    for (i2 = 0; i2 <= 2; i2++) {
      if (scoreArray[i - 1] < 3 && dataArray[i2][i * 2 - 1] === true) {
        if (uniqueHash[dataArray[i2][0]]) {
          outputArray.push(dataArray[i2]);
          x = dataArray[i2][0];
          uniqueHash[x] = true;
        }
      } else if (scoreArray[i - 1] >= 3 && dataArray[i2][i * 2] === true) {
        if (!uniqueHash[dataArray[i2][0]]) {
          outputArray.push(dataArray[i2]);
          x = dataArray[i2][0];
          uniqueHash[x] = true;
        }
      }
    }
  }
}

console.log(outputArray);
