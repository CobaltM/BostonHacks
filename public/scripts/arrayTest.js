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
    "Massachusetts Bay Veterans Center",
    42.4059,
    -71.13129
  ],
  [
    6,
    true,
    true,
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
    "New England Center and Home for Veterans",
    42.35929,
    -71.05836
  ],
  [
    7,
    true,
    false,
    false,
    false,
    true,
    false,
    true,
    false,
    false,
    false,
    "AMVETS",
    42.35788,
    -71.06281
  ],
  [
    8,
    true,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    "Hire Heroes USA"
  ],
  [
    9,
    false,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    "Hiring Our Heroes"
  ],
  [
    10,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    "Hire Veterans"
  ],
  [
    11,
    false,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    "Mass Hire for Veterans"
  ],
  [
    12,
    false,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    "My Next Move"
  ],
  [
    13,
    false,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    "Mass Veterans Employment Representative",
    42.33089,
    -71.0795
  ],
  [
    14,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    false,
    "Mass Home for the Brave Loan Program"
  ],
  [
    15,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    "Caritas Communities",
    42.22532,
    -71.02735
  ],
  [
    16,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    "Veteran Homestead",
    42.59855,
    -71.98193
  ],
  [
    17,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    true,
    "Operation Homefront"
  ]
];

const scoreArray = [6, 2, 6];

let uniqueHash = {};
let outputArray = [];
let x = "";

for (i = 1; i <= 3; i++) {
  if (scoreArray[i - 1] > 0) {
    for (i2 = 0; i2 <= 16; i2++) {
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
