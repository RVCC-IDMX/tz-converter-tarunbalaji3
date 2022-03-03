const moment = require('moment-timezone');

moment.tz.setDefault('America/New_York');

const yargs = require('yargs');

moment();

const targetTimezone = yargs.argv._[0];

if (!targetTimezone) {
  console.log('Usage: node <script-file><timezone>');
  process.exit(1);
}

console.log(
  `The time at the ${targetTimezone} timezone is ${moment()
    .tz(targetTimezone)
    .format()}`
);
