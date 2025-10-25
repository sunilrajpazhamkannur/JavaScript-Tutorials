import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import isSatSun from './exercises-weekend.js';

const today = dayjs();
const theDay = today.add(5, 'days');
const theDay2 = today.add(1, 'months');
const theDay3 = today.subtract(1, 'months');

console.log(theDay.format('MMMM D'))
console.log(theDay2.format('MMMM D'))
console.log(theDay3.format('MMMM D'))
console.log(theDay.format('dddd'))

console.log(isSatSun(today));
console.log(isSatSun(today.add(3, 'days')));