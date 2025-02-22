console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

/*==========
Naomi Weneck
==========*/

function validateNumber() {
  let countTo;
  let input;
  do {
    input = prompt(`Enter a number.`);
    countTo = Number(input);
    if (isNaN(countTo) || countTo === "") {
      console.log(`Your number, ${input}, is not valid. Please try again.`);
    } else if (countTo == 0) {
      console.log(`There aren't any odd numbers between 0 and 0.`)
    } else {
      console.log(
        `Your number, ${countTo}, is valid! \nHere are all the odd numbers from 0 to ${countTo}:`
      );
    }
  } while (isNaN(countTo) || countTo === "");

  return countTo;
}

// Wow I think I actually understand the DO/WHILE function now!

function printOdds(count) {
  if (count < 0) {
    count = Math.abs(count);
  }

  for (let i = 0; i <= count; i++) {
    if (i % 2 !== 0 && count > 0) {
      console.log(`${i}`);
    } else if (i % 2 !== 0 && count < 0) {
      console.log(`-${i}`);
    }
  }
}

let countTo = validateNumber();
printOdds(countTo);

// I tried to make it user-friendly!
// My methodology was so entirely different from the practice lecture because I wanted to play with the do/while function. Is that okay?

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function confirmName() {
  let typedName;
  do {
    typedName = prompt(`Would you tell me your name, please?`);
    if (typedName !== "") {
      console.log(
        `Your response: ${typedName}\nIt's great to meet you, ${typedName}!`
      );
    } else {
      console.log(
        `Something went wrong. Would you try typing your name again?`
      );
    }
  } while (typedName === "");

  return typedName;
}

function validateAge() {
  let givenAge;
  let age;
  do {
    givenAge = prompt(`How old are you?`);
    age = Number(givenAge);

    if (isNaN(age) || givenAge === "") {
      console.log(
        `Sorry, ${givenAge} is not a valid number, please try again.`
      );
    } else {
      if (age > 0) {
        age = Math.abs(age);
      }
      console.log(
        `Thank you! You said you're ${age}? Let me check if you're old enough to drive...\n...`
      );
    }
  } while (isNaN(age) || givenAge === "");

  return age;
}

function driverCheck(age, userName) {
  let aboveSixteen = `Congrats, ${userName}! You're old enough to drive! `;
  let exactSixteen = `You're at the exact age where you're allowed to start driving!\nYou just need to get a valid license. `;
  let belowSixteen = `Sorry, ${userName}, but you need to wait until you're sixteen to drive. `;
  let ageDifference = 16 - age;
  let almost = `But you're only ${ageDifference} years away! `;
  let yearsExperience = age - 16;
  let experience = `It's been ${yearsExperience} years since you started driving, ${userName}, I bet you're skilled at it.\nYou're old enough to drink, too! `;
  let printLog = ``;
  if (age < 16) {
    printLog += belowSixteen;
    if (age >= 12) {
      printLog += almost;
    }
  } else if (age == 16) {
    printLog += exactSixteen;
  } else {
    printLog += aboveSixteen;
    if (age >= 21) {
      printLog += experience;
    }
  }

  console.log(printLog);
}

console.log(
  `Hello! It's so nice to meet you! My name is Console. Would you tell me your name, please?`
);

let userName = confirmName();

console.log(`So, ${userName}, how old are you?`);

let age = validateAge();

driverCheck(age, userName);

//I got a little silly with the console.log() function. It was too fun! I hope the computer seems friendly.

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let quadLocation = "";

function findQuadrant(x, y) {
  if (x === 0 && y === 0) {
    quadLocation = `Origin`;
  } else if (x === 0 && y !== 0) {
    quadLocation = `X axis`;
  } else if (y === 0 && x !== 0) {
    quadLocation = `Y axis`;
  } else if (x > 0) {
    if (y > 0) {
      quadLocation = `Quadrant I`;
    } else {
      // y < 0
      quadLocation = `Quadrant IV`;
    }
  } else {
    // x < 0
    if (y > 0) {
      quadLocation = `Quadrant II`;
    } else {
      // y < 0
      quadLocation = `Quadrant III`;
    }
  }
}

userX = Number(prompt(`What is your X coordinate?`));

userY = Number(prompt(`What is your Y coordinate?`));

findQuadrant(userX, userY);

if (userX === 0 || userY === 0) {
  console.log(
    `The point (${userX}, ${userY}) is located on the ${quadLocation}.`
  );
} else {
  console.log(`The point (${userX}, ${userY}) is located in ${quadLocation}.`);
}

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let triA = Number(prompt(`Length of triangle side A`));

let triB = Number(prompt(`Length of triangle side B`));

let triC = Number(prompt(`Length of triangle side C`));

let triType = "";

function triangleValid(a, b, c) {
  if (a + b <= c || b + c <= a || c + a <= b || a <= 0 || b <= 0 || c <= 0) {
    //Invalid Check
    console.log(`The sides ${a}, ${b}, and ${c} do not form a valid triangle.
               \nThe sum of any two sides must always be greater than the third side.
               \nNone of the sides can be equal to or less than zero.`);
    triType = "";
    return;
  } else {
    if (a == b && b == c && c == a) {
      triType = `equilateral`;
    } else if ((a == b && c != a) || (b == c && a != b) || (c == a && b != c)) {
      triType = `isosceles`;
    } else if (a != b && b != c && c != a) {
      triType = `scalene`;
    } else {
      triType = `ERROR`;
      // I wanted to include an "error" notifier on the off chance the other logic breaks somewhere.
    }
  }
}

triangleValid(triA, triB, triC);

if (triType != "" && triType != "scalene") {
  console.log(
    `The sides ${triA}, ${triB}, and ${triC} form an ${triType} triangle.`
  );
} else if (triType != "" && triType == "scalene") {
  console.log(
    `The sides ${triA}, ${triB}, and ${triC} form a ${triType} triangle.`
  );
}

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

let planLimit;

let day;

let usage;

//lim = data alotted per month, d = days into the current pay period, u = amount of data used so far,
function dataUsage(lim, d, u) {
  let daysRem = 30 - d;
  let limAvg = lim / 30;
  let dataRemaining = lim - u;
  let usageAvg = u / d;
  let usageDiff = Math.abs(u / d - lim / 30);
  let usageProjection = Math.abs(u / d) * 30;
  let usageProjectionDifference = Math.abs(lim - usageProjection);
  let maxDailyUse = (lim - u) / (30 - d);

  let s = `s`;
  let gbDay = `GB/day.`;
  let usageLevels = `exceeds`;
  let usageRecommendation = `To stay below your data plan, use no more than`;

  if (usageAvg < limAvg) {
    usageLevels = `falls below`;
    usageRecommendation = `To make the most of your data plan, use about`;
  }

  if (usageProjection > lim) {
    usageRecommendation = `You are using more data than the plan allows in the 30-day period.\nConsider upgrading your plan.`;
    maxDailyUse = ``;
    gbDay = ``;
  }

  if (
    usageProjection >= lim * 0.75 &&
    usageProjection <= lim
  ) {
    usageRecommendation = `You are using almost as much data as your plan allows for the 30-day period.\nSince you're so close, you may want to upgrade your plan.`;
    maxDailyUse = ``;
    gbDay = ``;
  }

  if (
    usageProjection <= lim * 0.25 &&
    usageProjection >= 0
  ) {
    usageRecommendation = `You are using less data than the plan allows for the 30-day period.\nConsider downgrading your plan, you're likely paying for data that you don't use.`;
    maxDailyUse = ``;
    gbDay = ``;
  }

  if (dataRemaining <= 0) {
    dataRemaining = 0.0;
  }

  if (daysRem == 1) {
    s = ``;
  }

  console.log(`
    ${d} days used, ${daysRem} day${s} remaining.
    \nPlan GB per 30 day period: ${lim} GB
    \nPlan average daily allowance: ${limAvg.toFixed(2)} GB
    \nActual data used: ${u} GB
    \nActual average daily use: ${usageAvg.toFixed(2)} GB
    \nData remaining in plan: ${dataRemaining.toFixed(2)} GB
    \nYour average daily use ${usageLevels} your plan's average daily allowance by ${usageDiff.toFixed(2)} GB/day.
    \nContinuing this level of usage, you'll use ${usageProjection.toFixed(2)} GB, which ${usageLevels} your current data plan by ${usageProjectionDifference.toFixed(2)} GB.
    \n${usageRecommendation} ${maxDailyUse ? maxDailyUse.toFixed(2) + ` ` + gbDay : ``}
    `);
}

console.log(
  `I'll help you calculate your remaining data usage if you answer a few questions for me.`
);

//Limit
do {
  planLimit = Number(
    prompt(`What is your data limit, in GB, for each 30 day period?`)
  );
  if (planLimit < 0) {
    console.log(`
      The plan limit cannot be a negative number.
      `);
  } else if (planLimit == `` || isNaN(planLimit) || planLimit % 1 !== 0) {
    console.log(`
      The plan limit must be a whole number in GB.
      `);
  }
} while (
  planLimit == `` ||
  isNaN(planLimit) ||
  planLimit % 1 !== 0 ||
  planLimit < 0
);

//Days
do {
  day = Number(
    prompt(`How many days have passed since the start of the current period?`)
  );
  if (day >= 30) {
    console.log(
      `This calculator works based on a 30-day period. Please enter a number between 1 and 29.`
    );
  } else if (day <= 2) {
    console.log(
      `There is not enough data to accurately project future usage.\nThere needs to be at least 3 days of data.`
    );
  } else if (day < 0) {
    console.log(`
      The day cannot be a negative number.
      `);
  } else if (day % 1 !== 0 || isNaN(day)) {
    console.log(`
      The days that have passed must be a whole number.
      `);
  }
} while (
  day == `` ||
  day >= 30 ||
  day <= 2 ||
  day < 0 ||
  day % 1 !== 0 ||
  isNaN(day)
);

//Usage
do {
  usage = Number(prompt(`How much data, in GB, have you used so far?`));

  if (usage < 0) {
    console.log(`
      Usage cannot be a negative number.
      `);
  } else if (usage == `` || isNaN(usage) || usage % 1 !== 0) {
    console.log(`
      Usage must be a whole number in GB.
      `);
  }
} while (usage < 0 || usage == `` || isNaN(usage) || usage % 1 !== 0);

//Run
dataUsage(planLimit, day, usage);
