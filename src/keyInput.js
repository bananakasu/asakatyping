const Romanizer = require('js-hira-kata-romanize');

const r = new Romanizer();
const roman = r.romanize('ちょうきゅうめいのちょうすけ');

console.log(roman);
