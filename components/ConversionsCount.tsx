var days = Math.round(Date.now() / 8640000 - 185859)
console.log(days)

let count = 30000;
let b = 50;
let c = 2;
let d = 0.1;
var e = 1.1;

var day;
for (day = 0; day < days; day++) {
  if (b % 62 == 0) { b=50 } else { b +=2 }
if (c % 4 == 0) { c=2 } else { c +=1 }
if (e % 1.5 == 0) { e=1.1 } else { e +=0.1 }
d += 0.1;
d = Math.round(d * 10) / 10;
e = Math.round(e * 10) / 10;
count += Math.pow(b+c+d, e);
count = Math.round(count);
}

export default function ConversionsCounter() {
  return (
    <h1>
      {count}
    </h1>
  );
}
