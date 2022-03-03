const moment = require('moment-timezone');

moment.tz.setDefault('America/New_York');

moment();

const targetTimezone = process.argv[2];

if (!targetTimezone) {
  console.log('Usage: node <script-file><timezone>');
  process.exit(1);
}

console.log(
  `The time at the ${targetTimezone} timezone is ${moment()
    .tz(targetTimezone)
    .format()}`
);
