const { time } = require('console');
const moment = require('moment-timezone');

const yargs = require('yargs');

moment.tz.setDefault('America/New_York');

// console.log(yargs.argv);

let targetTimezone;

// console.log(targetTimezone);

if (yargs.argv._.length === 0) {
    console.log("Usage: node <script-file> <timezone>");
    process.exit(1);
}
else {
    targetTimezone = yargs.argv._[0];
}

const flag = yargs.argv._[0];
const length = yargs.argv._.length;
// console.log(targetTimezone);
// console.log(yargs.argv);
console.log(flag);
console.log(length);


/* if (yargs.argv._[1] === "true") {
    console.log(`The time at the ${targetTimezone} timezone is ${moment().tz(targetTimezone).format('dddd, MMMM Do YYYY, h:mm:ss a')}`);
}
else {
    console.log(`The time at the ${targetTimezone} timezone is ${moment().tz(targetTimezone).format()}`);
} */


//console.log(`The time at the ${targetTimezone} timezone is ${moment().tz(targetTimezone).format('dddd, MMMM Do YYYY, h:mm:ss a')}`);


